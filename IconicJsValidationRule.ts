class IconicJsValidationRule {
    public Rules: {};
    public Messages: {};

    public constructor() {
        this.Rules = {};
        this.Messages = {};
    }

    public addRule(rulename, modifier, message)
    {
        this.Rules[rulename] = modifier;
        this.Messages[rulename] = message;
    }
}
