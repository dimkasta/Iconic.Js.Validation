class IconicJsValidationPasswordCheckRule extends IconicJsValidationRule {
    public constructor(length: number, passwordFieldId: string) {
        super();
        this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        this.addRule("minlength", length, IconicJsValidationMessage.MINLENGTH);
        this.addRule("equalTo", passwordFieldId, IconicJsValidationMessage.PASSWORD_CHECK);
    }
}