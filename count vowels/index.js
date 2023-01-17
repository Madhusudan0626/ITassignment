
function test(){
    
    var count=0;
    var ar=['a','e','i','o','u']
    var x=document.getElementById("tid").value

    if(x==null || x=='')
    alert("fill the input fields")
    else{
    var len=x.length
    var i=0
    while(i<len)
    {
        if(ar.includes(x.charAt(i)))
        {
            count++
        }
        i++
    }
    document.getElementById("pid").innerHTML='number of vowels ' + count
}

}