/**
 * Created by Victor.Ikoro on 9/22/2016.
 */
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../constant/AppConstants.ts" />
var UPV;
(function (UPV) {
    var HttpConfig = (function () {
        function HttpConfig(httpProvider) {
            this._httpProvider = httpProvider;
            this._httpProvider.defaults.withCredentials = true;
            this._httpProvider.defaults.headers.common.Authorization = "Client-ID " + UPV.AppConstants.APP_ID;
            this._httpProvider.defaults.headers.post = {
                "Content-Type": "application/json"
            };
            this._httpProvider.defaults.headers.put = {
                "Content-Type": "application/json"
            };
        }
        HttpConfig.$inject = ["$httpProvider"];
        return HttpConfig;
    }());
    UPV.HttpConfig = HttpConfig;
    angular
        .module(UPV.AppConstants.APP_NAME)
        .config(HttpConfig);
})(UPV || (UPV = {}));
//# sourceMappingURL=HttpConfig.js.map