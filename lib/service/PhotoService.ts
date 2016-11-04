

/**
 * Created by Victor.Ikoro on 10/30/2016.
 */

/// <reference path="./RestService.ts" />
/// <reference path="../constant/URLPaths.ts" />
/// <reference path="../constant/AppConstants.ts" />

module UPV
{
    export  class PhotoService
    {
        static $inject = ['RestService'];

        public static NAME:string = "PhotoService";

        private _restService:RestService;

        constructor(restService:RestService)
        {
            this._restService =  restService;
        }


        getPhotos(params:any = {}) : ng.IPromise<Array<any>>
        {
            return this._restService.getList<any>(URLPaths.API_PHOTOS, params);
        }

        getPhoto(id:string) : ng.IPromise<any>
        {
            return this._restService.get<any>(id, URLPaths.API_PHOTOS);
        }

    }

    angular.module(AppConstants.APP_NAME).service(PhotoService.NAME, PhotoService);

}