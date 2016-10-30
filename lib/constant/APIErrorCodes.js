/**
 * Created by Victor.Ikoro on 9/24/2016.
 */
var RBPApp;
(function (RBPApp) {
    var APIErrorCodes = (function () {
        function APIErrorCodes() {
        }
        APIErrorCodes.INVALID_PASSPORT_CLIENT_ID = "INVALID_PASSPORT_CLIENT_ID";
        APIErrorCodes.CLIENT_NOT_FOUND = "CLIENT_NOT_FOUND";
        APIErrorCodes.CLIENT_NAME_ALREADY_EXISTS = "CLIENT_NAME_ALREADY_EXISTS";
        APIErrorCodes.CLIENT_CODE_ALREADY_EXISTS = "CLIENT_CODE_ALREADY_EXISTS";
        APIErrorCodes.CLIENT_PASSPORT_ID_ALREADY_EXISTS = "CLIENT_PASSPORT_ID_ALREADY_EXISTS";
        APIErrorCodes.UNAUTHORIZED_CLIENT = "UNAUTHORIZED_CLIENT";
        APIErrorCodes.PAYMENT_ERROR_CODE_ALREADY_EXISTS = "PAYMENT_ERROR_CODE_ALREADY_EXISTS";
        return APIErrorCodes;
    })();
    RBPApp.APIErrorCodes = APIErrorCodes;
})(RBPApp || (RBPApp = {}));
//# sourceMappingURL=APIErrorCodes.js.map