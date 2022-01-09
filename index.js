let btn=document.getElementById('btn');
btn.addEventListener('click',function dummy(){
    let inp=document.getElementById('input');
    let input=parseInt(inp.value);
    let op=factorial(input);
    document.getElementById('show').innerText=op;
});
function factorial(a){
    if(a==1) {
        return 1;
    }
    return a*factorial(--a)
}
