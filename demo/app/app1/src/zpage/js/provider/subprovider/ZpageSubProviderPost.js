/**
 * Created by JHercules on 2017/1/13.
 */
(function($){
    $.ZpageSubProviderPost=function(){
        var self=this;
        this.name="ZpageSubProviderPost";
    }
})(jQuery);
IOCUtils.regBean("ZpageSubProviderPost",new $.ZpageSubProviderPost(),"INNER");