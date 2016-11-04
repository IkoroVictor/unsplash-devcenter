/**
 * Created by Victor.Ikoro on 10/30/2016.
 */
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../constant/AppConstants.ts" />
var UPV;
(function (UPV) {
    var RestService = (function () {
        function RestService(httpService) {
            this._httpService = httpService;
            this._httpService.defaults.withCredentials = true;
        }
        RestService.prototype.getList = function (url, params) {
            if (params === void 0) { params = {}; }
            if (url) {
                var query = "?";
                for (var paramKey in params) {
                    if (params.hasOwnProperty(paramKey) && params[paramKey]) {
                        query = "" + query + paramKey + "=" + params[paramKey] + "&";
                    }
                }
                if (query != "?") {
                    return this._httpService.get("" + url + query);
                }
            }
            return null;
        };
        RestService.prototype.get = function (id, url) {
            if (url) {
                return this._httpService.get(url + "/" + id);
            }
        };
        RestService.$inject = ["$http"];
        RestService.NAME = "RestService";
        return RestService;
    }());
    UPV.RestService = RestService;
    angular.module(UPV.AppConstants.APP_NAME).service(RestService.NAME, RestService);
})(UPV || (UPV = {}));
//# sourceMappingURL=RestService.js.map