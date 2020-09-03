# Paris Real Estate Price Prediction: Project Overview
Recently, my family and I decided to buy a new apartment in Paris. It gave me the idea to try to understand how the price of an apartment is calculated and what are the main drivers that impact the sale price of an apartment in Paris.

* Created a tool that estimates the price of an apartment in Paris in 2020 (MAE ~ $ 11K) to help people finding the best price to sold or buy an apartment.
*   Scraped more than 4000 announcements for the sales of apartments from LogicImmo website using python and selenium.
*   Engineered features from the text of each announcements description to get the different caracteristics of an apartment in Paris such as balcony, patio, cellar, parking, floor of the apartment, floor of the building.
*   Optimized Linear, Lasso, Ridge, and Random Forest Regressors using GridsearchCV to reach the best model.
*   Built a client facing API using flask.
*   Used AWS to put the model in production.

## Code and Resources Used

**Python Version:** 3.7
**For stacking:** https://towardsdatascience.com/a-guide-to-ensemble-learning-d3686c9bed9a
**FlaskAPI tutorial:** https://towardsdatascience.com/productionize-a-machine-learning-model-with-flask-and-heroku-8201260503d2
**UI inspiration:** https://github.com/codebasics/py/tree/master/DataScience/BangloreHomePrices
