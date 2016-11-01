var UPV;!function(UPV){var AppConstants=function(){function AppConstants(){}return AppConstants.APP_NAME="UPV",AppConstants.DEFAULT_PAGE_SIZE=10,AppConstants.DEFAULT_PAGE_NUMBER=1,AppConstants.DEFAULT_PAGE_ORDER="latest",AppConstants.EVENT_NETWORK_ERROR="NETWORK_ERROR",AppConstants.APP_ID="7fb9a64eca3db37234089c874dc654b335c58c25a6aec2284bf67ca37d4cc7d8",AppConstants}();UPV.AppConstants=AppConstants}(UPV||(UPV={}));var UPV;!function(UPV){var AppMessages=function(){function AppMessages(){}return AppMessages.PHOTOS_NETWORK_ERROR_MSG="Could not load photos.",AppMessages}();UPV.AppMessages=AppMessages}(UPV||(UPV={}));var UPV;!function(UPV){var URLPaths=function(){function URLPaths(){}return URLPaths.BASE_API_PATH="https://api.unsplash.com/",URLPaths.PHOTOS_TEMPLATE_PAGE="templates/photos.html",URLPaths.VIEW_PHOTO_DIALOG_TEMPLATE_PAGE="templates/dialogs/view-photo.html",URLPaths.API_PHOTOS=URLPaths.BASE_API_PATH+"/photos",URLPaths}();UPV.URLPaths=URLPaths}(UPV||(UPV={}));var UPV;!function(UPV){var ErrorEventListener=function(){function ErrorEventListener(mDialogService,rootScope){var _this=this;this._mDialogService=mDialogService,rootScope.$on(UPV.AppConstants.EVENT_NETWORK_ERROR,function(event,eventMessage){_this._mDialogService.show({clickOutsideToClose:!0,controller:function($scope,message){$scope.message=message},controllerAs:"ctrl",focusOnOpen:!1,targetEvent:event,locals:{message:eventMessage},templateUrl:UPV.URLPaths.ERROR_DIALOG_TEMPLATE_PAGE})})}return ErrorEventListener.$inject=["$mdDialog","$rootScope"],ErrorEventListener}();UPV.ErrorEventListener=ErrorEventListener,angular.module(UPV.AppConstants.APP_NAME).run(ErrorEventListener)}(UPV||(UPV={}));var UPV;!function(UPV){var RouteConfig=function(){function RouteConfig(stateProvider,urlRouterProvider){this._stateProvider=stateProvider,this._urlRouterProvider=urlRouterProvider,this._urlRouterProvider.otherwise("/photos"),this._stateProvider.state("photos",{name:"photos",url:"/photos",templateUrl:URLPaths.PHOTOS_TEMPLATE_PAGE,controller:GridPageController.NAME,controllerAs:"ctrl"})}return RouteConfig.$inject=["$stateProvider","$urlRouterProvider"],RouteConfig}();UPV.RouteConfig=RouteConfig,angular.module(AppConstants.APP_NAME).config(RouteConfig)}(UPV||(UPV={}));var UPV;!function(UPV){var PhotoService=function(){function PhotoService(restService){this._restService=restService}return PhotoService.prototype.getPhotos=function(params){return void 0===params&&(params={}),this._restService.getList(UPV.URLPaths.API_PHOTOS,params)},PhotoService.prototype.getPhoto=function(id){return this._restService.get(id,UPV.URLPaths.API_PHOTOS)},PhotoService.$inject=["RestService"],PhotoService}();UPV.PhotoService=PhotoService}(UPV||(UPV={}));var UPV;!function(UPV){var RestService=function(){function RestService(httpService){this._httpService=httpService,this._httpService.defaults.withCredentials=!0}return RestService.prototype.getList=function(url,params){if(void 0===params&&(params={}),url){var query="?";for(var paramKey in params)params.hasOwnProperty(paramKey)&&params[paramKey]&&(query=""+query+paramKey+"="+params[paramKey]+"&");if("?"!=query)return this._httpService.get(""+url+query)}return null},RestService.prototype.get=function(id,url){return url?this._httpService.get(url+"/"+id):void 0},RestService.$inject=["$http"],RestService.NAME="RestService",RestService}();UPV.RestService=RestService}(UPV||(UPV={}));var UPV;!function(UPV){var GridPageController=function(){function GridPageController(photoService,scope,mdDialogService){this._photoService=photoService,this.mdDialogService=mdDialogService,this.scope=scope,this.photos=[],this.params={page:UPV.AppConstants.DEFAULT_PAGE_NUMBER,per_page:UPV.AppConstants.DEFAULT_PAGE_SIZE,order_by:UPV.AppConstants.DEFAULT_PAGE_ORDER},this.loadPhotos()}return GridPageController.prototype.loadPhotos=function(){var _this=this;this._photoService.getPhotos(this.params).then(function(result){_this.populateGrid(result)},function(error){_this.handleHttpErrors(error)})},GridPageController.prototype.populateGrid=function(result){result&&result.hasOwnProperty("data")&&result.data.forEach(function(value){this.photos.push(value)})},GridPageController.prototype.showPhoto=function(event,index){this.mdDialogService.show({clickOutsideToClose:!0,controller:function($scope,photo,controller){$scope.photo=photo,$scope.controller=controller},controllerAs:"ctrl",focusOnOpen:!1,targetEvent:event,locals:{photo:this.photos[index],controller:this},templateUrl:UPV.URLPaths.VIEW_PHOTO_DIALOG_TEMPLATE_PAGE}).then()},GridPageController.prototype.handleHttpErrors=function(error){this.scope.$emit(UPV.AppConstants.EVENT_NETWORK_ERROR,UPV.AppMessages.PHOTOS_NETWORK_ERROR_MSG+" ("+error.status+")")},GridPageController.$inject=["PhotoService","$scope","mdDialog"],GridPageController}();UPV.GridPageController=GridPageController}(UPV||(UPV={}));