var a,b,result
function loadcheck1()
{
    a=document.getElementById('tid1').value
    var i=0
    var ar=['0','1','2','3','4','5','6','7','8','9','.','+','-']
    var flag=0
    while(i<a.length)
    {
        if(!ar.includes(a.charAt(i)))
        {
            flag=1
            break
        }
        i++;
    }
    return flag
}

function loadcheck2()
{
    b=document.getElementById('tid2').value
    var i=0
    var ar=['0','1','2','3','4','5','6','7','8','9','.','+','-']
    var flag=0
    while(i<b.length)
    {
        if(!ar.includes(b.charAt(i)))
        {
            flag=1
            break
        }
        i++;
    }
    return flag
}

function adition(){
    if(loadcheck1()==0 && loadcheck2()==0)
    {

        result=eval(a+'+'+b)
        result=result.toFixed(3)
        document.getElementById("result").innerHTML="Adition of 2 numbers : "+String(result)
    }
    else
    alert("addition operation failed")
}

function subtraction(){
    if(loadcheck1()==0 && loadcheck2()==0)
    {
        var k=parseInt(b)
        
        if(k<0)
        {
            alert(k)
            b=-(k);
            result=eval(a+'+'+b)
        }
        
        else{
        result=eval(a+'-'+b)
        }
        result=result.toFixed(3)
        document.getElementById("result").innerHTML="Subtraction of 2 numbers : "+String(result)
        

    }
    else
    alert("addition operation failed")
}

function division(){
    if(loadcheck1()==0 && loadcheck2()==0)
    {
        
        if(b==0)
        alert("math error")
        else
        {
            result=eval(a+'/'+b)
            document.getElementById("result").innerHTML="Division of 2 numbers : "+String(result)

        }
    }
    else
    alert("addition operation failed")
}

function multiplication(){
    if(loadcheck1()==0 && loadcheck2()==0)
    {
        result=eval(a+'*'+b)
        document.getElementById("result").innerHTML="Multiplication of 2 numbers : "+String(result)

    }
    else
    alert("addition operation failed")
}
