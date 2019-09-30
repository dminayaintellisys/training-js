const bills = [124, 48, 268];
const tips = bills.map(bill => calculateTip(bill));
const totalAmounts = bills.map(bill => calculateTip(bill) + bill);

console.log('bills: \t\t', bills);
console.log('tips: \t\t', tips);
console.log('total amounts: \t', totalAmounts);

/**
 * Calculate the bill's tip
 *
 * @param {number} bill - bill
 * @return {number} bill's tip
 */
function calculateTip(bill) {
    
    let tipPercent = 20;
    
    if (bill > 50 && bill < 200) {
        tipPercent = 15;
    } else if (bill > 200) {
        tipPercent = 10;
    }
    
    return (bill / 100) * tipPercent;
}
