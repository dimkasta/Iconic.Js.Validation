class IconicJsValidationUsernameRule extends IconicJsValidationRule {
    public constructor(length: number, debug: boolean) {
        super(debug);
        if(this.Debug == true)
        {
            console.warn("Creating Username Rule");
        }
        this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        this.addRule("minlength", length, IconicJsValidationMessage.MINLENGTH);
        this.addRule("pattern", IconicJsValidationPattern.ALPHANUMERIC, IconicJsValidationMessage.ALPHANUMERIC);
    }
}