/**
 * Created by Victor.Ikoro on 10/26/2016.
 */
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-material/angular-material.d.ts" />
/// <reference path="../constant/AppConstants.ts" />
/// <reference path="../constant/URLPaths.ts" />
var UPV;
(function (UPV) {
    var ErrorEventListener = (function () {
        function ErrorEventListener(mDialogService, rootScope) {
            var _this = this;
            this._mDialogService = mDialogService;
            //Handle Network Errors broadcasts
            rootScope.$on(UPV.AppConstants.EVENT_NETWORK_ERROR, function (event, eventMessage) {
                _this._mDialogService.show({
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
                    templateUrl: UPV.URLPaths.ERROR_DIALOG_TEMPLATE_PAGE
                });
            });
        }
        ErrorEventListener.$inject = ["$mdDialog", "$rootScope"];
        return ErrorEventListener;
    }());
    UPV.ErrorEventListener = ErrorEventListener;
    angular
        .module(UPV.AppConstants.APP_NAME)
        .run(ErrorEventListener);
})(UPV || (UPV = {}));
//# sourceMappingURL=ErrorEventListener.js.map