/**
 * Created by JHercules on 2017/1/13.
 */
(function($){
    $.Module2Controller=function(){
        var self =this;
        this.name="Module2Controller";

        //region iMsg

        this.check_username=function(){
            IOCUtils.getBean("Module2Service").check_username();
        };

        //endregion

        //region pMsg

        this.onLoad=function(oAfterClick){
            IOCUtils.getBean("Module2Service").onLoad(oAfterClick);
        };

        this.init=function(){
            IOCUtils.getBean("Module2Service").init();
        };

        //endregion

        //region postMsg

        this.postMsg_checkUserName = function(strUrl,oParams,oSuccessCallback,oFailCallback){
            IOCUtils.getBean("Module2Service").postMsg_checkUserName(strUrl,oParams,oSuccessCallback,oFailCallback);
        };

        //endregion

        //region wsMsg

        this.wsMsg={
            CHECK_USER_NAME_FINISH : function(oMsg){
                IOCUtils.getBean("Module2Service").CHECK_USER_NAME_FINISH(oMsg);
            }
        };

        //endregion

        //region tMsg

        this.tmsg_clickLoginBtn = function(){
            IOCUtils.getBean("Module2Service").tmsg_clickLoginBtn();
        };

        //endregion
    }
})(jQuery);
IOCUtils.regBean("Module2",new $.Module2Controller(),"CONTROLLER");