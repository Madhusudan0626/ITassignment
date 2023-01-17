//a function to make the character into uppercase using toUPperCase() function
function makeupper()
{
    var a=document.getElementById("data").value
    document.getElementById("pid").innerHTML=a.toUpperCase()
}
// a function to make the character into uppercase using toLowerCase() function
function makelower()
{
    var a=document.getElementById("data").value
    document.getElementById("pid").innerHTML=a.toLowerCase()
}