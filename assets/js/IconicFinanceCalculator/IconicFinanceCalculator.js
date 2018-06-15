window.Finance = require('financejs');

class IconicFinanceCalculator {
    init(amountId, advanceId, rateId, paymentsId, paymentId) {
        self = this;
        this.Finance = new Finance();
        this.mode = 1; //monthly

        this.amountElement = $(amountId);
        this.advanceElement = $(advanceId);
        this.rateElement = $(rateId);
        this.paymentsElement = $(paymentsId);
        this.paymentElement = $(paymentId);
        this.selectorString = amountId + "," + advanceId + "," + rateId + "," + paymentsId;
        $(document).on("keyup", this.selectorString, function () {
            self.AmortizationListener();
        });
        this.AmortizationListener();
        console.warn(this.Amortization(30000, 10000, 7.5, 60) === 400.76 ? "Amortization works" : "Error in Amortization");
        console.error("Compile the code for prod!!!!!!");
    }

    AmortizationListener() {
        this.paymentElement.val(
            this.Amortization(
                this.amountElement.val(),
                this.advanceElement.val(),
                this.rateElement.val(),
                this.paymentsElement.val()
            ))
        ;
    }

    Amortization(amount, advance, rate, payments) {
        return this.Finance.AM(amount - advance, rate, payments, this.mode);
    }
}

export default IconicFinanceCalculator;