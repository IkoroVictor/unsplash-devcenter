
/**
 * Created by Victor.Ikoro on 8/28/2016.
 */


module RBPApp
{
    export class AppConstants
    {
        public static APP_NAME:string = "RBPApp";

        public static DEFAULT_PAGE_SIZE:number  = 10;
        public static DEFAULT_PAGE_NUMBER:number =  1;
        public static DEFAULT_PAGE_ORDER:string =  'latest';


        //EVENTS
        public  static  EVENT_NETWORK_ERROR:string = "RBP_NETWORK_ERROR";
        public  static  EVENT_USER_DETAILS:string = "RBP_USER_DETAILS";
    }
}