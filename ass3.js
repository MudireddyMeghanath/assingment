// var string="";
// num=1;
// for(var i=1;i<5;i++){
//     for(var j=1;j<=i;j++){
//         string+=num;
//         num++;

//     }
//     string+="\n";
// }
// console.log(string);
// var a=153;
// var sum=0;
// var cub=0;
// while(a!=0){
//     cub=Math.pow((a%10),3);
//     sum+=cub;
//     a=parseInt(a/10);
// }
// console.log(sum);
// if(sum===a){
//     console.log("yes its");
// }else{
//     console.log("no");
// }
var a=145;
var sum=0;
var cub=0;
function helo(n){
    if(n===0){
        return 1;
    }
    return n*helo(n-1);

}
while(a!=0){
    cub=helo(a%10);
    sum+=cub;
    a=parseInt(a/10);
}
console.log(sum);
if(sum===a){
    console.log("yes");
}else{
    console.log("no");
}
