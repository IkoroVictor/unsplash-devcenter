/**
 * Created by Victor.Ikoro on 10/30/2016.
 */
var UPV;
(function (UPV) {
    var PhotoService = (function () {
        function PhotoService(restService) {
        }
        PhotoService.prototype.getPhotos = function (params) {
            if (params === void 0) { params = {}; }
        };
        PhotoService.$inject = ['RestService'];
        return PhotoService;
    })();
    UPV.PhotoService = PhotoService;
})(UPV || (UPV = {}));
//# sourceMappingURL=PhotoService.js.map