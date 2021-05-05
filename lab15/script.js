// #### 1. Viết hàm chuyển đổi một tên thành tên viết tắt.

// ```js
// // Ví dụ
// abbr(“Ba Nguyễn”); // “Ba N.”
// ```
// function abbr(n) {
//     let i = n.indexOf(" ");
//     console.log((n.substring(0, i+2))+".")
// }
// abbr("My Hanh")

 


// #### 2. Viết hàm ẩn địa chỉ email.

// ```js
// // Ví dụ
// hide(“banguyen@techmaster.vn”); // “ba…@techmaster.vn”
// ```

// #### 3. Viết hàm chuyển đổi một chuỗi thành dạng capitalize.

// ```js
// // Ví dụ
// cap(“hello world”); // “Hello World”
// ```
// function cap(n) {
//     console.log(n.toUpperCase());
// }
// cap("my hanh")


// #### 4. Viết hàm chuyển đổi một chuỗi thành dạng paramaterize.

// ```js
// // Ví dụ
// param(“Hello World”); // “hello-world”
// ```
// function param(n) {
//     let i = n.toLowerCase();
//     console.log(i.replaceAll(' ', '-'));
// }
// param("Vũ Thị Mỹ Hạnh")
// #### 5. Viết hàm đảo ngược chữ thường thành chữ hoa, và ngược lại.

// ```js
// // Ví dụ
// revertCase(“aBcD”); // “AbCd”
// ```

// #### 6. Viết hàm chèn một chuỗi con vào chuỗi tại index chỉ định.

// ```js
// // Ví dụ
// insertTo(“acde”, “b”, 1); // “abcde”
// ```
// function insertTo(str1, str2, index) {
//     let n1 = str1.substr(index);
//     let n2 = str1.substr(0, index);
//     console.log(n2 + str2 + n1);
// }
// insertTo("acde", "b", 1)


// #### 7. Viết hàm đếm số lần xuất hiện của chuỗi con trong chuỗi.

// ```js
// // Ví dụ
// count(“abca”, “a”); // 2
// ```
// function count(str1, str2) {
//     let m1 = str1.length, m2 = str2.length;
//     let dem = 0, i = 0;
    
//     while (i < m1) {
//         let index = str1.indexOf(str2, i);
//         if (index !== -1) {
//             i = index + 1;
//             dem = dem + 1;
//         }
//         else {break}
//     }
//      console.log(dem)
// }
//        count("afgsaghgda","a")



// #### 8. Viết hàm cắt chuỗi theo số từ chỉ định.

// ```js
// // Ví dụ
// slideWords(“My name is Ba”, 2); // “My name”
// ```
// function slideWords(str, i) {
//     let n = str.indexOf(" ")
// }
// #### 9. Viết hàm tạo chuỗi ngẫu nhiên với độ dài 32 ký tự.

// ```js
// // Ví dụ
// randomString(); // “sfjh2ih4(U#%(kljo423oiir*(#%UIOJ”
// ```

// #### 10. Viết hàm thay thế các ký tự trong chuỗi thành ký tự liền sau trong bảng mã Unicode.

// ```js
// // Ví dụ
// toNextChar(“ad”); // “be”
// ```




// #### 1. Cho một mảng số, viết hàm tính trung bình cộng tất cả phần tử trong mảng

// ```js
// // Ví dụ
// avg([1, 2, 3]); // 2.0


// function avg([a, b, c]) {
//     let n = [a, b, c].length;
//     let sum = 0;
//     for (let i of [a, b, c]) {
//         sum = sum + i;
       
//     }
//  console.log(sum/n)
// }
// avg([3, 5, 9])




// ```

// #### 2. Cho một mảng số, viết hàm tìm giá trị lớn nhất trong mảng, kết quả trả về bao gồm giá trị và chỉ mục tương ứng

// ```js
// // Ví dụ
// maxOfArr([1, 2, 3]); // {index: 2, value: 3}
// ```
let Arr = [1, 2, 3, 7, 9, 12];
    let max = Arr[0];
    for (let i = 1; i < Arr.length; i++)
    {
        if (max < Arr[i]) {
            max = Arr[i];
        }
    }
    console.log("index:" + Arr.indexOf(max) + "," + "value:" + max);


// #### 3. Cho một mảng số viết hàm tìm số lớn thứ 2 trong mảng

// ```js
// // Ví dụ
// secondValue([1, 3, 2, 4, 0, 4]); // 3
// ```

// #### 4. Viết hàm chuyển đổi một chuỗi thành dạng capitalize.

// ```js
// // Ví dụ
// cap("hello world"); // "Hello World"
// ```

// #### 5. Viết hàm tìm số phần tử xuất hiện nhiều lần nhất trong mảng

// ```js
// // Ví dụ
// most([1, 2, 3]); // 2.0
// ```

// #### 6. Viết hàm cắt chuỗi thành một mảng có độ dài chỉ định.

// ```js
// // Ví dụ
// slide("Hello", 2); // ["He", "ll", "o"]
// ```

// #### 7. Viết hàm tách chuỗi thành một mảng các chuỗi con

// ```js
// // Ví dụ
// breakWord("dog"); // ["d", "do", "dog", "og", "g"]
// ```

// #### 8. Viết hàm loại bỏ các giá trị “false” khỏi mảng.

// ```js
// // Ví dụ
// removeFalsy([null, "", 0, false, 1]); // [1]
// ```

// #### 9. Viết hàm lấy một phần tử ngẫu nhiên trong mảng

// ```js
// // Ví dụ
// removeFalsy([null, "", 0, false, 1]); // [1]
// ```

// #### 10. Viết hàm sắp xếp mảng với vị trí ngẫu nhiên (xáo trộn mảng)

// ```js
// // Ví dụ
// shuffle([1, 2, 3, 4]); // [1, 3, 4, 2]
Con