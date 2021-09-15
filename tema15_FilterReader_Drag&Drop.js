const zona = document.querySelector(".zona-arrastre");
zona.addEventListener("dragover",e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#444");
})
zona.addEventListener("dragleave",e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#888");
})

const changeStyle =(obj,color)=>{
    obj.style.color=color;
    obj.style.border=`4px dashed ${color}`;
}