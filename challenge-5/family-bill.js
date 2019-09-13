class FamilyBill {

    constructor(name, percentsTips, bills) {
        this.name = name;
        this.percentsTips = percentsTips;
        this.bills = bills;
        this.tips = [];
        this.paidAmounts = [];
    }

    addBill(...bill) {
        this._bills.push(...bill);
    }

    calculateTipAndPaidAmount() {

        for (let bill of this.bills) {
            
            const percent = this._chooseTipPercent(bill);
            const tip = this._calculateTip(bill, percent);
            const paidAmount = this._calculatePaidAmount(bill, percent);
            
            this.tips.push(tip);
            this.paidAmounts.push(paidAmount);
        }
    }

    _chooseTipPercent(bill) {
        for (let percentTip of this.percentsTips) {
            if (percentTip.min < bill && percentTip.max > bill) {
                return percentTip.percent;
            }
        }
    }

    _calculateTip(bill, percentTip) {
        return (bill / 100) * percentTip;
    }

    _calculatePaidAmount(bill, percentTip) {
        const tip = (bill / 100) * percentTip;
        return bill + tip;
    }
}

module.exports = {
    FamilyBill: FamilyBill
};
