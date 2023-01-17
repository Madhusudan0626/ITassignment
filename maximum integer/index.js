var a

function test()
{
    var i=0;
    var sum=0;
    var p=""
    a=document.getElementById("data").value
    if(check(a)==0)
    {
        while(true)
        {
            i++;
            sum+=i
            if(sum>a)
            {
                p=p.substring(0, p.length-3)
                break
            }
            p+=i+" + "
        }
        document.getElementById("pid").innerHTML=String(p+" <= "+a)
    }
    else
    {
        alert("Enter integer only ..")
        document.getElementById("pid").innerHTML=""

    }
}

function check(x){
    var i=0
    var ar=['0','1','2','3','4','5','6','7','8','9']
    var flag=0
    while(i<x.length)
    {
        if(!ar.includes(x.charAt(i)))
        {
            flag=1
            break
        }
        i++;
    }
    return flag

}