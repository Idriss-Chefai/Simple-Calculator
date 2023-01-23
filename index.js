let results = "0";
let res = eval(results);

document.getElementById("1").addEventListener("click",one);
document.getElementById("2").addEventListener("click",two);
document.getElementById("3").addEventListener("click",three);
document.getElementById("4").addEventListener("click",four);
document.getElementById("5").addEventListener("click",five);
document.getElementById("6").addEventListener("click",six);
document.getElementById("7").addEventListener("click",seven);
document.getElementById("8").addEventListener("click",eight);
document.getElementById("9").addEventListener("click",nine);
document.getElementById("0").addEventListener("click",zero);
document.getElementById("+").addEventListener("click",plus);
document.getElementById("-").addEventListener("click",minus);
document.getElementById("*").addEventListener("click",by);
document.getElementById("/").addEventListener("click",on);
document.getElementById("=").addEventListener("click",equal);
document.getElementById("clear").addEventListener("click",clear);
clear();

function one(){
    if(res==0){
        results= "1";res=1;
    }else{
        results+= "1";
    }
    document.getElementById("results").innerHTML = results;
}
function two(){
    if(res==0){
        results= "2";res=2;
    }else{
        results+= "2";
    }
    document.getElementById("results").innerHTML = results;; 
}
function three(){
    if(res==0){
        results= "3";res=3;
    }else{
        results+= "3";
    }
    document.getElementById("results").innerHTML = results; ;
}
function four(){
    if(res==0){
        results= "4";res=4;
    }else{
        results+= "4";
    }
    document.getElementById("results").innerHTML = results; ;
}
function five(){
    if(res==0){
        results= "5";res=5;
    }else{
        results+= "5";
    }
    document.getElementById("results").innerHTML = results;; 
}
function six(){
    if(res==0){
        results= "6";res=6;
    }else{
        results+= "6";
    }
    document.getElementById("results").innerHTML = results; ;
}
function seven(){
    if(res==0){
        results= "7";res=7;
    }else{
        results+= "7";
    }
    document.getElementById("results").innerHTML = results; ;
}
function eight(){
    if(res==0){
        results= "8";res=8;
    }else{
        results+= "8";
    }
    document.getElementById("results").innerHTML = results; ;
}
function nine(){
    if(res==0){
        results= "9";res=9;
    }else{
        results+= "9";
    }
    document.getElementById("results").innerHTML = results; ;
}
function zero(){
    if(res==0){
        results= "0";res=0;
    }else{
        results+= "0";
    }
    document.getElementById("results").innerHTML = results; ;
}
function plus(){
    results+= "+" ; 
    if(res!=0){
        document.getElementById("results").innerHTML = `${res} +` ;
    }
    
}
function minus(){
    results+= "-" ; 
    if(res!=0){
        document.getElementById("results").innerHTML = `${res} -` ;
    }
}
function by(){
    results+= "*" ; 
    if(res!=0){
        document.getElementById("results").innerHTML = `${res} ×` ;
    }
}
function on(){
    results+= "/" ; 
    if(res!=0){
        document.getElementById("results").innerHTML = `${res} /` ;
    }
}
function equal(){
    res = eval(results);
    document.getElementById("results").innerHTML = res;
}
function clear(){
    results = "0";
    res = eval(results);
    document.getElementById("results").innerHTML = res;
}