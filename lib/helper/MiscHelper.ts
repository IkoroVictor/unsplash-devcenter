
/**
 * Created by Victor.Ikoro on 9/23/2016.
 */


module UPV
{
    export class MiscHelper
    {
        public  static formatPhotoDate(photoDate:Date) : string
        {
            var diffSeconds = (Date.now() - photoDate.getTime())/1000;

            if(diffSeconds > 31540000) //Greater than a year
            {
                return `${Math.ceil(diffSeconds/31540000)}yr`;
            }
            else if(diffSeconds > 2592000) //Greater than 31 days ~ 1 MONTH
            {
                return `${Math.ceil(diffSeconds/2592000)}mth`;
            }
            else if(diffSeconds > 86400) //Greater than 1 day
            {
                return `${Math.ceil(diffSeconds/86400)}d`;
            }
            else if(diffSeconds > 3600) //Greater than 1 hour
            {
                return `${Math.ceil(diffSeconds/3600)}h`;
            }
            else if(diffSeconds > 60) //Greater than 1 min
            {
                return `${Math.ceil(diffSeconds/60)}m`;
            }
            else{
                return `${diffSeconds}s`
            }
        }
    }
}