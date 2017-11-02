var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var IconicJsValidationMessage = (function () {
    function IconicJsValidationMessage() {
    }
    return IconicJsValidationMessage;
}());
IconicJsValidationMessage.ALPHANUMERIC = "Το πεδίο δεν πρέπει να έχει ειδικούς χαρακτήρες";
IconicJsValidationMessage.REQUIRED = "Το πεδίο δεν μπορεί να είναι κενό";
IconicJsValidationMessage.MINLENGTH = "Το πεδίο πρέπει να έχει περισσότερους από {0} χαρακτήρες";
IconicJsValidationMessage.EMAIL = "Το πεδίο πρέπει να περιέχει ένα έγκυρο email";
IconicJsValidationMessage.TELEPHONE_PATTERN = "Το πεδίο πρέπει να έχει τη μορφή 2122133896";
IconicJsValidationMessage.NUMERIC = "Το πεδίο δεν πρέπει να περιέχει μη αριθμητικούς χαρακτήρες";
IconicJsValidationMessage.POSTAL_CODE = "Το πεδίο πρέπει να έχει τη μορφή 12345";
IconicJsValidationMessage.PASSWORD_CHECK = "Η επαλήθευση δεν ταιριάζει με τον κωδικό πρόσβασης";
IconicJsValidationMessage.RECAPTCHA = "Πατήστε στην επιλογή \"Δεν είμαι ρομπότ\" για να συνεχίσετε";
var IconicJsValidationPattern = (function () {
    function IconicJsValidationPattern() {
    }
    return IconicJsValidationPattern;
}());
IconicJsValidationPattern.ALPHANUMERIC = "^[A-Za-z0-9α-ωΑ-Ω ίΊϊΊΐ΅ΙόΌάΆέΈύΎϋΫ΅ΥΰΉΏ.,ήώ-]+$";
var IconicJsValidationRule = (function () {
    function IconicJsValidationRule() {
        this.Rules = {};
        this.Messages = {};
    }
    IconicJsValidationRule.prototype.addRule = function (rulename, modifier, message) {
        this.Rules[rulename] = modifier;
        this.Messages[rulename] = message;
    };
    return IconicJsValidationRule;
}());
var IconicJsValidationUsernameRule = (function (_super) {
    __extends(IconicJsValidationUsernameRule, _super);
    function IconicJsValidationUsernameRule(length) {
        var _this = _super.call(this) || this;
        _this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        _this.addRule("minlength", length, IconicJsValidationMessage.MINLENGTH);
        _this.addRule("pattern", IconicJsValidationPattern.ALPHANUMERIC, IconicJsValidationMessage.ALPHANUMERIC);
        return _this;
    }
    return IconicJsValidationUsernameRule;
}(IconicJsValidationRule));
var IconicJsValidationEmailRule = (function (_super) {
    __extends(IconicJsValidationEmailRule, _super);
    function IconicJsValidationEmailRule() {
        var _this = _super.call(this) || this;
        _this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        _this.addRule("email", true, IconicJsValidationMessage.EMAIL);
        return _this;
    }
    return IconicJsValidationEmailRule;
}(IconicJsValidationRule));
var IconicJsValidationAlphanumericRule = (function (_super) {
    __extends(IconicJsValidationAlphanumericRule, _super);
    function IconicJsValidationAlphanumericRule(required) {
        var _this = _super.call(this) || this;
        if (required) {
            _this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        }
        _this.addRule("pattern", IconicJsValidationPattern.ALPHANUMERIC, IconicJsValidationMessage.ALPHANUMERIC);
        return _this;
    }
    return IconicJsValidationAlphanumericRule;
}(IconicJsValidationRule));
var IconicJsValidationPhoneRule = (function (_super) {
    __extends(IconicJsValidationPhoneRule, _super);
    function IconicJsValidationPhoneRule(required) {
        var _this = _super.call(this) || this;
        if (required) {
            _this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        }
        _this.addRule("minlength", 10, IconicJsValidationMessage.TELEPHONE_PATTERN);
        _this.addRule("maxlength", 10, IconicJsValidationMessage.TELEPHONE_PATTERN);
        _this.addRule("digits", true, IconicJsValidationMessage.NUMERIC);
        return _this;
    }
    return IconicJsValidationPhoneRule;
}(IconicJsValidationRule));
var IconicJsValidationPostalCodeRule = (function (_super) {
    __extends(IconicJsValidationPostalCodeRule, _super);
    function IconicJsValidationPostalCodeRule(required) {
        var _this = _super.call(this) || this;
        if (required) {
            _this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        }
        _this.addRule("minlength", 5, IconicJsValidationMessage.POSTAL_CODE);
        _this.addRule("maxlength", 5, IconicJsValidationMessage.POSTAL_CODE);
        _this.addRule("digits", true, IconicJsValidationMessage.NUMERIC);
        return _this;
    }
    return IconicJsValidationPostalCodeRule;
}(IconicJsValidationRule));
var IconicJsValidationPasswordRule = (function (_super) {
    __extends(IconicJsValidationPasswordRule, _super);
    function IconicJsValidationPasswordRule(length) {
        var _this = _super.call(this) || this;
        _this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        _this.addRule("minlength", length, IconicJsValidationMessage.MINLENGTH);
        return _this;
    }
    return IconicJsValidationPasswordRule;
}(IconicJsValidationRule));
var IconicJsValidationPasswordCheckRule = (function (_super) {
    __extends(IconicJsValidationPasswordCheckRule, _super);
    function IconicJsValidationPasswordCheckRule(length, passwordFieldId) {
        var _this = _super.call(this) || this;
        _this.addRule("required", true, IconicJsValidationMessage.REQUIRED);
        _this.addRule("minlength", length, IconicJsValidationMessage.MINLENGTH);
        _this.addRule("equalTo", passwordFieldId, IconicJsValidationMessage.PASSWORD_CHECK);
        return _this;
    }
    return IconicJsValidationPasswordCheckRule;
}(IconicJsValidationRule));
var IconicJsValidationRecaptchaRule = (function () {
    function IconicJsValidationRecaptchaRule(form) {
        if (grecaptcha.getResponse()) {
            form.submit();
        }
        else {
            alert(IconicJsValidationMessage.RECAPTCHA);
        }
    }
    return IconicJsValidationRecaptchaRule;
}());
//# sourceMappingURL=IconicJsValidation.js.map