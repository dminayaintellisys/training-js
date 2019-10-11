/**
 * Calculate the tips's average
 * 
 * @param {number[]} tips - tips
 *
 * @return {number} tips' average
 */
const calculateTipsAverage = function(tips) {
    return tips.reduce((tipsAdded, tip) => tipsAdded + tip) / tips.length;
};

module.exports = {
    calculateTipsAverage: calculateTipsAverage
};
