import flask
from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import pickle
import numpy as np
from data_input import data_in
import pandas as pd

app = Flask(__name__)
CORS(app)
def load_models():
    file_name = "models/model_file.p"
    with open(file_name, 'rb') as pickled:
       data = pickle.load(pickled)
       model = data['model']
    return model

def height(x):
    if x ==0:
        return 'Average'
    elif x<4:
        return 'Small'
    elif x<=9:
        return 'Average'
    elif x<=12:
        return 'High'
    else:
        return 'Tower'
    
def preprocessing(features):
    features[0]=np.log(features[0])
    new_features = [0 if x=='No' else 1 if x=="Yes" else x for x in features]
    new_features.append(height(new_features[5]))
    df=pd.DataFrame(new_features)
    return new_features

def load_encoder():
    with open('models/encoder.p', 'rb') as pickled:
        data = pickle.load(pickled)
        encoder=data['encoder']
    return encoder

@app.route('/')
def home():
    return render_template('../UI_House/index.html')

@app.route('/predict', methods=['POST'])
def predict():
 
    # parse input features from request
    request_json = request.form
    
    x = json.loads(request_json.get('input'))
    my_features=preprocessing(x)
    data_in=pd.DataFrame(np.array(my_features).reshape(1,-1),columns=['m2', 'nb_rooms','nb_bedrooms','nb_bath','apartment_floor','building_floor','Cellar','Parking', 'balc_patio','Renovated', 'Ground_floor','Last_floor', 'district','building_height'])
    encoder=load_encoder()
    
    # stub input features
    data_in_enc=pd.DataFrame(encoder.transform(np.array(data_in[['balc_patio','district','building_height']]).reshape(1,-1)))
    data_in_enc.columns=encoder.get_feature_names(['balc_patio','district','building_height'])
    data_in.drop(['balc_patio','district','building_height'],axis=1,inplace=True)
    data_out=pd.concat([data_in,data_in_enc],axis=1)
 

    # load model
    model = load_models()
    prediction = int(np.exp(model.predict(data_out)[0])*1000)
    response = jsonify({
        'estimated_price': prediction
    })
    return response, 200
if __name__ == '__main__':
    app.run(debug=True)
