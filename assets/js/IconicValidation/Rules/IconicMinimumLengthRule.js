class IconicMinimumLengthRule{
    static Rule(length){
        return {
            minlength: length,
            messages: {
                minlength: jQuery.validator.format("Το πεδίο πρέπει να είναι τουλάχιστον {0} χαρακτήρες")
            }
        };
    }
}
export default IconicMinimumLengthRule;