/*  Problem 1)  Discuss Towers of Hanoi puzzle.

 Solution: The Towers of Hanoi is a mathematical puzzle. It consists of three rods (or pegs or
     towers) and a number of disks of different sizes which can slide onto any rod. The puzzle starts
     with the disks on one rod in ascending order of size, the smallest at the top, thus making a conical
     shape. The objective of the puzzle is to move the entire stack to another rod, satisfying the
     following rules:
       -  Only one disk may be moved at a time.
       -  Each move consists of taking the upper disk from one of the rods and sliding it onto
          another rod, on top of the other disks that may already be present on that rod.
       -  No disk may be placed on top of a smaller disk


 example:   
             A                     B                   C
           (from)                (using)              (to)
             3                      0                   0

        -> move n-1 disc from A to B using C
        -> move a disc from A to C
        -> move n-1 disc from B to C using A     

*/

function toh(n,a,b,c){
   if(n>0){
       toh(n,a,c,b);
       console.log('move disc from' + a + ' to ' + c);
       toh(n,b,a,c);
   }

}
