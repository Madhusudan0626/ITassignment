function makeswap(){
    var x=document.getElementById("tid").value
    var len=x.length
    var i=0
    var x1=x.split('')
    var z=test(x)
    if(len%2 !== 0 || z==1){
        document.getElementById('result').style="color:red;"
        document.getElementById('result').innerHTML="enter integers of even length without character and symbol"
    
    }
    else{

        while(i<len-1){
            
            temp=x1[i]
            x1[i]=x1[i+1]
            x1[i+1]=temp
            i=i+2
        }
        document.getElementById('result').style="color:green;"
        document.getElementById('result').innerHTML="swap pairs of adjacent digits : "+x1.join('')
    }
}

function test(x){
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