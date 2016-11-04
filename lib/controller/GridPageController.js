/**
 * Created by Victor.Ikoro on 10/30/2016.
 */
/// <reference path="../service/PhotoService.ts" />
/// <reference path="../constant/AppConstants.ts" />
/// <reference path="../constant/AppMessages.ts" />
/// <reference path="../../typings/angular-material/angular-material.d.ts" />
var UPV;
(function (UPV) {
    var GridPageController = (function () {
        function GridPageController(photoService, scope, mdDialogService) {
            var _this = this;
            this._photoService = photoService;
            this.mdDialogService = mdDialogService;
            this.scope = scope;
            this.scope.$on(UPV.AppConstants.EVENT_SCROLL_BOTTOM, function (event) { _this.loadMorePhotos(); });
            this.photos = [];
            this.params = {
                page: UPV.AppConstants.DEFAULT_PAGE_NUMBER,
                per_page: UPV.AppConstants.DEFAULT_PAGE_SIZE,
                order_by: UPV.AppConstants.DEFAULT_PAGE_ORDER
            };
            this.loadPhotos();
        }
        GridPageController.prototype.loadPhotos = function () {
            var _this = this;
            this._photoService.getPhotos(this.params).then(function (result) {
                _this.populateGrid(result);
            }, function (error) {
                _this.handleHttpErrors(error);
            });
        };
        GridPageController.prototype.loadMorePhotos = function () {
            this.params.page += 1;
            this.loadPhotos();
        };
        GridPageController.prototype.refresh = function () {
            this.photos = [];
            this.loadPhotos();
        };
        GridPageController.prototype.populateGrid = function (result) {
            var _this = this;
            console.log(result);
            if (result && result.hasOwnProperty("data")) {
                result.data.forEach(function (value) {
                    _this.photos.push(value);
                });
            }
        };
        GridPageController.prototype.handleHttpErrors = function (error) {
            //console.log(error);
            this.scope.$emit(UPV.AppConstants.EVENT_NETWORK_ERROR, UPV.AppMessages.PHOTOS_NETWORK_ERROR_MSG + " (" + error.status + ")");
        };
        GridPageController.$inject = ['PhotoService', '$scope', '$mdDialog'];
        GridPageController.NAME = "GridPageController";
        return GridPageController;
    }());
    UPV.GridPageController = GridPageController;
    angular
        .module(UPV.AppConstants.APP_NAME)
        .controller(GridPageController.NAME, GridPageController);
})(UPV || (UPV = {}));
//# sourceMappingURL=GridPageController.js.map