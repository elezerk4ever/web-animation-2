let sh = false;
function shrink(){
    if(!sh){
        footer.style.opacity = 0;
    }else {
        footer.style.opacity = 1;
    }
    sh = !sh;
}

let isCol = false;
function collapser(){
    if(!isCol){
        collapse.style.display='block';
    }else {
        collapse.style.display='none';
    }
    isCol =! isCol;
}
setInterval(shrink,10000);