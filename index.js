import express from 'express';
import stockPrices from './data.js';
import { executeTrade, getTradeSummary } from './tradeLogic.js';

const app = express();
const PORT = 3000;

// Route to simulate trading bot execution
app.get('/run-bot', (req, res) => {
    executeTrade(stockPrices);
    res.json(getTradeSummary());
});

// Route to check the trade summary
app.get('/summary', (req, res) => {
    res.json(getTradeSummary());
});

app.listen(PORT, () => {
    console.log(`Trading bot running on PORT:${PORT}`);
});