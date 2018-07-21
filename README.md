# Financial Advisor with Object.Create
  
## Requirements:

[Project Requirements](https://github.com/nashville-software-school/client-side-mastery/blob/master/book-3-the-initiate/chapters/JS_OBJECT_CREATE.md)
  
## Currently Working On:
 
## Remaining Features:

## Stretch Goals:

# Completed features: 

* Created object with Object.create that contains the following properties:
    * Company (enumerable, writable, property)
    * Specialty (enumerable, writable, property)
    * Name (enumerable, property)
    * Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
    * Worth (non-enumerable, method)
        * When invoked, should add all transactions from portfolio array
    * Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
        * When invoked, should add a negative number to the array
    * Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
        * When invoked, should add a positive number to the portfolio array
* Build HTML components in document.createElement to display the advisor's name, company, and specialty
* Refactor portfolio as an object (stretch goal)
    * Need to add logic to check portfolio for existing symbol and make add/remove decisions based on portfolio data when invoking buy/sell