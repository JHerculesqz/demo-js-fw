(function($){
    $.Widget1=function(){
        var self=this;
        this.name="Widget1";

        //region Const

        var CONST_MSG="CONST_MSG";

        //endregion

        //region Fields

        this.m_strMsg="test";

        //endregion

        //region init

        this.init=function(strId, strParentId, strMsg){
            _init(strId, strParentId, strMsg);
        };
        var _init = function(strId, strParentId, strMsg){
            var strWidgetId = "Widget_" + strId;
            var strHtml = 'input:<input type="text" id="'+ strWidgetId +'" value="'+ strMsg + '"/>';
            $("#parentId").append(strHtml);
        };

        //endregion
    }
})(jQuery);
