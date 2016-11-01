

/**
 * Created by Victor.Ikoro on 10/30/2016.
 */

/// <reference path="../service/PhotoService.ts" />
/// <reference path="../constant/AppConstants.ts" />
/// <reference path="../constant/AppMessages.ts" />
/// <reference path="../../typings/angular-material/angular-material.d.ts" />

module UPV
{
    export class GridPageController
    {
        static  $inject = ['PhotoService', '$scope', 'mdDialog'];


        public static NAME:string = "GridPageController";

        private _photoService:PhotoService;
        public params:any;
        public scope:ng.IScope;
        public mdDialogService:any;
        private photos:Array<any>;

        constructor(photoService:PhotoService, scope:ng.IScope, mdDialogService:ng.material.IDialogService)
        {
            this._photoService = photoService;
            this.mdDialogService = mdDialogService;
            this.scope =  scope;
            this.photos = [];
            this.params =  {
                page: AppConstants.DEFAULT_PAGE_NUMBER,
                per_page : AppConstants.DEFAULT_PAGE_SIZE,
                order_by : AppConstants.DEFAULT_PAGE_ORDER,
            };

            this.loadPhotos();
        }

        public loadPhotos()  : void
        {
            this._photoService.getPhotos(this.params).then(
                (result) => {
                    this.populateGrid(result);
                },
                (error) => {
                    this.handleHttpErrors(error);
                }
            );
        }

        private populateGrid(result:any) : void
        {
            if(result && result.hasOwnProperty("data"))
            {
                result.data.forEach(function(value)
                {
                    this.photos.push(value);
                });
            }
        }

        public showPhoto(event:any, index:number)
        {
            this.mdDialogService.show({
                clickOutsideToClose: true,
                controller: function($scope, photo, controller)
                {
                    $scope.photo = photo;
                    $scope.controller =  controller;
                },
                controllerAs: 'ctrl',
                focusOnOpen: false,
                targetEvent: event,
                locals :
                {
                    photo : this.photos[index],
                    controller: this
                },
                templateUrl: URLPaths.VIEW_PHOTO_DIALOG_TEMPLATE_PAGE,
            }).then();
        }

        private handleHttpErrors(error:any) : void
        {
            //console.log(error);
            this.scope.$emit(AppConstants.EVENT_NETWORK_ERROR, `${AppMessages.PHOTOS_NETWORK_ERROR_MSG} (${error.status})`);
        }
    }
}

