

/**
 * Created by Victor.Ikoro on 10/30/2016.
 */



/// <reference path="../../typings/angularjs/angular.d.ts" />


module UPV
{
    export class RestService
    {

        static  $inject = ["$http"];
        public static NAME:string = "RestService";


        private _httpService:ng.IHttpService;


        constructor(httpService:ng.IHttpService)
        {
            this._httpService = httpService;
            this._httpService.defaults.withCredentials =  true;

        }

        getList<T>(url:string,params:any = {}) : ng.IPromise<Array<T>>
        {
            if(url)
            {
                var query:string  = "?";
                for(var paramKey in params)
                {
                    if(params.hasOwnProperty(paramKey) && params[paramKey])
                    {
                        query = `${query}${paramKey}=${params[paramKey]}&`
                    }
                }
                if(query != "?")
                {
                    return this._httpService.get(`${url}${query}`);
                }
            }
            return null
        }


        get<T>(id:string, url:string) : ng.IPromise<T>
        {
            if(url)
            {
                return this._httpService.get(`${url}/${id}`)
            }
        }
    }
}