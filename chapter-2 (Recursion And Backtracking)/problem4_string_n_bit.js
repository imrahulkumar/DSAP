/*
Problem 4) Generate all the strings of length n drawn from 0... k – 1.
*/ 



var A = [];
function generate(n,k){
    if(n<1)
    console.log(A);
    else
    {
       for(var i = 0; i < k; i++){
        A[n-1] = i;
   		generate(n-1,k)
       }
    }
}