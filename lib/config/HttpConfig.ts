

/**
 * Created by Victor.Ikoro on 9/22/2016.
 */

/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../constant/AppConstants.ts" />

module UPV {
    export class HttpConfig {

        static $inject = ["$httpProvider"];
        private _httpProvider:angular.IHttpProvider;

        constructor(httpProvider:angular.IHttpProvider)
        {
            this._httpProvider = httpProvider;
            this._httpProvider.defaults.withCredentials = true;
            this._httpProvider.defaults.headers.common.Authorization = `Client-ID ${AppConstants.APP_ID}`;
            this._httpProvider.defaults.headers.post = {
                "Content-Type" : "application/json"
            };

            this._httpProvider.defaults.headers.put = {
                "Content-Type": "application/json"
            }
        }
    }

    angular
        .module(AppConstants.APP_NAME)
        .config(HttpConfig);
}
