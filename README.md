# Paris Real Estate Price Prediction Web App: Project Overview
**Final Product Hosted On Heroku:** https://house-price-prediction-paris.herokuapp.com/

I created a web app that estimates the price of an apartment in Paris in 2020. Such a tool can be used to help people finding the best price to sold or buy an apartment. It also can be used by real estate companies to give an estimation of the price of an apartment of one of their clients without sending an expert to check the apartment.

*   Created a web app that estimates the price of an apartment in Paris in 2020 (MAE ~ € 74 K).
*   Scraped more than 4000 sell announcements of apartments in Paris from LogicImmo website using python and selenium.
*   Engineered features from the text of each announcements description to get the different caracteristics of an apartment in Paris such as balcony, patio, cellar, parking, floor of the apartment, floor of the building.
*   Optimized Linear, Lasso, Ridge, Random Forest Regressors and XGBoost Regressors using RandomizedSearchCV to reach the best model.
*   Built a client facing API using flask.
*   Used HTML, CSS, JS for the UI.
*   Deployed the model on AWS EC2 instance and on Heroku.

## Code and Resources Used

**Python Version:** 3.7

**For Web Framework Requirements:** ```pip install -r requirements.txt```

**For stacking:** https://towardsdatascience.com/a-guide-to-ensemble-learning-d3686c9bed9a

**Flask Productionization:** https://towardsdatascience.com/productionize-a-machine-learning-model-with-flask-and-heroku-8201260503d2

**UI inspiration:** https://github.com/codebasics/py/tree/master/DataScience/BangloreHomePrices

**AWS EC2 Tutorial:** https://www.youtube.com/watch?v=q8NOmLD5pTU&t=373s

## Web Scraping
Scraped more than 4000  sell announcements of apartments in Paris from logic-immo.com. With each annoucements, I scrapped the following things:
* Price
* Number of rooms
* Number of bedrooms
* Location
* Description of the property: Cellar, Parking, Balcony, number of floors of the building, floor of the apartment.

## Data Cleaning
Before going to the EDA or the Model Building part, I needed to clean up the data so that it can be used by a model or for an Exploratory Data Analysis. I made the following changes and created the following variables:
* From Location I extracted the district.
* Parsed numeric data out of Price
* Parsed numeric data out of area
* Parsed numeric data out of number of rooms
* Parsed numeric data out of number of bedrooms
* Made columns for if different caracteristics of an apartment were listed in the apartment description:
  * Extracting the number of floor of the building
  * Extracting where the apartment is located in the building
  * Extracting the number of bathrooms
  * Cellar
  * Parking
  * Balcony
  * Heating type
  * Renovated
* Created a categorical feature 'Building Height' based on the number of floors of the building.
* Created two categoricals features 'Las floor' and 'Ground Floor' based on the number of floors of the building and the floor of the apartment.

## Exploratory Data Analysis
Before starting the EDA I made a few assumptions, I tried to find out if they were valid or not.
 * Obviously, the higher the area of a home, the higher the price of the apartment.
 * The higher the number of rooms,bedrooms,bathrooms, the higher the price of the apartment. The number of rooms/bedrooms/bathrooms must be correlated with the area.
 * The height of the building might be negatively correlated with the price.
 * The presence of a Parking, a Cellar or a balcony must increase the price.
 * I have not any assumptions regarding the type of Heating.
 * In Paris some districts are way more expensive than others.
 * I think that an apartment at the Last floor is more expensive. At the contrary, an apartment at the ground floor must be less expensive. An apartment that have been renovated recently must be more expensive too.
 
I made a univariate and bivariate analysis of the column SalePrice witht the features that I thought were most interesting.I looked at the distributions of the numerical features and I transformed the skewed numerical features using log trnasformation. I also looked at the value counts for the various categorical variables. I detected and removed outliers. I explored the colinearity between the different features. I made pivot_tables to undertand the relationship between SalePrice and the different categorical features.
Below are a few highlights from the things I looked at.

![alt text](https://github.com/gaetanlop/ds_project_house/blob/master/images/Heatmap.png)
![alt text](https://github.com/gaetanlop/ds_project_house/blob/master/images/bedrooms.PNG)
![alt text](https://github.com/gaetanlop/ds_project_house/blob/master/images/disrict_average_price.PNG)

## Model Building
First, I transformed the categorical variables into dummy variables. I also split the data into train and tests sets with a test size of 20%.
I tried three different models and evaluated them using Mean Absolute Error:
* **Linear Regression**: - Baseline for the model
* **Lasso**: - Because some independent variables were highly correlated and because of the sparse data, I thought that using a normalized regression like lasso would be a good idea.  
* **Ridge**: - Because some independent variables were highly correlated and because of the sparse data, I thought that using a normalized regression like ridge would be a good idea.  
* **Random Forest** 
* **XGBoost**
* **Stacked Model**: I wanted to implement what I learned recently on Model Stacking. It works well.

## Model performance
The Stack Model outperformed the other approaches on the validation set. Here are the results in K euros.
* **Linear Regression**: MAE= 82.6
* **Random Forest**: MAE=77.6
* **XGBoost**: MAE=80.5
* **Stacked Model**: MAE=74.9

## Productionization and Deployment
I built a client facing API using Flask and deployed it using heroku.
* **Final Product Hosted On Heroku:** https://house-price-prediction-paris.herokuapp.com/


