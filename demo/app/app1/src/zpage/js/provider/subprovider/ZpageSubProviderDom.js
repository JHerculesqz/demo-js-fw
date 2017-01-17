/**
 * Created by JHercules on 2017/1/13.
 */
(function($){
    $.ZPageSubProviderDom=function(){
        var self =this;
        this.name="ZPageSubProviderDom";

        //region init

        this.init=function(){
            var strHtml='<div id="parentId" style="width: 250px;height: 50px;background: #ff0000;"></div>';
            $("body").append(strHtml);
        };

        //endregion
    }
})(jQuery);
IOCUtils.regBean("ZPageSubProviderDom",new $.ZPageSubProviderDom(),"INNER");