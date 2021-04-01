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
// Bai 3: Viết chương trình nhập 3 số a, b, c bất kỳ. Kiểm tra 3 số đó có tạo thành tam giác hợp lệ hay
// không và in ra kết quả, sử dụng toán tử logic
let a = Number(prompt("Nhap a: "));
let b = Number(prompt("Nhap b: "));
let c = Number(prompt("Nhap c: "));
b + c > a &&
  b + a > c &&
  c + a > b &&
  a > 0 &&
  b > 0 &&
  c > 0 &&
  console.log(a + "," + b + "," + c + "la 3 canh cua 1 tam giac");
(a + b <= c || a + c <= b || b + c <= a || a <= 0 || b <= 0 || c <= 0) &&
  console.log(a + "," + b + "," + c + " khong la 3 canh cua 1 tam giac");
