/**
 * Created by JHercules on 2016/11/3.
 */
(function($){
    $.Module1MainProvider=function(){
        var self =this;
        this.name="Module1MainProvider";

        //region iMsg

        //endregion

        //region pMsg

        this.init = function () {
            LogUtilsEx.start("Module1MainProvider", "init");
            IOCUtils.getBean("Module1SubProvider").init();
            LogUtilsEx.end("Module1MainProvider", "init");
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
IOCUtils.regBean("Module1MainProvider",new $.Module1MainProvider(),"INNER");