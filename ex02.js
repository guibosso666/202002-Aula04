var par = 0;
var impar = 0;
var i ;

for(i = 0; i < 1001; i++){
    if(i%2 == 0){
           par = par + i;
    }else{
        impar = impar + i;
       }
   }
console.log(par);
console.log(impar);
