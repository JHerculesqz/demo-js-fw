/**
 * Created by JHercules on 2017/1/13.
 */
(function($){
    $.ZpageSubProviderBus=function(){
        var self=this;
        this.name="ZpageSubProviderBus";
    }
})(jQuery);
IOCUtils.regBean("ZpageSubProviderBus",new $.ZpageSubProviderBus(),"INNER");