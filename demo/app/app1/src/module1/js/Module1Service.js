/**
 * Created by JHercules on 2017/1/13.
 */
(function($){
    $.Module1Service=function() {
        var self = this;
        this.name = "Module1Service";

        //region iMsg

        //endregion

        //region pMsg

        this.init = function () {
            IOCUtils.getBean("Module1MainProvider").init();
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
IOCUtils.regBean("Module1Service",new $.Module1Service(),"INNER");