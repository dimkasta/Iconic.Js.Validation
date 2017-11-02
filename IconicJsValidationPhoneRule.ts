class IconicJsValidationPhoneRule extends IconicJsValidationRule {
    public constructor(required: boolean) {
        super();
        if(required) {
            this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        }
        this.addRule("minlength", 10, IconicJsValidationMessage.TELEPHONE_PATTERN);
        this.addRule("maxlength", 10, IconicJsValidationMessage.TELEPHONE_PATTERN);
        this.addRule("digits", true, IconicJsValidationMessage.NUMERIC);
    }
}