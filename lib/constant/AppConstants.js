/**
 * Created by Victor.Ikoro on 8/28/2016.
 */
var UPV;
(function (UPV) {
    var AppConstants = (function () {
        function AppConstants() {
        }
        AppConstants.APP_NAME = "UPV";
        AppConstants.DEFAULT_PAGE_SIZE = 10;
        AppConstants.DEFAULT_PAGE_NUMBER = 1;
        AppConstants.DEFAULT_PAGE_ORDER = 'latest';
        //EVENTS
        AppConstants.EVENT_NETWORK_ERROR = "NETWORK_ERROR";
        //APP ID
        //NOTE 
        AppConstants.APP_ID = '7fb9a64eca3db37234089c874dc654b335c58c25a6aec2284bf67ca37d4cc7d8';
        return AppConstants;
    })();
    UPV.AppConstants = AppConstants;
})(UPV || (UPV = {}));
//# sourceMappingURL=AppConstants.js.map