
function abrirmenu()
{
   ele=document.getElementById("menu");
    if((ele.style.transform=="translateX(-100%)") || (ele.style.transform==""))
    {
       ele.style.transform="translateX(0%)";
    }
    else 
    {
       ele.style.transform="translateX(-100%)";
    }
}
