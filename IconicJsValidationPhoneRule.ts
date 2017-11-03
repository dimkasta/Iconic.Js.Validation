class IconicJsValidationPhoneRule extends IconicJsValidationRule {
    public constructor(required: boolean, debug: boolean) {
        super(debug);
        if(this.Debug == true)
        {
            console.warn("Creating Phone Rule");
        }
        if(required) {
            this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        }
        this.addRule("minlength", 10, IconicJsValidationMessage.TELEPHONE_PATTERN);
        this.addRule("maxlength", 10, IconicJsValidationMessage.TELEPHONE_PATTERN);
        this.addRule("digits", true, IconicJsValidationMessage.NUMERIC);
    }
}