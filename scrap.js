let arr1 = [1, 2, {field: 'string'}]
let arr2 = [...arr1]

console.log(arr1 === arr2)


console.log(arr1, arr2)


console.log(arr1[1] === arr2[1])

console.log(arr1[2] === arr2[2])