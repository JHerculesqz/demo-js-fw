/**
 * Created by JHercules on 2017/1/17.
 */
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