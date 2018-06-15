class IconicRequiredRule{
    static Rule(){
        return {
            required: true,
            messages: {
                required: "Το πεδίο είναι υποχρεωτικό"
            }
        };
    }
}
export default IconicRequiredRule;