class IconicJsValidationAlphanumericRule extends IconicJsValidationRule {
    public constructor(required: boolean, debug: boolean) {
        super(debug);
        if(this.Debug == true)
        {
            console.warn("Creating Alphanumeric Rule");
        }
        if(required) {
            this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        }
        this.addRule("pattern", IconicJsValidationPattern.ALPHANUMERIC, IconicJsValidationMessage.ALPHANUMERIC);
    }
}