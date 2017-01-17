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
