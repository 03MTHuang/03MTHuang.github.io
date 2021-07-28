function $g(selectorrule){
    //單筆-Node
    //判斷是否為id selector，id代表整份文件只有一個Node
    if(selectorrule.includes("#")){
        //回傳Element
        return document.querySelector(selectorrule);
    }

    //多筆-NodeList
    //回傳NodeList集合
    let nodelist = document.querySelectorAll(selectorrule);
    return nodelist.length == 1 ? nodelist[0] : nodelist;
}

function $c(element){
    return document.createElement(element);
}

function $ce(element, text){
    let el = document.createElement(element);
    if(text != "" && text != null){
        el.innerHTML = text;
    }       
    return el;
}


export { $g, $c, $ce };