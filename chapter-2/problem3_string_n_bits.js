/*
Problem 3) Generate all the strings of n bits. Assume A[0..n – 1] is an array of size n.
*/

var Arr = [];
function generate(n){
    if(n<1)
    console.log(Arr);
    else
    {
        A[n-1] = 0;
        generate(n-1);
        A[n-1] = 1;
        generate(n-1);
    }
}

/**
 * if n = 2 then output is
 *    0 1
 *    1 0
 *    0 0
 *    1 1
 * 
 */