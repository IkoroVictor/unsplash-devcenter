/**
 * Created by Victor.Ikoro on 8/28/2016.
 */
var RBPApp;
(function (RBPApp) {
    var AppConstants = (function () {
        function AppConstants() {
        }
        AppConstants.APP_NAME = "RBPApp";
        AppConstants.DEFAULT_PAGE_SIZE = 10;
        AppConstants.DEFAULT_PAGE_NUMBER = 1;
        AppConstants.DEFAULT_PAGE_ORDER = 'latest';
        //EVENTS
        AppConstants.EVENT_NETWORK_ERROR = "RBP_NETWORK_ERROR";
        AppConstants.EVENT_USER_DETAILS = "RBP_USER_DETAILS";
        return AppConstants;
    })();
    RBPApp.AppConstants = AppConstants;
})(RBPApp || (RBPApp = {}));
//# sourceMappingURL=AppConstants.js.map