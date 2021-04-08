// let Hanh = {
//   ten: "Hanh",
//   ngheNghiep: "ky su",
//   tuoi: "29",
//   start: function () {
//     console.log("Vu Thi My Hanh");
//   },
// };
// console.log(Hanh);
// Hanh["ngheNghiep"];
// Hanh.que = "Nam Dinh";
// Hanh["bo"] = "hhhhh";
// console.log(Hanh);
// console.log(Hanh.ngheNghiep);
// Hanh.Duong = {
//   nam: "2020",
//   gioiTinh: "nu",
// };

// console.log(Hanh);
// for (let k in Hanh) {
//   console.log(k);
// }

// let o = {
//     name: "Hanh",
// };
// let c = o;
// let d = {};
// let d = Object.assign({}, o)

// let salaries = {};
// function input(obj) {
//     for (; ;) {
//         let name = prompt("Ten Nhan vien");
//         let salary = prompt("Luong" + name);
//         if (name == null || salary == null || name == " " || salary == "") {
//             break;
//         } else {
//             obj[name] = Number(salary)
//         }
//     }
// }
// input(salaries)

let salaries = {
  anna: 1000,
  john: 1200,
  phoebe: 2000,
  brian: 1500,
  diana: 1100,
};
// function edit(obj) {
//     for (; ;) {
//         let name = prompt("Ten Nhan vien");
//         let salary = prompt("Luong" + name);
//         if (name == null || salary == null || name == " " || salary == "") {
//             break;
//         } else if (name in obj) {
//             obj[name] = Number(salary);
//         }
//     }
// }
// edit(salaries);
// function minmax(obj) {
//     let max = NaN, min = NaN, maxName, minName;
//     // Khai bao oject rong
//     let result = {};
    
//     for (let i in obj) {
//         if (obj[i] > max) {
//             max = obj[i];
//             maxName = i;
//         }
//         if (obj[i] < min) {
//             obj[i] = min;
//             minName = i;
//         }
//     }
//     result[maxName] = max;
//     result[minName] = min;
//     return result;
// }
// minmax(salaries);

function avg(obj) {
    let sum = 0;
    let dem = 0;
    for (let i in obj) {
        sum += obj[i];
        dem += 1
    }
return sum/dem
    }
    avg(salaries);