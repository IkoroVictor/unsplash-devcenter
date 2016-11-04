
/**
 * Created by Victor.Ikoro on 8/28/2016.
 */


module UPV
{
    export class AppConstants
    {
        public static APP_NAME:string = "UPV";

        public static DEFAULT_PAGE_SIZE:number  = 10;
        public static DEFAULT_PAGE_NUMBER:number =  1;
        public static DEFAULT_PAGE_ORDER:string =  'latest';


        public static SCROLL_OFFSET_DIFF_RATIO:number  = 9;


        //EVENTS
        public  static  EVENT_NETWORK_ERROR:string = "NETWORK_ERROR";
        public  static  EVENT_SCROLL_BOTTOM:string = "SCROLL_BOTTOM";

        //APP ID
        //NOTE 
        public static APP_ID:string = '7fb9a64eca3db37234089c874dc654b335c58c25a6aec2284bf67ca37d4cc7d8'
    }
}