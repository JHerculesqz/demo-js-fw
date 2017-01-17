/**
 * Created by JHercules on 2017/1/13.
 */
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