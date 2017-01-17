/**
 * Created by JHercules on 2017/1/13.
 */
(function($){
    $.Module2Service=function() {
        var self = this;
        this.name = "Module2Service";

        //region iMsg

        this.check_username = function () {
            IOCUtils.getBean("Module2MainProvider").check_username();
        };

        //endregion

        //region pMsg

        this.onLoad = function (oAfterClick) {
            IOCUtils.getBean("Module2MainProvider").onLoad(oAfterClick);
        };

        this.init=function(){
            IOCUtils.getBean("Module2MainProvider").init();
        };

        //endregion

        //region postMsg

        this.postMsg_checkUserName=function(strUrl,oParams,oSuccessCallback,oFailCallback){
            IOCUtils.getBean("Module2MainProvider").postMsg_checkUserName(strUrl,oParams,oSuccessCallback,oFailCallback);
        };

        //endregion

        //region wsMsg

        this.CHECK_USER_NAME_FINISH=function (oMsg) {
            IOCUtils.getBean("Module2MainProvider").CHECK_USER_NAME_FINISH(oMsg);
        };

        //endregion

        //region tMsg

        this.tmsg_clickLoginBtn = function(){
            IOCUtils.getBean("Module2MainProvider").tmsg_clickLoginBtn();
        };

        //endregion
    }
})(jQuery);
IOCUtils.regBean("Module2Service",new $.Module2Service(),"INNER");