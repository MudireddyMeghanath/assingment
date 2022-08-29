
// function Triangle(x, y, z)
// {
//     if (x == y && y == z)
//         console.log("Equilateral Triangle");
 
//     else if (x == y || y == z || z == x)
//         console.log("Isosceles Triangle");
//     else
//         console.log("Scalene Triangle");
// }
 
//     let x = 8, y = 7, z = 9;
//     Triangle(x, y, z);


// function marks(num){
//     switch(num/10){
//         case 10:
//             console.log("outstanding");
//             break;
//             case 9:
//                 console.log("outstanding");
//                 break;
//                 case 8:
//                     console.log("good");
//                     break;
//                     case 7:
//                         console.log("lol");
//                         break;
//                         case 6:
//                             console.log("improvement must be done");
//                             break;
//                             case 5:
//                                 console.log("poor");
//                                 break;
//                                 default:
//                                     console.log("fail");

//     }
 

// }
// let mark=marks(50);
// var sums=0;
// function sum(num){
// for(i=0;i<num;i++){
//     if(i%3===0&&i%5===0){
//         sums+=i;
//     }


// }
// return sums;
// }
// let res=sum(50);
// console.log(res);
var sum=0;
function fact(a,b){
    for(let i=a;i<b;i++){
        for(var j=2;j<i;j++){
            if(i%j===0){
                break;
            }


        }
        if(i===j){
            // console.log(i);
            sum=sum+i;

        }

    }

}
fact(1,100);
console.log(sum);


