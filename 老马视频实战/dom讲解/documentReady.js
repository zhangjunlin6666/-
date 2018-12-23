(function(doc,win){
    function ready(hander){
        if(doc.addEventListener){
            doc.addEventListener('DOMContentLoaded',hander)
        } else if (doc.attachEvent){
            doc.attachEvent('onreadystatechange',function(){
                if(doc.readyState == "complete"){
                    hander && hander(win.event);
                }
            })
        } else {
            win.onload = hander;
        }
    }
    doc.documentReady = ready
})(document || {},window || {})