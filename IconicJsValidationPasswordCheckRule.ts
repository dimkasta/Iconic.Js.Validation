class IconicJsValidationPasswordCheckRule extends IconicJsValidationRule {
    public constructor(length: number, passwordFieldId: string, debug: boolean) {
        super(debug);
        if(this.Debug == true)
        {
            console.warn("Creating Password Check Rule");
        }
        this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        this.addRule("minlength", length, IconicJsValidationMessage.MINLENGTH);
        this.addRule("equalTo", passwordFieldId, IconicJsValidationMessage.PASSWORD_CHECK);
    }
}