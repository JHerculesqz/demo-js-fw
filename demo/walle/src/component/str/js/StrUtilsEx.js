(function($){
    $.StrUtilsEx=function(){
        var self=this;
        this.name="StrUtilsEx";

        //region Const

        //endregion

        //region Fields

        //endregion

        //region append

        this.append=function(strSrc,strDst){
            return strSrc+strDst;
        };

        //endregion
    }
})(jQuery);
var StrUtilsEx=new $.StrUtilsEx();
