/**
 * Created by JHercules on 2017/1/13.
 */
(function($){
    $.Module2SubProviderDom=function(){
        var self=this;
        this.name="Module2SubProviderDom";

        //region Const

        //endregion

        //region onLoad

        this.onLoad=function(oInit){
            //1.page
            var strHtml='\
                <div style="height: 100%;width: 100%">\
                    <div id="module2" style="height: 100%;width: 100%">\
                        username:<input type="text" id="userName" value=""/><br>\
                        password:<input type="text" id="password" value=""/><br>\
                        <button id="moduleClick">login</button><br>\
                        input message:<input type="text" id="conclusion" value=""/><br>\
                    </div>\
                </div>';
            $("body").append(strHtml);
            //2. callback init
            oInit();
        };

        //endregion

        //region init

        this.init=function(){
            $("#moduleClick").click(function(){
                IOCUtils.getBean("Module2").check_username();
            });
        };

        //endregion

        //region showString

        this.showString=function(strMsg) {
            $("#conclusion").attr("value",strMsg)
        };

        //endregion

        //region getInputMsg

        this.getInputMsg=function(strContainerId){
            var strInputMsg=$("#"+strContainerId).val();
            return strInputMsg;
        };

        //endregion
    }
})(jQuery);
IOCUtils.regBean("Module2SubProviderDom",new $.Module2SubProviderDom(),"INNER");


