class IconicJsValidationEmailRule extends IconicJsValidationRule {
    public constructor() {
        super();
        this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        this.addRule("email", true, IconicJsValidationMessage.EMAIL);
    }
}
