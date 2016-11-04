

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
        .module(AppConstants.APP_NAME).directive(ScrollBottom.NAME, function ($window, $document) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                console.log('loading directive');
                angular.element($window).bind('scroll', () => {

                    console.log(`pageYOffset: ${$window.pageYOffset }`);
                    console.log(`docHeight: ${$document[0].body.scrollHeight}`);

                    if ($window.pageYOffset > ($document[0].body.scrollHeight - AppConstants.SCROLL_OFFSET_DIFF)) {
                        scope.$apply(attrs['scroll-bottom']);

                    }
                });
            }
        };
    });

}