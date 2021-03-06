/**
 * Created by Victor.Ikoro on 8/22/2016.
 */
var UPV;
(function (UPV) {
    var URLPaths = (function () {
        function URLPaths() {
        }
        URLPaths.BASE_API_PATH = "https://api.unsplash.com/";
        //Pages
        URLPaths.PHOTOS_TEMPLATE_PAGE = "templates/photos.html";
        URLPaths.ERROR_DIALOG_TEMPLATE_PAGE = "templates/dialog/error-dialog.html";
        //API Endpoints
        URLPaths.API_PHOTOS = URLPaths.BASE_API_PATH + "photos";
        return URLPaths;
    }());
    UPV.URLPaths = URLPaths;
})(UPV || (UPV = {}));
//# sourceMappingURL=URLPaths.js.map