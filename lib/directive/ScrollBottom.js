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
        .module(UPV.AppConstants.APP_NAME).directive(ScrollBottom.NAME, function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var raw = element[0];
                console.log('loading directive');
                element.on('scroll', function () {
                    console.log(raw);
                    if (raw.scrollTop + raw.offsetHeight > raw.scrollHeight) {
                        scope.$apply(attrs['scroll-bottom']);
                    }
                });
            }
        };
    });
})(UPV || (UPV = {}));
//# sourceMappingURL=ScrollBottom.js.map