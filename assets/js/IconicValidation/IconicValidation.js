import IconicRequiredRule from "./Rules/IconicRequiredRule";
import IconicMinimumLengthRule from "./Rules/IconicMinimumLengthRule";
import IcominMaximumLengthRule from "./Rules/IconicMaximumLengthRule";
import IconicAlphanumericRule from "./Rules/IconicAlphanumericRule";
import IconicEmailRule from "./Rules/IconicEmailRule";
import IconicPasswordVerificationRule from "./Rules/IconicPasswordVerificationRule";
import IconicDigitRule from "./Rules/IconicDigitRule";

class IconicValidation{
    constructor(){
        this.initialized = false;
        console.warn("Validation Service Loaded");
        console.error("Compile the code for production!!!");
    }

    init(formId, grecaptcha, debug){
        self = this;
        this.form = $(`#${formId}`);
        this.grecaptcha = grecaptcha;

        this.form.validate({
            debug: debug,
            onkeyup: function( element, event ) {
                if ( event.which === 9 && this.elementValue(element) === "" ) {
                    return;
                } else {
                    this.element(element);
                }
            },
            submitHandler: function (form){
                self.validateRecaptcha(form);
            }
        });
        this.initialized = true;

    }

    addRule(id, rule){
        let element = $(`#${id}`);
        if(element.length === 0){
            return Error("Element " + id + " Not found");
        }

        if(this.isInitialized()){
            element.rules("add", rule);
        }
    }

    isInitialized(){
        if( ! this.initialized){
            throw Error("Please initialize the form validation first")
        }
        return true;
    }

    getRequiredRule(){
        return IconicRequiredRule.Rule();
    }

    getMinimumLengthRule(length){
        return IconicMinimumLengthRule.Rule(length);
    }

    getMaximumLengthRule(length){
        return IcominMaximumLengthRule.Rule(length);
    }

    getAlphaNumericRule() {
        return IconicAlphanumericRule.Rule();
    }

    getEmailRule() {
        return IconicEmailRule.Rule();
    }

    getPasswordVerificationRule(passwordId){
        return IconicPasswordVerificationRule.Rule(`#${passwordId}`)
    }

    getDigitRule(){
        return IconicDigitRule.Rule();
    }

    validateRecaptcha(form){
        if(self.grecaptcha === undefined || self.grecaptcha === null || self.grecaptcha.getResponse()){
            form.submit();
        }
        else {
            alert("Θα πρέπει να τικάρετε την επιλογή 'Δεν είμαι ρομπότ'");
        }
    }
}
export default IconicValidation;
