let balance = 10000; // Initial balance
let stockQuantity = 0;
let tradeHistory = [];
const BUY_THRESHOLD = 0.98;
const SELL_THRESHOLD = 1.03;

function executeTrade(prices) {
    prices.forEach((stock, index) => {
        const previousPrice = index > 0 ? prices[index - 1].price : stock.price;
        const priceChange = stock.price / previousPrice;

        if (priceChange <= BUY_THRESHOLD && balance > stock.price) {
            // Buy logic
            const amountToBuy = Math.floor(balance / stock.price);
            balance -= amountToBuy * stock.price;
            stockQuantity += amountToBuy;
            tradeHistory.push({ action: 'BUY', price: stock.price, quantity: amountToBuy, time: stock.time });
        } else if (priceChange >= SELL_THRESHOLD && stockQuantity > 0) {
            // Sell logic
            balance += stockQuantity * stock.price;
            tradeHistory.push({ action: 'SELL', price: stock.price, quantity: stockQuantity, time: stock.time });
            stockQuantity = 0;
        }
    });
}

function getTradeSummary() {
    return {
        balance,
        tradeHistory,
        stockQuantity,
    };
}

export { executeTrade, getTradeSummary };
