

/**
 * Created by Victor.Ikoro on 9/24/2016.
 */


module RBPApp
{
    export class APIErrorCodes
    {
        public  static  INVALID_PASSPORT_CLIENT_ID:string = "INVALID_PASSPORT_CLIENT_ID";
        public  static  CLIENT_NOT_FOUND:string = "CLIENT_NOT_FOUND";
        public  static  CLIENT_NAME_ALREADY_EXISTS:string = "CLIENT_NAME_ALREADY_EXISTS";
        public  static  CLIENT_CODE_ALREADY_EXISTS:string = "CLIENT_CODE_ALREADY_EXISTS";
        public  static  CLIENT_PASSPORT_ID_ALREADY_EXISTS:string = "CLIENT_PASSPORT_ID_ALREADY_EXISTS";
        public  static  UNAUTHORIZED_CLIENT:string = "UNAUTHORIZED_CLIENT";


        public  static  PAYMENT_ERROR_CODE_ALREADY_EXISTS:string = "PAYMENT_ERROR_CODE_ALREADY_EXISTS";
    }
}