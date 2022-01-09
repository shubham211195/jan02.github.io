let btn=document.getElementById('btn');
btn.addEventListener('click',function dummy(){
    let inp=document.getElementById('input');
    let input=parseInt(inp.value);
    let op=fizzbuzz;
    factorial(input);
    document.getElementById('show').innerText=op;
});
let fizzbuzz=[]
function factorial(a){
    if(a==100){
        return;
    }
    if(a%3==0 && a%5==0){
        fizzbuzz.push("fizzbuzz");
       }
    if(a%3==0) {
        fizzbuzz.push("fizz");
     }
     else if(a%5==0){
          fizzbuzz.push("buzz");
     } 
     else{
        fizzbuzz.push(a);
     }
    return factorial(++a);
}
