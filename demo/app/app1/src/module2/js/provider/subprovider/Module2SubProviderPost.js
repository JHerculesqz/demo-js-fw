/**
 * Created by JHercules on 2017/1/13.
 */
(function($){
    $.Module2SubProviderPost=function(){
        var self=this;
        this.name="Module2SubProviderPost";

        //region postModule2

        this.postMsg_checkUserName=function(strUrl,oParams,oSuccessCallback,oFailCallback) {
            //TODO:Mock
            var postMsgRes = {
                key: "CHECK_USER_NAME_FINISH",
                jsonObj: {
                    strUserName: oParams.strUserName,
                    strPassword: oParams.strPassword
                }
            };
            MsgUtils.generateWs4Mock(postMsgRes);
        };

        //endregion
    }
})(jQuery);
IOCUtils.regBean("Module2SubProviderPost",new $.Module2SubProviderPost(),"INNER");