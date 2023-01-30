var n , r

function factorial(x) {
    if(x==0)
    return 1
    return x*factorial(x-1)
}
var ar=['0','1','2','3','4','5','6','7','8','9']

function check(v){
    var flag=1

    for(var i=0;i<v.length;i++)
    {
        if(!ar.includes(v[i]))
        {
            flag=0
            break

        }
    }
    return flag
}

function nPr()
{
   n=document.getElementById("txt1").value
   r=document.getElementById("txt2").value

   if(!check(n) || !check(r)){
    alert("input integer value")
   }
   else{
    if(n.length == 0 || r.length == 0)
    alert("fill the fields")
    else{
    var n1=parseInt(n)
    var r1=parseInt(r)

    if(n1<r1){
        alert("invalid input")
    }
    else{
        var result=factorial(n1)/factorial(n1-r1)
    }
   }
   document.getElementById("pid1").innerHTML=String("<sup>"+n+"</sup>"+"P"+"<sub>"+r+"</sub>"+" = "+result.toString(10))
}
}

function nCr()
{
    n=document.getElementById("txt1").value
   r=document.getElementById("txt2").value

   if(!check(n) || !check(r)){
    alert("input integer value")
   }
   else{
    if(n.length == 0 || r.length == 0)
    alert("fill the fields")
    else{
    var n1=parseInt(n)
    var r1=parseInt(r)

    if(n1<r1){
        alert("invalid input")
    }
    else{
        var result=factorial(n1)/(factorial(r1)*factorial(n1-r1))
    }
   }
   document.getElementById("pid2").innerHTML=String("<sup>"+n+"</sup>"+"C"+"<sub>"+r+"</sub>"+" = "+result.toString(10))
}
}