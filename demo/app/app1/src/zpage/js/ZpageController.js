/**
 * Created by JHercules on 2017/1/13.
 */
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