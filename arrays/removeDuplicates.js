// REMOVE DUPLICATES FROM ARRAY



// USING SET
const bounceOutDuplictatesWithSet = arr => [...new Set(arr)];

//USING REDUCE
const bounceOutDuplictatesWithReduce = arr => arr.reduce( (uniques,value) => uniques.indexOf(value) !== -1 ? uniques : [...uniques, value], [] );


