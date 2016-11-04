
/**
 * Created by Victor.Ikoro on 11/4/2016.
 */

/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../constant/AppConstants.ts" />

module UPV
{
    export class MiscConfig
    {
        static $inject = ["$rootScope", "$window", "$document"];

        public  rootScope: any;
        public  window: any;
        public documentService: any;
        constructor(rootScope:angular.IRootScopeService, window:angular.IWindowService, documentService:angular.IDocumentService)
        {
            this.rootScope = rootScope;
            this.window =  window;
            this.documentService = documentService;
            var previousPageYOffset:number = 0;
            var previousScrollDiffRatio:number = 0;
            angular.element(this.window).bind('scroll', () => {

                var isScrollingDown = (previousPageYOffset < this.window.pageYOffset);

                previousPageYOffset = this.window.pageYOffset;
                var scrollDiffRatio:number =  Math.ceil((this.window.pageYOffset) / (this.documentService[0].body.scrollHeight) * 10);

                //Throttle broadcast frequency  by comparing the current scrollDiffRatio to previous
                if (isScrollingDown && scrollDiffRatio ==  AppConstants.SCROLL_OFFSET_DIFF_RATIO && scrollDiffRatio != previousScrollDiffRatio) {

                    this.rootScope.$broadcast(AppConstants.EVENT_SCROLL_BOTTOM);
                }
                previousScrollDiffRatio = scrollDiffRatio; //Update previousScrollDiffRatio
            });
        }


    }
    angular
        .module(AppConstants.APP_NAME)
        .run(MiscConfig);
}