(function($){
    $.IOCUtils=function(){
        var self=this;
        this.name="IOCUtils";

        //region Const

        var BEAN_TYPE_CONTROLLER="CONTROLLER";
        var BEAN_TYPE_NORMAL="INNER";

        //endregion

        //region Fields

        this.m_mapControllerBeans={};
        this.m_mapInnerBeans={};

        //endregion

        //region regBean

        this.regBean=function(strModuleName,oModuleObj,enumBeanType){
            if(BEAN_TYPE_CONTROLLER==enumBeanType){
                self.m_mapControllerBeans[strModuleName]  =oModuleObj;
            }
            else{
                self.m_mapInnerBeans[strModuleName]=oModuleObj;
            }
        };

        //endregion

        //region getBean

        this.getBean=function(strModuleName){
            var oControllerBean=self.m_mapControllerBeans[strModuleName];
            if(null!=oControllerBean){
                return oControllerBean;
            }else{
                var oInnerBean=self.m_mapInnerBeans[strModuleName];
                if(null!=oInnerBean){
                    return oInnerBean;
                }
                else{
                    console.log("Can't get Bean: "+strModuleName);
                }
            }
        };

        //endregion

        //region getAllModules

        this.getAllModules=function(){
            var arrModules=[];
            for(var strModuleName in self.m_mapControllerBeans){
                arrModules.push(self.m_mapControllerBeans[strModuleName]);
            }
            return arrModules;
        };

        //endregion
    }
})(jQuery);
var IOCUtils=new $.IOCUtils();


(function($){
    $.MsgUtils=function(){
        var self=this;
        this.name="MsgUtils";

        //region generateWs4Mock

        this.generateWs4Mock=function(oMsg){
            var strMsg=JSON.stringify(oMsg);
            self.processWsMsg(strMsg);
        };

        //endregion

        //region processWsMsg

        this.processWsMsg=function(strWSMsg){
            var oMsg=JSON.parse(strWSMsg);
            var Modules=IOCUtils.getAllModules();
            for(var i=0;i<Modules.length;i++)
            {
                var oFunc=Modules[i].wsMsg[oMsg.key];
                if(oFunc){
                    oFunc(oMsg);
                }
            }
        };

        //endregion
    }
})(jQuery);
var MsgUtils=new $.MsgUtils();


(function($){
    $.LogUtilsEx=function(){
        var self=this;
        this.name="LogUtilsEx";

        //region Const

        //endregion

        //region Fields

        //endregion

        //region log

        this.start=function(strModuleName, strFuncName){
            console.log("[" + strModuleName + "." + strFuncName + "]start...");
        };

        this.end=function(strModuleName, strFuncName){
            console.log("[" + strModuleName + "." + strFuncName + "]end...");
        };

        //endregion
    }
})(jQuery);
var LogUtilsEx=new $.LogUtilsEx();


(function($){
    $.StrUtilsEx=function(){
        var self=this;
        this.name="StrUtilsEx";

        //region Const

        //endregion

        //region Fields

        //endregion

        //region append

        this.append=function(strSrc,strDst){
            return strSrc+strDst;
        };

        //endregion
    }
})(jQuery);
var StrUtilsEx=new $.StrUtilsEx();


(function($){
    $.Widget1=function(){
        var self=this;
        this.name="Widget1";

        //region Const

        var CONST_MSG="CONST_MSG";

        //endregion

        //region Fields

        this.m_strMsg="test";

        //endregion

        //region init

        this.init=function(strId, strParentId, strMsg){
            _init(strId, strParentId, strMsg);
        };
        var _init = function(strId, strParentId, strMsg){
            var strWidgetId = "Widget_" + strId;
            var strHtml = 'input:<input type="text" id="'+ strWidgetId +'" value="'+ strMsg + '"/>';
            $("#parentId").append(strHtml);
        };

        //endregion
    }
})(jQuery);
