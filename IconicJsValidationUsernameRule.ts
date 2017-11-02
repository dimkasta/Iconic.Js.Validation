class IconicJsValidationUsernameRule extends IconicJsValidationRule {
    public constructor(length: number) {
        super();
        this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        this.addRule("minlength", length, IconicJsValidationMessage.MINLENGTH);
        this.addRule("pattern", IconicJsValidationPattern.ALPHANUMERIC, IconicJsValidationMessage.ALPHANUMERIC);
    }
}