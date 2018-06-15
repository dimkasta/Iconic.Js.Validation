class IconicAlphanumericRule{
    static get Pattern(){
        //TODO: Check this with the one on motosales template page
        return "^[A-Za-z0-9α-ωΑ-Ω ίΊϊΊΐ΅ΙόΌάΆέΈύΎϋΫ΅ΥΰΉΏ.,ήώ-]+$";
    };

    static Rule(){
        return {
            pattern: IconicAlphanumericRule.Pattern,
            messages: {
                pattern: "Το πεδίο πρέπει να είναι αλφαριθμητικό"
            }
        };
    }
}
export default IconicAlphanumericRule;