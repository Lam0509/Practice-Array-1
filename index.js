// Bài 1

// let arr = [1,2,3,4,5,10,11,11,15,10];
// let num = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 10) {
//         num.push(arr[i])
// }}
// alert(num.length);

// Bài 2
// let arr = [1,2,3,4,5,10,11,11,15,10];
// let maxValue = arr[0];
// let pos = 0;
// for (var i = 1; i < arr.length; i++) {
//     if (maxValue < arr[i]) {
//         maxValue = arr[i]
//         pos = i
//     }
// }
// alert('Giá trị lớn nhất của mảng là ' + maxValue + ' và vị trí của số là '+ pos)

// Bài 3
// let arr = [1,2,3,4,5,10,11,11,15,10];
// let sum = 0;
// Hiển thị giá trị lớn nhất
// let arr = [1,2,3,4,5,10,11,11,15,10];
// let maxValue = arr[0];
// let pos = 0;
// for (var i = 1; i < arr.length; i++) {
//     if (maxValue < arr[i]) {
//         maxValue = arr[i]
//         pos = i
//     }
// }
// alert('Giá trị lớn nhất của mảng là ' + maxValue + ' và vị trí của số là '+ pos)
// Hiển thị giá trị trung bình
// for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// alert((sum / arr.length))

// Bài 4
// let arr = [1,2,3,4,5,10,11,11,15,10];
// let str = arr.reverse()
// alert(str)
// hoặc
// let arr = [1,2,3,4,5,10,11,11,15,10];
// let first = 0;
// let last = arr.length - 1;
// let a, b;
// for (;first < last; first++, last--) {
//     a = arr[first];
//     b = arr[last];
//     arr[first] = b;
//     arr[last] = a
// }
// document.write(arr)

// Bài 5
// let arr = [-1,-2,3,-4,-5,10,-11,-11,15,10];
// let num = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         num.push(arr[i])
// }}
// alert(num.length);

// Bài 6
// let arr = [1,2,3,4,5,10,11,11,15,10];
// function myFunction() {
//     let V = document.getElementById('text').value
//     for (let i = 0; i < arr.length; i++) {
//         if (V == arr[i]) {
//             alert('V is in the array')
//             break
//         } else if (i == arr.length - 1) {
//             alert('V is not in the array')
//             break
//         }
//     }
// }

// Bài 7
// let arr = [1,2,3,4,5,10,11,11,15,10];
// function myFunction() {
//     let V = document.getElementById('text').value
//     for (let i = 0; i < arr.length; i++) {
//         if (V == arr[i]) {
//             arr.splice(i, 1);
//         }
//     }
//     alert(arr)
// }
// hoặc
// let arr = [1,2,3,4,5,10,11,11,15,10];
// function myFunction() {
//     let V = document.getElementById('text').value
//     for (let i = 0; i < arr.length; i++) {
//         if (V == arr[i]) {
//             arr[i] = arr[i + 1];
//             arr[arr.length - 1] = 0
//         }
//     }
//     alert(arr);
// }

// Bài 8
// let arr = [1,3,2,5,2];
// arr.sort(function (a, b) {
//     return b - a;
// })
// alert(arr)

// Bài 9
// let arr1 = [1,2,3,4,5,10,11,11,15,10];
// let arr2 = [2,3,5,4,6,9,12,12,14,10];
// let arr3 = arr1.concat(arr2);
// alert(arr3);







