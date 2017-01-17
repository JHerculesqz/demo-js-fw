/**
 * Created by JHercules on 2016/11/3.
 */
(function($){
    $.Module2MainProvider=function(){
        var self =this;
        this.name="Module2MainProvider";

        //region iMsg

        this.check_username = function () {
            LogUtilsEx.start("Module2MainProvider", "check_username");
            IOCUtils.getBean("Module2SubProvider").check_username();
            LogUtilsEx.end("Module2MainProvider", "check_username");
        };

        //endregion

        //region pMsg

        this.onLoad = function (oAfterClick) {
            LogUtilsEx.start("Module2MainProvider", "onLoad");
            IOCUtils.getBean("Module2SubProvider").onLoad(oAfterClick);
            LogUtilsEx.end("Module2MainProvider", "onLoad");
        };

        this.init=function(){
            LogUtilsEx.start("Module2MainProvider", "init");
            IOCUtils.getBean("Module2SubProvider").init();
            LogUtilsEx.end("Module2MainProvider", "init");
        };

        //endregion

        //region postMsg

        this.postMsg_checkUserName=function(strUrl,oParams,oSuccessCallback,oFailCallback){
            LogUtilsEx.start("Module2MainProvider", "postMsg_checkUserName");
            IOCUtils.getBean("Module2SubProvider").postMsg_checkUserName(strUrl,oParams,oSuccessCallback,oFailCallback);
            LogUtilsEx.end("Module2MainProvider", "postMsg_checkUserName");
        };

        //endregion

        //region wsMsg

        this.CHECK_USER_NAME_FINISH=function (oMsg) {
            LogUtilsEx.start("Module2MainProvider", "CHECK_USER_NAME_FINISH");
            IOCUtils.getBean("Module2SubProvider").CHECK_USER_NAME_FINISH(oMsg);
            LogUtilsEx.end("Module2MainProvider", "CHECK_USER_NAME_FINISH");
        };

        //endregion

        //region tMsg

        this.tmsg_clickLoginBtn = function(){
            LogUtilsEx.start("Module2MainProvider", "tmsg_clickLoginBtn");
            IOCUtils.getBean("Module2SubProvider").tmsg_clickLoginBtn();
            LogUtilsEx.end("Module2MainProvider", "tmsg_clickLoginBtn");
        };

        //endregion
    }
})(jQuery);
IOCUtils.regBean("Module2MainProvider",new $.Module2MainProvider(),"INNER");