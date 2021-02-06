
//FIND MAX VALUE

// USING REDUCE
const findMaxUsingReduce = arr => arr.reduce((max,value) => value > max ? value : max, arr[1]);
// USING BUILT-IN MAX FUNCTION
const findMaxUsingMath = arr => Math.max.apply(null,arr);
// WITH SPREAD OPEERATOR 
const findMaxUsingMathAndSpread = arr => Math.max(...arr);



