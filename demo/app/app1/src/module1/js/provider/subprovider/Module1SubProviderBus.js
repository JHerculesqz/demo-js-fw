/**
 * Created by JHercules on 2017/1/13.
 */
(function($){
    $.Module1SubProvideBu=function(){
        var self=this;
        this.name="Module1SubProvideBu";
    }
})(jQuery);
IOCUtils.regBean("Module1SubProvideBu",new $.Module1SubProvideBu(),"INNER");