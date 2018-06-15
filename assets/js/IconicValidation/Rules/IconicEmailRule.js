class IconicEmailRule{
    static Rule(){
        return {
            email: true,
            messages: {
                email: "Το email δεν έχει σωστή μόρφή"
            }
        };
    }
}
export default IconicEmailRule;