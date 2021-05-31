let students = [
  {
    name: "Tú Anh",
    age: 21,
    gmail: "Tuanh@teachmater",
  },
  {
    name: "Chị Hạnh",
    age: 30,
    gmail: "Tuanh@teachmater",
  },
  {
    name: "Quang",
    age: 24,
    gmail: "Tuanh@teachmater",
  },
  {
    name: "Cường",
    age: 25,
    gmail: "Tuanh@teachmater",
  },
  {
    name: "Hoàng",
    age: 29,
    gmail: "Tuanh@teachmater",
  },
  {
    name: "Ngọc",
    age: 27,
    gmail: "Tuanh@teachmater",
  },
  {
    name: "Huy",
    age: 19,
     gmail: "Tuanh@teachmater",
  },
];
// Viết hàm sử dụng cú pháp arrow function, destructuring assignment
// sắp xếp danh sách học viên theo tuổi
// students.sort((s1, s2) => s1.age - s2.age);
// console.log(students)

// let oldStudents = students
//     .filter(({age}) => age >=25)
//     .sort(({age}))
// })
// oldStudents.sort((student1, student2) => s1.age - s2.age);
// console.log(oldStudents);

let renderStudents = (students) =>
  students
    .map(
      ({ name, age, email }, i) => `
                <tr>
                    <th scope="row">${i + 1}</th>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${email}</td>
          <tr>
          `
    )
    .join("");

document.getElementById("tbody").innerHTML = renderStudents(students);
