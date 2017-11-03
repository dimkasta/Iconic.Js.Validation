class IconicJsValidationEmailRule extends IconicJsValidationRule {
    public constructor(debug: boolean) {
        super(debug);
        if(this.Debug == true)
        {
            console.warn("Creating Email Rule");
        }
        this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        this.addRule("email", true, IconicJsValidationMessage.EMAIL);
    }
}