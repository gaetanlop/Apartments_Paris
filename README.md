# Paris Real Estate Price Prediction: Project Overview
Recently, my family and I decided to buy a new apartment in Paris. It gave me the idea to try to understand how the price of an apartment is calculated and what are the main drivers that impact the sale price of an apartment in Paris.

* Created a tool that estimates the price of an apartment in Paris in 2020 (MAE ~ $ 11K) to help people finding the best price to sold or buy an apartment.
*   Scraped more than 4000 sell announcements of apartments in Paris from LogicImmo website using python and selenium.
*   Engineered features from the text of each announcements description to get the different caracteristics of an apartment in Paris such as balcony, patio, cellar, parking, floor of the apartment, floor of the building.
*   Optimized Linear, Lasso, Ridge, and Random Forest Regressors using GridsearchCV to reach the best model.
*   Built a client facing API using flask.
*   Used AWS to put the model in production.

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
