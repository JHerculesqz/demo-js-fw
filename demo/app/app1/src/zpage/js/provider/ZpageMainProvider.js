/**
 * Created by JHercules on 2016/11/3.
 */
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