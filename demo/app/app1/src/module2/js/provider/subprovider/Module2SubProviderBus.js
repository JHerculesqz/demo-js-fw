/**
 * Created by JHercules on 2017/1/13.
 */
(function($){
    $.Module2SubProviderBus=function(){
        var self=this;
        this.name="Module2SubProviderBus";
    }
})(jQuery);
IOCUtils.regBean("Module2SubProviderBus",new $.Module2SubProviderBus(),"INNER");