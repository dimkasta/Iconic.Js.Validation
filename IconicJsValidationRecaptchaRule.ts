declare abstract class grecaptcha {
    public static getResponse(): any;
}
class IconicJsValidationRecaptchaRule  {
    public constructor(form) {
        if (grecaptcha.getResponse()) {
            form.submit();
        } else {
            alert(IconicJsValidationMessage.RECAPTCHA);
        }
    }
}