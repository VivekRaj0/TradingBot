# File Structure
```bash
trading/
│
├── node_modules       # Node dependencies
├── index.js           # Main entry point
├── tradeLogic.js      # File containing trading logic
├── data.js            # Mock API data
├── utils.js           # Utility functions (e.g., moving average)
├── .gitignore         # contains file that is not needed to be pushed to GitHub    
└── package.json       # NPM dependencies
```

# Documentation

## Trading Logic
   The bot buys when the stock price drops by 2% from the previous value and sells when the price rises by 3%.

## API Usage 
   The bot uses mock stock prices and executes trades accordingly.

## How to Run 
   Install dependencies with 

   ```bash 
   npm install
   ``` 

   and start the application with 

   ```bash
   npm start
   ```