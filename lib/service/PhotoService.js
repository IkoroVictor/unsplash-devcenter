/**
 * Created by Victor.Ikoro on 10/30/2016.
 */
/// <reference path="./RestService.ts" />
/// <reference path="../constant/URLPaths.ts" />
/// <reference path="../constant/AppConstants.ts" />
var UPV;
(function (UPV) {
    var PhotoService = (function () {
        function PhotoService(restService) {
            this._restService = restService;
        }
        PhotoService.prototype.getPhotos = function (params) {
            if (params === void 0) { params = {}; }
            return this._restService.getList(UPV.URLPaths.API_PHOTOS, params);
        };
        PhotoService.prototype.getPhoto = function (id) {
            return this._restService.get(id, UPV.URLPaths.API_PHOTOS);
        };
        PhotoService.$inject = ['RestService'];
        PhotoService.NAME = "PhotoService";
        return PhotoService;
    }());
    UPV.PhotoService = PhotoService;
    angular.module(UPV.AppConstants.APP_NAME).service(PhotoService.NAME, PhotoService);
})(UPV || (UPV = {}));
//# sourceMappingURL=PhotoService.js.map