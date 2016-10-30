

/**
 * Created by Victor.Ikoro on 10/30/2016.
 */

/// <reference path="../service/PhotoService.ts" />

module UPV
{
    export class GridPageController
    {
        static  $inject = ['PhotoService']

        private _photoService:PhotoService;
        public params:any;
        private photos:Array<any>;

        constructor(photoService:PhotoService)
        {
            this._photoService = photoService;
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

        private handleHttpErrors(error:any) : void
        {
            //console.log(error);
            this.scope.$emit(AppConstants.EVENT_NETWORK_ERROR, `${AppMessages.PHOTOS_NETWORK_ERROR_MSG} (${error.status})`);
        }
    }
}

