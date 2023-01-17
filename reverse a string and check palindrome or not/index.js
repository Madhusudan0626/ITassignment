var a

function test(){
    a=document.getElementById("message").value

    if(a=="" || a==null)
    alert("fill the input field")
    else{
    var b=a.split("").reverse().join("")

    if(a==b)
    document.getElementById("pid").innerHTML=String(a+" <br>revserse of the above string : "+b+" <br><b>and the string is palindrome</b>")
    else
    document.getElementById("pid").innerHTML=String(a+" <br>revserse of the above string : "+b+" <br><b>and the string is not palindrome</b>")
    }
}