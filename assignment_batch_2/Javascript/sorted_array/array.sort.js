// some inbuilt methods for sorting ;
// Remember : .sort() sorts an array alphabetically. => basically it sorts values as strings;
// to sort numerically , we need to modify sort()function with numeric compare function;

// here is our compare funtion => function(a,b){return a-b} => for ascending order sorting;
// fuction(a,b){return b-a} => for descending order sorting

let arr = ['a', 'd', 'e', 'g', 'z', 'b', 'c'];
arr.sort()
// it will sort the array ;
console.log(arr);


let test_arr = [3, 2, 1, 6, 9]
// ascending order sorting
test_arr.sort(function (a, b) { return a - b })
console.log(test_arr);

// descending order sorting
test_arr.sort(function (a, b) { return b - a });
console.log(test_arr);