/**
 * Created by Victor.Ikoro on 11/3/2016.
 */
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../constant/AppConstants.ts" />
var UPV;
(function (UPV) {
    var ScrollBottom = (function () {
        function ScrollBottom() {
        }
        ScrollBottom.NAME = "scrollBottom";
        return ScrollBottom;
    }());
    UPV.ScrollBottom = ScrollBottom;
    angular
        .module(UPV.AppConstants.APP_NAME).directive(ScrollBottom.NAME, function ($window, $document) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                console.log('loading directive');
                angular.element($window).bind('scroll', function () {
                    console.log("pageYOffset: " + $window.pageYOffset);
                    console.log("docHeight: " + $document[0].body.scrollHeight);
                    if ($window.pageYOffset > ($document[0].body.scrollHeight - UPV.AppConstants.SCROLL_OFFSET_DIFF)) {
                        scope.$apply(attrs['scroll-bottom']);
                    }
                });
            }
        };
    });
})(UPV || (UPV = {}));
//# sourceMappingURL=ScrollBottom.js.map