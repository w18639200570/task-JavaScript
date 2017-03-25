/**
 * Created by Shinelon on 2017/3/24.
 */
function one(onecell) {
    var cell = document.getElementById("placeholder");
    // var ran = Math.floor(Math.random()*cell.length);
    var sex = onecell.getAttribute("red");
    // colors[0] = "blue";
    // colors[1] = "red";
    // colors[2] = "green";
    // colors[3] = "black";
    cell.setAttribute("style",sex);
}


