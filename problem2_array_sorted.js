// Problem 2) Given an array, check whether the array is in sorted order with recursion.

function isArraySorted(Arr,index){
    if(Arr.length == 1 || index > 2) return 1;
    return (A[index-1] < A[index-2]) ? 0 : isArraySorted(Arr, index-1);
}