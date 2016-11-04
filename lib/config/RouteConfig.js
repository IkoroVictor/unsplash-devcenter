/**
 * Created by Victor.Ikoro on 10/31/2016.
 */
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../constant/URLPaths.ts" />
/// <reference path="../constant/AppConstants.ts" />
/// <reference path="../controller/GridPageController.ts" />
var UPV;
(function (UPV) {
    var RouteConfig = (function () {
        function RouteConfig(stateProvider, urlRouterProvider) {
            this._stateProvider = stateProvider;
            this._urlRouterProvider = urlRouterProvider;
            this._urlRouterProvider.otherwise("/photos");
            this._stateProvider.state("photos", {
                name: "photos",
                url: "/photos",
                templateUrl: UPV.URLPaths.PHOTOS_TEMPLATE_PAGE,
                controller: UPV.GridPageController.NAME,
                controllerAs: 'ctrl'
            });
        }
        RouteConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
        return RouteConfig;
    }());
    UPV.RouteConfig = RouteConfig;
    angular
        .module(UPV.AppConstants.APP_NAME)
        .config(RouteConfig);
})(UPV || (UPV = {}));
//# sourceMappingURL=RouteConfig.js.map