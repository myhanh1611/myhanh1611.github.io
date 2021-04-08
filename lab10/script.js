// Viết chương trình nhập hệ số a, b của phương trình bậc 1 ax + b = 0, tính và in ra nghiệm
// của phương trình. Sử dụng toán tử logic để đánh giá các trường hợp của phương trình

// let a = Number(prompt("Nhap a:"));
// let b = Number(prompt("Nhap b:" ));
// a == 0 && b == 0 && console.log("phuong trinh vo so nghiem");
// a == 0 && b != 0 && console.log("phuong trinh vo nghiem")
// console.log("x=" + -b/a)

// // bai 2: Viết chương trình nhập 3 số a, b, c. Sử dụng toán tử logic kiểm tra và in ra số lớn nhất
// let a = Number(prompt("Nhap a: "));

// let b = Number(prompt("Nhap b: "));
// let c = Number(prompt("Nhap c: "));
// a >= b && a > c && console.log(a + "la so lon");
// b >= a && b > c && console.log(b + "la so lon");
// c >= a && c >= b && console.log(c + "la so lon");

// let a = Number(prompt("Nhap a: "));
// let b = Number(prompt("Nhap b: "));
// let c = Number(prompt("Nhap c: "));
// let max = a;
// if (b > max) {
//   max = b;
// } else if (c > max) {
//   max = c;
// }
// console.log(max);

// let max = a;
// b > max && (max = b);
// c > max && (max = c);
// console.log(max + "la so lon nhat");

// // Bai 3: Viết chương trình nhập 3 số a, b, c bất kỳ. Kiểm tra 3 số đó có tạo thành tam giác hợp lệ hay
// // không và in ra kết quả, sử dụng toán tử logic
// let a = Number(prompt("Nhap a: "));
// let b = Number(prompt("Nhap b: "));
// let c = Number(prompt("Nhap c: "));
// // b + c > a &&
// //   b + a > c &&
//   c + a > b &&
//   a > 0 &&
//   b > 0 &&
//   c > 0 &&
//   console.log(a + "," + b + "," + c + "la 3 canh cua 1 tam giac");
// (a + b <= c || a + c <= b || b + c <= a || a <= 0 || b <= 0 || c <= 0) &&
//   console.log(a + "," + b + "," + c + " khong la 3 canh cua 1 tam giac");

// if (b + c > a && b + a > c && c + a > b && a > 0 && b > 0 && c > 0) {
//   console.log(a + "," + b + "," + c + "la 3 canh tam giac");
// } else {
//   console.log(a + "," + b + "," + c + "la 3 canh tam giac");
// }

// // Nhap ky tu char in la nguyen am hay phu am

// let char = String(prompt("nhap ky tu:"));
// if (("A" <= char && char <= "Z") || ("a" <= char && char <= "z")) {
//   if (char == "e" || char == "u" || char == "i" || char == "o" || char == "a") { console.log(char + "La nguyen am")

//   } else { console.log(char + "La phu am"); }
//   else { console.log(char + "khong la nguyen am va phu am");}

// Viết chương trình tính tổng tất cả số lẻ trong khoảng 0 -> 100 và in ra kết quả
// let sum = 0;
// for (let i = 1; i <= 100; i = i + 2){
//   sum += i
// }
// console.log("tong cac so le:" + sum)

// 3. Viết chương trình tính tổng tất cả các số lẻ chia hết cho 3 trong khoảng 0 -> 100 và in ra
// kết quả
// let sum = 0;
// for (let i = 1; i <= 100; i = i + 2) {
//   if (i % 3 == 0) {
//     sum += i;
//   }
// }
// console.log("tong cac so le:" + sum);

// 4. Viết chương trình tính tổng tất cả các số chia hết cho cả 3, 5 và 7 trong khoảng 0 -> 100 và
// in ra kết quả
// let sum = 0;
// for (let i = 0; i <= 100; i = i + 3 * 5 * 7) {
//   sum += i;
// }
// console.log("tong cac so le:" + sum);

// 5. Viết chương trình tính tổng bình phương của tất cả các số chia hết cho 3 hoặc 5 hoặc 7 trong
// khoảng 0 -> 100 và in ra kết quả
// let sum = 0;
// for (let i = 0; i <= 100; i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
//   sum += i * i;
// }
// console.log( + sum);

// // 6. Viết chương trình in bảng cửu chương từ 1 -> 10

// for (let i = 1; i <= 10; i++) {
//   // i = 1 - 10
//   // i = 1 - 10
//   for (let j = 1; j <= 10; j++) {
//     s += i * j;
//   }
//   console.log(s);
// }

// Viết chương trình cho phép nhập số lượng số tùy ý (dừng nhập nếu input là null hoặc “”),
// in ra số lớn nhất và nhỏ nhất trong các số đã nhập
// for (let i)

// Viết chương trình tính tổng tất cả các số lẻ chia hết cho 3 trong khoảng 0 -> 100 và in ra
// kết quả
// let sum = 0;
// for (let i = 1; i <= 100; i = i + 2) {
//   if (i % 3 == 0) {
//     a = sum + i;
//   }
// }
// console.log("Kết quả:" + sum);

// u: for (let i = 0; i < 5; i++) {
//   r12: for (let j = i + 1; j < 5; j++) {
//     if (i == 3) {
//       break r12;
//     }
//     console.log(i, j);
//   }
// }
// let j = 1;
// while (j < 1) {
//   console.log(j);
//   j = j + 2;
// }
// do {
//   console.log(j, "a");
//   j = j + 1;
// } while (j < 1);
let n;
console.log("12");
do {
  n = prompt("Giá trị nhập:");
  console.log(n, typeof n);
} while (n !== null && n !== undefined);

// Bài 7: Viêt chương trình nhập số lượng tùy ý dừng nhập neu input là null hoặc "". 
//In ra số lớn  nhất và nhỏ nhất trong các số đã nhập
let max;
let min;

for(let i = 0; ;i++){
    let x = prompt("Mời bạn nhập số");

    if(x == null || x == ""){
        break;
    }

    if(i == 0){
        max = x; 
        min = x;
    }

    if(Number(x) > max){
        max = x;
    }

    if(Number(x) < min){
         min = x;
    }
}
console.log("max = " + max);
console.log("min = " + min);