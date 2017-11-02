class IconicJsValidationAlphanumericRule extends IconicJsValidationRule {
    public constructor(required: boolean) {
        super();
        if(required) {
            this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        }
        this.addRule("pattern", IconicJsValidationPattern.ALPHANUMERIC, IconicJsValidationMessage.ALPHANUMERIC);
    }
}
