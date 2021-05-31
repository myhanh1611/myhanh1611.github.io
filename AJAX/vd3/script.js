let xhr = new XMLHttpRequest();
let method = "GET";
let uri = `https://reqres.in/api/unknown`;
xhr.open(method, uri);
xhr.responseType = "json";
xhr.onerror = () => console.log(e);
xhr.onload = () => {
  console.log(xhr.response.data);
  let users = xhr.response.data;
  users = users
    .map((u) => {
      return `
      <div class="col  mt-5 " style="background-color: ${u.color};>
      <h3 class="name">${u.name}</h3>
             <p class="color">${u.color}</p>
             <p class="year">${u.year}</p>
             <img src="${u.avatar}" alt="">
             </div>  
       `;
    })
    .join("");
  document.querySelector(".user").innerHTML = users;
};
xhr.send(null);
