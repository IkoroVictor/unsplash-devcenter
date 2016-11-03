

/**
 * Created by Victor.Ikoro on 11/3/2016.
 */


/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../constant/AppConstants.ts" />

module UPV
{

    export class ScrollBottom {

        public static NAME:string = "scrollBottom";
    }

    angular
        .module(AppConstants.APP_NAME).directive(ScrollBottom.NAME, function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var raw = element[0];
                console.log('loading directive');
                element.bind('scroll', function () {
                    console.log('scroll');
                    if (raw.scrollTop + raw.offsetHeight > raw.scrollHeight) {
                        scope.$apply(attrs['scroll-bottom']);
                    }
                });
            }
        };
    });

}