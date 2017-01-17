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
