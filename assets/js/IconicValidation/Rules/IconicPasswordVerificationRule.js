class IconicPasswordVerificationRule{
    static Rule(passwordId){
        return {
            equalTo: passwordId,
            messages: {
                equalTo: "Η επαλήθευση του κωδικού δεν συμφωνεί με τον κωδικό πρόσβασης"
            }
        };
    }
}
export default IconicPasswordVerificationRule;