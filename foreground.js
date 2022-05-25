console.log('internal check')

var bean = document.firstElementChild.getAttribute("popup_wakeup")

if (bean != null && bean != ""){
    document.firstElementChild.setAttribute("popup_wakeup", "wakeup")
}
else{
    document.firstElementChild.setAttribute("popup_wakeup", "awaiting")

    // kickstart our checks 
    document.firstElementChild.setAttribute("style", "overflow-y: scroll; overscroll-behavior-y: none; font-size: 15px;")

    var _is_seeking = new Boolean (true)

    var observer = new WebKitMutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes') {
                if (_is_seeking && mutation.attributeName === "style") {
                    var annoying_popup_parent = document.querySelector("#layers > div.css-1dbjc4n.r-aqfbo4.r-1d2f490.r-12vffkv.r-1xcajam.r-zchlnj.r-ipm5af > div > div > div > div > div")
                    if (annoying_popup_parent === null){
                        console.log('popup isnt there...')
                        return
                    } 

                    // ITS GO TIME
                    _is_seeking = false
                    document.firstElementChild.setAttribute("style", "overflow-y: scroll; overscroll-behavior-y: none; font-size: 15px;")
                    while (annoying_popup_parent.childNodes.length > 0) 
                        annoying_popup_parent.removeChild(annoying_popup_parent.firstChild)
                    console.log('popup wiped')
                    document.firstElementChild.setAttribute("popup_wakeup", "popup_wiped") // purely for debugging
                }
                if (!_is_seeking && mutation.attributeName === "popup_wakeup"){
                    if (document.firstElementChild.getAttribute("popup_wakeup") === "wakeup"){
                        _is_seeking = true
                        document.firstElementChild.setAttribute("popup_wakeup", "awaiting")
                        document.firstElementChild.setAttribute("style", "overflow-y: scroll; overscroll-behavior-y: none; font-size: 15px;")
                        console.log('waking up...')
                    }
                }
            }
        })
    });
    observer.observe(document.firstElementChild, { attributes: true }); // subtree: true, childList: true,
}

