/**
 * Created by JHercules on 2016/11/3.
 */
(function($){
    $.Module2SubProvider=function(){
        var self =this;
        this.name="Module2SubProvider";

        //region Const

        var INPUT_USERNAME_ID="userName";
        var INPUT_PASSWORD_ID="password";

        //endregion

        //region iMsg

        this.check_username = function () {
            //1.get username&password
            var userName=IOCUtils.getBean("Module2SubProviderDom").getInputMsg(INPUT_USERNAME_ID);
            var password=IOCUtils.getBean("Module2SubProviderDom").getInputMsg(INPUT_PASSWORD_ID);
            var Module1Obj={
                strUserName: userName,
                strPassword:password
            };

            //2.post
            IOCUtils.getBean("Module2").postMsg_checkUserName("MODULE1_URL",Module1Obj,function(oRes){

            },function(oRes){

            });
        };

        //endregion

        //region pMsg

        this.onLoad = function (oAfterClick) {
            IOCUtils.getBean("Module2SubProviderDom").onLoad(oAfterClick);
        };

        this.init = function () {
            IOCUtils.getBean("Module2SubProviderDom").init();
        };

        //endregion

        //region wsMsg

        this.CHECK_USER_NAME_FINISH=function (oMsg) {
            //1.Business Operation
            var strText=oMsg.jsonObj.strUserName+" and "+oMsg.jsonObj.strPassword+" is OK !";

            //2.Dom
            IOCUtils.getBean("Module2SubProviderDom").showString(strText);
        };

        //endregion

        //region postMsg

        this.postMsg_checkUserName=function(strUrl,oParams,oSuccessCallback,oFailCallback){
            IOCUtils.getBean("Module2SubProviderPost").postMsg_checkUserName(strUrl,oParams,oSuccessCallback,oFailCallback);
        };

        //endregion

        //region tMsg

        this.tmsg_clickLoginBtn = function(){

        };

        //endregion
    }
})(jQuery);
IOCUtils.regBean("Module2SubProvider",new $.Module2SubProvider(),"INNER");