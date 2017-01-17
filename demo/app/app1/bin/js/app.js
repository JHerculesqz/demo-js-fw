(function($){
    $.Module1Controller=function(){
        var self =this;
        this.name="Module1Controller";

        //region iMsg

        //endregion

        //region pMsg

        this.init=function(){
            IOCUtils.getBean("Module1Service").init();
        };

        //endregion

        //region postMsg

        //endregion

        //region wsMsg

        this.wsMsg = {

        };

        //endregion

        //region tMsg

        //endregion
    }
})(jQuery);
IOCUtils.regBean("Module1",new $.Module1Controller(),"CONTROLLER");

(function($){
    $.Module1Service=function() {
        var self = this;
        this.name = "Module1Service";

        //region iMsg

        //endregion

        //region pMsg

        this.init = function () {
            IOCUtils.getBean("Module1MainProvider").init();
        };

        //endregion

        //region postMsg

        //endregion

        //region wsMsg

        //endregion

        //region tMsg

        //endregion
    }
})(jQuery);
IOCUtils.regBean("Module1Service",new $.Module1Service(),"INNER");

(function($){
    $.Module1MainProvider=function(){
        var self =this;
        this.name="Module1MainProvider";

        //region iMsg

        //endregion

        //region pMsg

        this.init = function () {
            LogUtilsEx.start("Module1MainProvider", "init");
            IOCUtils.getBean("Module1SubProvider").init();
            LogUtilsEx.end("Module1MainProvider", "init");
        };

        //endregion

        //region iMsg

        //endregion

        //region postMsg

        //endregion

        //region wsMsg

        //endregion

        //region tMsg

        //endregion
    }
})(jQuery);
IOCUtils.regBean("Module1MainProvider",new $.Module1MainProvider(),"INNER");

(function($){
    $.Module1SubProvider=function(){
        var self =this;
        this.name="Module1SubProvider";

        //region iMsg

        //endregion

        //region pMsg

        this.init = function () {
            IOCUtils.getBean("ZPage").init(function () {
                IOCUtils.getBean("Module2").onLoad(function () {
                    IOCUtils.getBean("Module2").init();
                });
            });
        };

        //endregion

        //region iMsg

        //endregion

        //region postMsg

        //endregion

        //region wsMsg

        //endregion

        //region tMsg

        //endregion
    }
})(jQuery);
IOCUtils.regBean("Module1SubProvider",new $.Module1SubProvider(),"INNER");

(function($){
    $.Module1SubProvideBu=function(){
        var self=this;
        this.name="Module1SubProvideBu";
    }
})(jQuery);
IOCUtils.regBean("Module1SubProvideBu",new $.Module1SubProvideBu(),"INNER");

(function($){
    $.Module1SubProviderDom=function(){
        var self=this;
        this.name="Module1SubProviderDom";
    }
})(jQuery);
IOCUtils.regBean("Module1SubProviderDom",new $.Module1SubProviderDom(),"INNER");

(function($){
    $.Module1SubProviderPost=function(){
        var self=this;
        this.name="Module1SubProviderPost";
    }
})(jQuery);
IOCUtils.regBean("Module1SubProviderPost",new $.Module1SubProviderPost(),"INNER");

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

(function($){
    $.Module2SubProviderBus=function(){
        var self=this;
        this.name="Module2SubProviderBus";
    }
})(jQuery);
IOCUtils.regBean("Module2SubProviderBus",new $.Module2SubProviderBus(),"INNER");

(function($){
    $.Module2SubProviderDom=function(){
        var self=this;
        this.name="Module2SubProviderDom";

        //region Const

        //endregion

        //region onLoad

        this.onLoad=function(oInit){
            //1.page
            var strHtml='\
                <div style="height: 100%;width: 100%">\
                    <div id="module2" style="height: 100%;width: 100%">\
                        username:<input type="text" id="userName" value=""/><br>\
                        password:<input type="text" id="password" value=""/><br>\
                        <button id="moduleClick">login</button><br>\
                        input message:<input type="text" id="conclusion" value=""/><br>\
                    </div>\
                </div>';
            $("body").append(strHtml);
            //2. callback init
            oInit();
        };

        //endregion

        //region init

        this.init=function(){
            $("#moduleClick").click(function(){
                IOCUtils.getBean("Module2").check_username();
            });
        };

        //endregion

        //region showString

        this.showString=function(strMsg) {
            $("#conclusion").attr("value",strMsg)
        };

        //endregion

        //region getInputMsg

        this.getInputMsg=function(strContainerId){
            var strInputMsg=$("#"+strContainerId).val();
            return strInputMsg;
        };

        //endregion
    }
})(jQuery);
IOCUtils.regBean("Module2SubProviderDom",new $.Module2SubProviderDom(),"INNER");




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

(function($){
    $.ZPageSubProvider=function(){
        var self =this;
        this.name="ZPageSubProvider";

        //region iMsg

        //endregion

        //region pMsg

        this.init=function(oZPageOKCallback){
            IOCUtils.getBean("ZPageSubProviderDom").init();
            oZPageOKCallback();
        };

        //endregion

        //region postMsg

        //endregion

        //region wsMsg

        //endregion

        //region tMsg

        //endregion
    }
})(jQuery);
IOCUtils.regBean("ZPageSubProvider",new $.ZPageSubProvider(),"INNER");

(function($){
    $.ZpageSubProviderBus=function(){
        var self=this;
        this.name="ZpageSubProviderBus";
    }
})(jQuery);
IOCUtils.regBean("ZpageSubProviderBus",new $.ZpageSubProviderBus(),"INNER");

(function($){
    $.ZPageSubProviderDom=function(){
        var self =this;
        this.name="ZPageSubProviderDom";

        //region init

        this.init=function(){
            var strHtml='<div id="parentId" style="width: 250px;height: 50px;background: #ff0000;"></div>';
            $("body").append(strHtml);
        };

        //endregion
    }
})(jQuery);
IOCUtils.regBean("ZPageSubProviderDom",new $.ZPageSubProviderDom(),"INNER");

(function($){
    $.ZpageSubProviderPost=function(){
        var self=this;
        this.name="ZpageSubProviderPost";
    }
})(jQuery);
IOCUtils.regBean("ZpageSubProviderPost",new $.ZpageSubProviderPost(),"INNER");

(function($){
    $.ZPageMainProvider=function(){
        var self =this;
        this.name="ZPageMainProvider";

        //region iMsg

        //endregion

        //region pMsg

        this.init=function(oZPageOKCallback){
            LogUtilsEx.start("ZPageMainProvider", "init");
            IOCUtils.getBean("ZPageSubProvider").init(oZPageOKCallback);
            LogUtilsEx.end("ZPageMainProvider", "init");
        };

        //endregion

        //region postMsg

        //endregion

        //region wsMsg

        //endregion

        //region tMsg

        //endregion
    }
})(jQuery);
IOCUtils.regBean("ZPageMainProvider",new $.ZPageMainProvider(),"INNER");

(function($){
    $.ZPageController=function(){
        var self =this;
        this.name="ZPageController";

        //region iMsg

        //endregion

        //region pMsg

        this.init=function(oZPageOKCallback){
            IOCUtils.getBean("ZPageService").init(oZPageOKCallback);
        };

        //endregion

        //region postMsg

        //endregion

        //region wsMsg

        this.wsMsg = {

        };

        //endregion

        //region tMsg

        //endregion
    }
})(jQuery);
IOCUtils.regBean("ZPage",new $.ZPageController(),"CONTROLLER");

(function($){
    $.ZPageService=function(){
        var self =this;
        this.name="ZPageService";

        //region iMsg

        //endregion

        //region pMsg

        this.init=function(oZPageOKCallback){
            IOCUtils.getBean("ZPageMainProvider").init(oZPageOKCallback);
        };

        //endregion

        //region postMsg

        //endregion

        //region wsMsg

        //endregion

        //region tMsg

        //endregion
    }
})(jQuery);
IOCUtils.regBean("ZPageService",new $.ZPageService(),"INNER");