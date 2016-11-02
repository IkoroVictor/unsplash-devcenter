
/**
 * Created by Victor.Ikoro on 8/22/2016.
 */


module UPV
{
    export class URLPaths
    {
        public static BASE_API_PATH:string = `https://api.unsplash.com/`;

        //Pages
        public static PHOTOS_TEMPLATE_PAGE = `templates/photos.html`;
        public static VIEW_PHOTO_DIALOG_TEMPLATE_PAGE = `templates/dialogs/view-photo.html`;
        public static ERROR_DIALOG_TEMPLATE_PAGE = `templates/dialogs/view-photo.html`;

        //API Endpoints
        public static API_PHOTOS:string = `${URLPaths.BASE_API_PATH}photos`;
    }
}