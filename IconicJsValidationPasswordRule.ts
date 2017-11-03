class IconicJsValidationPasswordRule extends IconicJsValidationRule {
    public constructor(length: number, debug: boolean) {
        super(debug);
        if(this.Debug == true)
        {
            console.warn("Creating Password Rule");
        }
        this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        this.addRule("minlength", length, IconicJsValidationMessage.MINLENGTH);
    }
}