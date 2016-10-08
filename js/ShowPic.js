/**
 * Created by Administrator on 2016/10/7.
 */
function ShowPic(whichpic) {
    var source=whichpic.getAttribute("href");
    var nvliu=document.getElementById("nvliu");
    nvliu.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description")
    description.firstChild.nodeValue = text;
}

