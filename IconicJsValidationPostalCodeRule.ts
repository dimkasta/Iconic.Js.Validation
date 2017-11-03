class IconicJsValidationPostalCodeRule extends IconicJsValidationRule {
    public constructor(required: boolean, debug: boolean) {
        super(debug);
        if(this.Debug == true)
        {
            console.warn("Creating Postal Code Rule");
        }
        if(required) {
            this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        }
        this.addRule("minlength", 5, IconicJsValidationMessage.POSTAL_CODE);
        this.addRule("maxlength", 5, IconicJsValidationMessage.POSTAL_CODE);
        this.addRule("digits", true, IconicJsValidationMessage.NUMERIC);
    }
}