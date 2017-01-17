/**
 * Created by JHercules on 2017/1/13.
 */
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