const calculateTipsAverage = function(tips) {
    return tips.reduce((tipsAdded, tip) => tipsAdded + tip) / tips.length;
};

module.exports = {
    calculateTipsAverage: calculateTipsAverage
};
