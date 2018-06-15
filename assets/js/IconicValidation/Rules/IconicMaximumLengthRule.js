class IconicMaximumLengthRule{
    static Rule(length){
        return {
            maxlength: length,
            messages: {
                maxlength: jQuery.validator.format("Το πεδίο πρέπει να είναι το πολύ {0} χαρακτήρες")
            }
        };
    }
}
export default IconicMaximumLengthRule;