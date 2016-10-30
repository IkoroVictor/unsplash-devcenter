
/**
 * Created by Victor.Ikoro on 8/22/2016.
 */

/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="constant/AppConstants.ts" />
module RBPApp
{
    angular.module(AppConstants.APP_NAME, [ 'ngMaterial','ngMessages', "md.data.table","angular-loading-bar",
        "ui.router", "ngSanitize"])
}