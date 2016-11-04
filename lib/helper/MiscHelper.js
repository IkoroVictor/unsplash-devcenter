/**
 * Created by Victor.Ikoro on 9/23/2016.
 */
var UPV;
(function (UPV) {
    var MiscHelper = (function () {
        function MiscHelper() {
        }
        MiscHelper.formatPhotoDate = function (photoDate) {
            var diffSeconds = (Date.now() - photoDate.getTime()) / 1000;
            if (diffSeconds > 31540000) {
                return Math.ceil(diffSeconds / 31540000) + "yr";
            }
            else if (diffSeconds > 2592000) {
                return Math.ceil(diffSeconds / 2592000) + "mth";
            }
            else if (diffSeconds > 86400) {
                return Math.ceil(diffSeconds / 86400) + "d";
            }
            else if (diffSeconds > 3600) {
                return Math.ceil(diffSeconds / 3600) + "h";
            }
            else if (diffSeconds > 60) {
                return Math.ceil(diffSeconds / 60) + "m";
            }
            else {
                return diffSeconds + "s";
            }
        };
        return MiscHelper;
    }());
    UPV.MiscHelper = MiscHelper;
})(UPV || (UPV = {}));
//# sourceMappingURL=MiscHelper.js.map