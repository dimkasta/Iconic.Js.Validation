class IconicJsValidationRule {
    public Rules: {};
    public Messages: {};
    public Debug: boolean;

    public constructor(debug: boolean) {
        this.Rules = {};
        this.Messages = {};
        this.Debug = debug;
        if(this.Debug == true)
        {
            console.warn("Creating Base Rule");
        }
    }

    public addRule(rulename, modifier, message)
    {
        this.Rules[rulename] = modifier;
        this.Messages[rulename] = message;
        if(this.Debug)
        {
            console.groupCollapsed("Added rule: " + rulename + "(" + modifier + "): " + message);
            let keys = Object.keys(this.Rules);
            let length = keys.length;
            console.group("Current rules:");
            for(let x =0; x < length; x++)
            {
                console.log(x + ") " + keys[x] + "(" + this.Rules[keys[x]] + "):" + this.Messages[keys[x]]);
            }
            console.groupEnd();
            console.groupEnd();
        }
    }
}
