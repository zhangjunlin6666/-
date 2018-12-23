/**
 * 1、事件源
 * 2、事件类型
 * 3、事件处理函数
 * 4、捕获还是冒泡（ie8一下不存在捕获）
 */
(function(win){
    var EventUtil = {
        // 绑定事件兼容
        addEvent:function(ele,type,handler,isCapture){
            if(ele.addEventListener){
                isCapture = isCapture ? true : false;
                ele.addEventListener(type,handler,isCapture);
            }else if(ele.attachEvent){
                ele.attachEvent('on' + type,function(){
                    return handler.call(ele,win.event);
                }) 
            }
        },
        // 获取事件对象兼容
        getEvent:function(e){
            return e || win.Event;
        },
        // 获取事件源兼容
        getTarget:function(e){
            return e.target || e.srcElement;
        },
        // 阻止冒泡、捕获
        stopPropagation:function(e){
            if(e.stopPropagation){
                e.stopPropagation();
            }else{
                e.cancleBubble = true;
            }
        },
        // 阻止默认事件
        preventDefault:function(e){
            if(e.preventDefault){
                e.preventDefault();
            }else{
                e.returnValue = false;
            }
        }
        
    };
    win.EventUtil = EventUtil;
})(window || {})