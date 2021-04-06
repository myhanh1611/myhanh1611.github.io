//1. VCT tính và in bảng cửu chương, sử dụng vòng lặp for lồng nhau
// for (let i = 0; i < 10; i = i + 1) {for (let j = i + 1; j < 10; j++) {
// let a = i * j;
// }
// }
// console.log(i + "x" + j + ":" + a);

// 2. VCT in ra nếu số chia hết cho 3 thì in Fizz, chia hết cho 5 thì in Buzz, chia hết cho cả 3 và 5
// thì in FizzBuzz, không chia hết cho cả 3 và 5 thì in BizzFuzz, trong khoảng 0 -> 50
// for (let i = 0; i < 50; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i + ":" + "FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log(i + ":" + "Fizz");
//     } else if (i % 5 == 0) {
//         console.log(i + ":" + "Buzz");
//     } else { console.log(i + ":" + "BizzFuzz") };
// }
// 3. VCT tính và in ra tổng bội chung của 3 và 5 trong khoảng 0 -> 100
// let sum = 0;
// for (let i = 0; i < 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) { sum = sum + i }
// }
// console.log(sum);

// 4. VCT nhập vào một số n, kiểm tra số đó có phải số nguyên tố hay không và in ra kết quả

//     let n = Number(prompt("nhập số:"));
// if (n < 2) {
//     n = false;
// } else if (n == 2) {
//     n = true;
// } else if (n % 2 == 0) {
//     n = false;
// } else {
//     for (let i = 3; i < n ; i += 2) {
//         if (n % i == 0) {
//             n = false; break;
//         } else { n = true;}
//     }
// }
//     if (n == true) {
//         console.log("Số nguyên tố");
//     } else { console.log( "Không là số nguyên tố") }

// 5. VCT nhập vào 2 số a, b kiểm tra và in ra các số nguyên tố trong khoảng a -> b
// let a = Number(prompt("nhập số bé:"));
// let b = Number(prompt("nhập số lớn :"));
// for (let n = a; n <= b; n++) {
//   if (n < 2) {
//     n = false;
//   } else if (n == 2) {
//     n = true;
//   } else if (n % 2 == 0) {
//     n = false;
//   } else {
//     for (let i = 3; i < n; i += 2) {
//       if (n % i == 0) {
//         n = false;
//         break;
//       } else {
//         n = true;
//       }
//     }
//   }
//   if (n == true) {
//     console.log("Số nguyên tố" + n);
//   }
// }

// VCT in ra bảng cửu chương ngược(từ 10 -> 1)

// for (let i = 9; i > 0; i--) {
//   for (let j = 9; j > 0; j--) {
//     ketQua = i * j;
//     console.log(i + "x" + j + "=" + ketQua);
//   }
// }

// VCT in ra chữ số đầu và cuối của một số. VD 12345 -> 15
let n = Number(prompt("Nhap so"));
soCuoi = n % 10;
while (n > 10) {
  n = n / 10;
  soDau = parseInt(n);
}
console.log(soDau + "" + soCuoi);

// 2. VCT kiểm tra và in ra một số có phải số Palindrome hay không

// 3. VCT kiểm tra và in ra một số có phải số Armstrong hay không
// 4. VCT tính và in ra giai thừa Factorial của một số
// let i = Number(prompt("Nhap gia tri:"));
// let giaiThua = 1;
// if (i < 1) {
//   console.log("Nhap lai gia tri");
// } else if (i == 1) {
//   console.log(1);
// } else {
//   for (j = 1; j < i; j++) {
//     giaiThua *= i;
//   }
//   console.log(giaiThua);
// }

// 5. VCT kiểm tra và in ra một số có phải số Perfect hay không
// 6. VCT kiểm tra và in ra một số có phải số Strong hay không
