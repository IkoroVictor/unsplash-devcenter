

/**
 * Created by Victor.Ikoro on 10/30/2016.
 */

/// <reference path="../service/PhotoService.ts" />
/// <reference path="../constant/AppConstants.ts" />
/// <reference path="../constant/AppMessages.ts" />
/// <reference path="../helper/MiscHelper.ts" />
/// <reference path="../../typings/angular-material/angular-material.d.ts" />

module UPV
{
    export class GridPageController
    {
        static  $inject = ['PhotoService', '$scope', '$mdDialog'];


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
            this.scope.$on(AppConstants.EVENT_SCROLL_BOTTOM, (event) => { this.loadMorePhotos();})
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
        public  loadMorePhotos() : void
        {
            this.params.page += 1;
            this.loadPhotos();
        }

        public refresh()  : void
        {
            this.photos = [];
            this.loadPhotos();
        }

        public getFormattedPhotoDate(date:string) : string
        {
            return MiscHelper.formatPhotoDate(new Date(Date.parse(date)));
        }

        private populateGrid(result:any) : void
        {
            console.log(result);
            if(result && result.hasOwnProperty("data"))
            {
                result.data.forEach((value) =>
                {
                    this.photos.push(value);
                });
            }
        }

        private handleHttpErrors(error:any) : void
        {
            //console.log(error);
            this.scope.$emit(AppConstants.EVENT_NETWORK_ERROR, `${AppMessages.PHOTOS_NETWORK_ERROR_MSG} (${error.status})`);
        }
    }
    angular
        .module(AppConstants.APP_NAME)
        .controller(GridPageController.NAME, GridPageController);
}

