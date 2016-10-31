var UPV;!function(UPV){var AppConstants=function(){function AppConstants(){}return AppConstants.APP_NAME="UPV",AppConstants.DEFAULT_PAGE_SIZE=10,AppConstants.DEFAULT_PAGE_NUMBER=1,AppConstants.DEFAULT_PAGE_ORDER="latest",AppConstants.EVENT_NETWORK_ERROR="NETWORK_ERROR",AppConstants}();UPV.AppConstants=AppConstants}(UPV||(UPV={}));var UPV;!function(UPV){var AppMessages=function(){function AppMessages(){}return AppMessages.PHOTOS_NETWORK_ERROR_MSG="Could not load photos.",AppMessages}();UPV.AppMessages=AppMessages}(UPV||(UPV={}));var UPV;!function(UPV){var URLPaths=function(){function URLPaths(){}return URLPaths.BASE_API_PATH="https://api.unsplash.com/",URLPaths.PHOTOS_TEMPLATE_PAGE="templates/photos.html",URLPaths.VIEW_PHOTO_DIALOG_TEMPLATE_PAGE="templates/dialogs/view-photo.html",URLPaths.API_PHOTOS=""+URLPaths.BASE_API_PATH+"/photos",URLPaths}();UPV.URLPaths=URLPaths}(UPV||(UPV={}));var UPV;!function(UPV){var PhotoService=function(){function PhotoService(restService){}return PhotoService.prototype.getPhotos=function(params){void 0===params&&(params={})},PhotoService.$inject=["RestService"],PhotoService}();UPV.PhotoService=PhotoService}(UPV||(UPV={}));var UPV;!function(UPV){var RestService=function(){function RestService(httpService){this._httpService=httpService,this._httpService.defaults.withCredentials=!0}return RestService.prototype.getList=function(url,params){if(void 0===params&&(params={}),url){var query="?";for(var paramKey in params)params.hasOwnProperty(paramKey)&&params[paramKey]&&(query=""+query+paramKey+"="+params[paramKey]+"&");if("?"!=query)return this._httpService.get(""+url+query)}return null},RestService.prototype.get=function(id,url){return url?this._httpService.get(""+url+"/"+id):void 0},RestService.$inject=["$http"],RestService.NAME="RestService",RestService}();UPV.RestService=RestService}(UPV||(UPV={}));var UPV;!function(UPV){var GridPageController=function(){function GridPageController(photoService){}return GridPageController.$inject=["PhotoService"],GridPageController}();UPV.GridPageController=GridPageController}(UPV||(UPV={}));