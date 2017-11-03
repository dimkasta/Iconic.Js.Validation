declare abstract class grecaptcha {
    public static getResponse(): any;
}
class IconicJsValidationRecaptchaRule  {
    public Debug: boolean;
    public constructor(form, debug: boolean) {
        this.Debug = debug;
        if(this.Debug == true)
        {
            console.warn("Creating Password Rule");
        }
        if (grecaptcha.getResponse()) {
            if(this.Debug == true)
            {
                console.log("Submitting form");
            }
            form.submit();
        } else {
            if(this.Debug == true)
            {
                console.log("Preventing form submit");
            }
            alert(IconicJsValidationMessage.RECAPTCHA);
        }
    }
}