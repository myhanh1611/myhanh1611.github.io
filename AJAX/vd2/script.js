let xhr = new XMLHttpRequest();
let method = "GET";
let uri = `https://reqres.in/api/users?page=2`;
xhr.open(method, uri);
xhr.responseType = "json";
xhr.onerror = () => console.log(e);
xhr.onload = () => {
  console.log(xhr.response.data);
  let users = xhr.response.data;
  users = users
    .map((u) => {
      return `
      <div class="col  mt-5">
      <h3 class="first_name">${u.first_name}</h3>
             <p class="email">${u.email}</p>
             <img src="${u.avatar}" alt="">
             </div>  
       `;
    })
    .join("");
  document.querySelector(".user").innerHTML = users;
};
xhr.send(null);
