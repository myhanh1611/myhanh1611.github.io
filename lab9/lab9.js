

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
let s = Number(prompt("Giây(s)"));
function h(s) {
  return Math.floor (s/ 3600);
}
function m(s) {
  return Math.floor ((s % 3600) / 60);
}
function S(s) {
  return s - h(s) * 3600 - m(s) * 60;
}
console.log(
  "Thời gian:" + String(h(s)) + ":" + String(m(s)) + ":" + String(S(s))
);
