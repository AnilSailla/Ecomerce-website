let menu=document.getElementsByClassName("menu-icon")[0];
let menuitems=document.getElementsByClassName("menu-items")[0];

menuitems.style.maxHeight="0px";       //i can also use height instead of maxHeight

let toggle =()=>{
    if(menuitems.style.maxHeight =="0px")
        menuitems.style.maxHeight="200px";
    else
        menuitems.style.maxHeight="0px";

}
menu.addEventListener("click",toggle)

