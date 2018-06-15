class IconicDigitRule{
    static Rule(){
        return {
            digits: true,
            messages: {
                digits: "Το πεδίο πρέπει να αποτελείται μόνο από αριθμητικά ψηφία"
            }
        };
    }
}
export default IconicDigitRule;