


/**
 * Created by Victor.Ikoro on 10/31/2016.
 */



/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../constant/URLPaths.ts" />
/// <reference path="../constant/AppConstants.ts" />
/// <reference path="../controller/GridPageController.ts" />



module UPV
{
    export class RouteConfig
    {

        static $inject = ["$stateProvider", "$urlRouterProvider"];

        private _stateProvider:angular.ui.IStateProvider;
        private _urlRouterProvider:angular.ui.IUrlRouterProvider;

        constructor(stateProvider:angular.ui.IStateProvider,urlRouterProvider:angular.ui.IUrlRouterProvider)
        {
            this._stateProvider = stateProvider;
            this._urlRouterProvider = urlRouterProvider;
            this._urlRouterProvider.otherwise("/photos");

            this._stateProvider.state("photos", {
                name : "photos",
                url : "/photos",
                templateUrl : URLPaths.PHOTOS_TEMPLATE_PAGE,
                controller : GridPageController.NAME,
                controllerAs : 'ctrl'

            });


        }

    }
    angular
        .module(AppConstants.APP_NAME)
        .config(RouteConfig);

}