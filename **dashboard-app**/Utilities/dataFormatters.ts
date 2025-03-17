export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2
    }).format(value);
};

export const formatPercentage = (value: number) => {
    return `${(value * 100).toFixed(2)}%`;
};