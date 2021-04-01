// function greeting(name, age, job) {
//   alert("hello,i'm" + name + "I'm" + age + "yearl old" + job);
// }
// greeting("BAN", 29, "STUDENT");
// // greeting("Hanh", 29, "học sinh");
// // function sub(a, b) {
// //   let result = a - b;
// //   return result;
// // }
// // alert(sub(1, 2));
// let y = prompt("Nhập tên của bạn");

// LET age = Number(prompt("Nhập tuổi của bạn"))
// let ageAftertenYear = age + 10;
// console.log("Tuổi của bạn 10 năm sau: " + ageAftertenYear);

// function sum(a, b) {
//   let sum = a + b;
//   return sum;
// }

// let a = Number(prompt("Chiều dài"));
// let b = Number(prompt("Chiều rộng"));

// function chuVi(a, b) {
//   return (a + b) * 2;
// }
// function dienTich(a, b) {
//   return a * b;
// }
// console.log("Chu vi =" + chuVi(a, b));
// console.log("dienTich =" + dienTich(a, b));

// Bai1: Viết chương trình nhập vào một giá trị đo độ dài ở đơn vị cm, tính và in ra giá trị tương ứng ở
// các đơn vị mm, m, km
// let L = Number(prompt("Chiều dài L(cm)"));
// function chieuDai_mm(L) {
//   return L * 10;
// }
// function chieuDai_m(L) {
//   return L / 100;
// }
// function chieuDai_Km(L) {
//   return L / 10000;// }

// console.log("Chiều dài L(mm)=" + chieuDai_mm(L));
// console.log("Chiều dài L(m)=" + chieuDai_m(L));
// console.log("Chiều dài L(Km)=" + chieuDai_Km(L));
// Bài 2: Viết chương trình nhập vào một giá trị nhiệt độ ở đơn vị Celsius, in ra nhiệt độ ở đơn vị
// Fahrenheit và Kevin tương ứng

// let C = Number(prompt("Nhiệt độ (c)"));
// function F(C) {
//   return C * 1.8 + 32;
// }
// function K(C) {
//   return C + 273.16;
// }
// console.log("Độ F=" + F(C));
// console.log("Độ K=" + K(C));
// Bài 3: Viết chương trình nhập thời gian hiện tại tính theo số giây từ 0h, tính và in ra giá trị
// giờ/phút/giây tương ứng theo định dạng h:m:s
// let s = Number(prompt("Giây(s)"));
// function h(s) {
//   return Math.floor (s/ 3600);
// }
// function m(s) {
//   return Math.floor ((s % 3600) / 60);
// }
// function S(s) {
//   return s - h(s) * 3600 - m(s) * 60;
// }
// console.log(
//   "Thời gian:" + String(h(s)) + ":" + String(m(s)) + ":" + String(S(s))
// );
// kiem tra so chan hay le
// let n = Number(prompt("Nhap so n:"));
//   n % 2 == 0 && console.log(n + "la so chan");
//  n % 2 != 0 && console.log(n + "la so le");
//  viet a, b. Kiem tra va in ra so lon hon

// let a = Number(prompt("Nhap so a:"));
// let b = Number(prompt("Nhap so b:"));
// a > b && console.log(a + "la so lon");
// a < b && console.log(a + "la so be");

//

// Viết chương trình nhập vào 2 số a, b, kiểm tra và in ra số lớn hơn

// let a = Number("Nhap so a:");
// let a = Number("Nhap so b:");
// if (a > b)  { console.log("so lon"); }
// else  {console.log("so be")}

// 3 Viết chương trình nhập vào một tháng trong năm, in ra mùa tương ứng

// let a = Number(prompt("Thang:"));
// if (0 < a && a <= 3) {
//   console.log("Mua Xuan");
// } else if ( a < 7) {
//   console.log("Mua he");
// } else if (a < 10) {
//     console.log("Mua thu");
// } else if (a < 13 ) {
//   console.log("Mua Dong");
// }
// else {console.log("Nhap sai")}
//Viết chương trình nhập một số a, kiểm tra và in ra số đó có chia hết cho cả 5 và 11 hay không
// let a = Number(prompt("So a:"));
// if (a % 5 == 0 && a % 11 == 0) { console.log("a chia het 5 va 11"); }
// else {console.log("a khong chia het cho ca 5 va 11")}

// Viết chương trình nhập vào 2 số a, b là tham số của phương trình bậc nhất ax + b = 0, 
// tính và in ra nghiệm của phương trình đó
let a = Number(prompt("Nhap a:" ));
let b = Number(prompt("Nhap b:" ));
