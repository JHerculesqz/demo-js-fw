/**
 * Created by JHercules on 2017/1/13.
 */
(function($){
    $.Module1SubProviderDom=function(){
        var self=this;
        this.name="Module1SubProviderDom";
    }
})(jQuery);
IOCUtils.regBean("Module1SubProviderDom",new $.Module1SubProviderDom(),"INNER");