function calculateMovingAverage(prices, period = 3) {
    let sum = 0;
    return prices.map((price, index) => {
        sum += price.price;
        if (index >= period) sum -= prices[index - period].price;
        return sum / Math.min(index + 1, period);
    });
}

export { calculateMovingAverage };