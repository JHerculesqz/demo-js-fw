/**
 * Created by JHercules on 2017/1/13.
 */
(function($){
    $.Module1SubProviderPost=function(){
        var self=this;
        this.name="Module1SubProviderPost";
    }
})(jQuery);
IOCUtils.regBean("Module1SubProviderPost",new $.Module1SubProviderPost(),"INNER");