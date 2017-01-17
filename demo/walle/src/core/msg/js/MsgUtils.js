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
