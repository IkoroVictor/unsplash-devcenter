
/**
 * Created by Victor.Ikoro on 10/26/2016.
 */

/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-material/angular-material.d.ts" />
/// <reference path="../constant/AppConstants.ts" />
/// <reference path="../constant/URLPaths.ts" />

module UPV
{
    export class ErrorEventListener
    {

        static  $inject = ["$mdDialog", "$rootScope"];

        private _mDialogService:any;
        constructor(mDialogService:angular.material.IDialogService, rootScope:angular.IRootScopeService)
        {
            this._mDialogService =  mDialogService;

            //Handle Network Errors broadcasts
            rootScope.$on(AppConstants.EVENT_NETWORK_ERROR, (event:angular.IAngularEvent, eventMessage:any) =>
            {
                this._mDialogService.show(
                    {
                        clickOutsideToClose: true,
                        controller: function ($scope, message) {
                            $scope.message = message;
                        },
                        controllerAs: 'ctrl',
                        focusOnOpen: false,
                        targetEvent: event,
                        locals: {
                            message: eventMessage
                        },
                        templateUrl: URLPaths.ERROR_DIALOG_TEMPLATE_PAGE
                    }
                );
            });
        }
    }
    angular
        .module(AppConstants.APP_NAME)
        .run(ErrorEventListener);
}
