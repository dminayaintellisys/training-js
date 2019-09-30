class FamilyBill {

    /**
     * @constructor
     * @param {string} name - name of the person
     * @param {Object[]} percentsTips - percents to calculate the tips
     * @param {number[]} bills - family's bills
     */
    constructor(name, percentsTips, bills) {
        this.name = name;
        this.percentsTips = percentsTips;
        this.bills = bills;
        this.tips = [];
        this.paidAmounts = [];
    }

    /**
     * Add one or more bill to the family
     *
     * @param {number[]} bill - one or more bill to add to the family
     */
    addBill(...bill) {
        this._bills.push(...bill);
    }

    /**
     * Calculate the family's tips and paids amounts
     */
    calculateTipAndPaidAmount() {

        for (let bill of this.bills) {
            
            const percent = this._chooseTipPercent(bill);
            const tip = this._calculateTip(bill, percent);
            const paidAmount = this._calculatePaidAmount(bill, percent);
            
            this.tips.push(tip);
            this.paidAmounts.push(paidAmount);
        }
    }

    /**
     * Choose the percent to calculate the bill's tip
     *
     * @param {number} bill - bill
     * 
     * @return {number} return the percent to calculate the bill's tip
     */
    _chooseTipPercent(bill) {
        for (let percentTip of this.percentsTips) {
            if (percentTip.min < bill && percentTip.max > bill) {
                return percentTip.percent;
            }
        }
    }

    /**
     * Calculate the bill's tip
     *
     * @param {number} bill - bill
     * @param {number} percentTip - percent to calculate the bill's tip
     *
     * @return {number} the bill's tip
     */
    _calculateTip(bill, percentTip) {
        return (bill / 100) * percentTip;
    }

    /**
     * Calculate the bill's paid amount
     *
     * @param {number} bill - bill
     * @param {number} percentTip - percent to calculate the bill's tip
     *
     * @return {number} the bill's paid amount
     */
    _calculatePaidAmount(bill, percentTip) {
        const tip = this._calculateTip(bill, percentTip);
        return bill + tip;
    }
}

module.exports = {
    FamilyBill: FamilyBill
};
