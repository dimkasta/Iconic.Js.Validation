class IconicJsValidationPostalCodeRule extends IconicJsValidationRule {
    public constructor(required: boolean) {
        super();
        if(required) {
            this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        }
        this.addRule("minlength", 5, IconicJsValidationMessage.POSTAL_CODE);
        this.addRule("maxlength", 5, IconicJsValidationMessage.POSTAL_CODE);
        this.addRule("digits", true, IconicJsValidationMessage.NUMERIC);
    }
}