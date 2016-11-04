/**
 * Created by Victor.Ikoro on 11/4/2016.
 */
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../constant/AppConstants.ts" />
var UPV;
(function (UPV) {
    var MiscConfig = (function () {
        function MiscConfig(rootScope, window, documentService) {
            this.rootScope = rootScope;
            this.window = window;
            this.documentService = documentService;
            this.addScrollBottomEventBroadcaster();
        }
        MiscConfig.prototype.addScrollBottomEventBroadcaster = function () {
            var _this = this;
            var previousPageYOffset = 0;
            var previousScrollDiffRatio = 0;
            angular.element(this.window).bind('scroll', function () {
                var isScrollingDown = (previousPageYOffset < _this.window.pageYOffset);
                previousPageYOffset = _this.window.pageYOffset;
                var scrollDiffRatio = Math.ceil((_this.window.pageYOffset) / (_this.documentService[0].body.scrollHeight) * 10);
                //Throttle broadcast frequency  by comparing the current scrollDiffRatio to previous
                if (isScrollingDown && scrollDiffRatio == UPV.AppConstants.SCROLL_OFFSET_DIFF_RATIO && scrollDiffRatio != previousScrollDiffRatio) {
                    _this.rootScope.$broadcast(UPV.AppConstants.EVENT_SCROLL_BOTTOM);
                }
                previousScrollDiffRatio = scrollDiffRatio; //Update previousScrollDiffRatio
            });
        };
        MiscConfig.$inject = ["$rootScope", "$window", "$document"];
        return MiscConfig;
    }());
    UPV.MiscConfig = MiscConfig;
    angular
        .module(UPV.AppConstants.APP_NAME)
        .run(MiscConfig);
})(UPV || (UPV = {}));
//# sourceMappingURL=MiscConfig.js.map