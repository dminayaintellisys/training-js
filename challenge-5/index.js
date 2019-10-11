const {FamilyBill} = require('./family-bill');
const {calculateTipsAverage} = require('./tips-average-calculator');

const johnFamilyPercentsTips = [
    {min: Number.MIN_SAFE_INTEGER, max: 50, percent: 20},
    {min: 50, max: 200, percent: 15},
    {min: 200, max: Number.MAX_SAFE_INTEGER, percent: 10}
]

const markFamilyPercentsTips = [
    {min: Number.MIN_SAFE_INTEGER, max: 100, percent: 20},
    {min: 100, max: 300, percent: 10},
    {min: 300, max: Number.MAX_SAFE_INTEGER, percent: 25}
]

const johnFamilyBills = [124, 48, 268, 180, 42];
const markFamilyBills = [77, 375, 110, 45];

const johnFamily = new FamilyBill("John's family", johnFamilyPercentsTips, johnFamilyBills);
const markFamily = new FamilyBill("Mark's family", markFamilyPercentsTips, markFamilyBills);

johnFamily.calculateTipAndPaidAmount();
markFamily.calculateTipAndPaidAmount();

console.log(`John's family`);
console.log('bills: ', johnFamily.bills);
console.log('tips: ', johnFamily.tips);
console.log('paid amounts: %s \n', johnFamily.paidAmounts);

console.log(`Mark's family`);
console.log('bills: ', markFamily.bills);
console.log('tips: ', markFamily.tips);
console.log('paid amounts: %s \n', markFamily.paidAmounts);

const johnFamilyTipsAverage = calculateTipsAverage(johnFamily.tips);
const markFamilyTipsAverage = calculateTipsAverage(markFamily.tips);

console.log(`John's family tips average: ${johnFamilyTipsAverage}`);
console.log(`Mark's family tips average: ${markFamilyTipsAverage}\n`);

if (johnFamilyTipsAverage > markFamilyTipsAverage) {
    console.log(`John's family paid the highest tips on average: ${johnFamilyTipsAverage}`);
} else {
    console.log(`Mark's family paid the highest tips on average: ${markFamilyTipsAverage}`);
}
