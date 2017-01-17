/**
 * Created by JHercules on 2016/11/3.
 */
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