let xhr = new XMLHttpRequest();
let method = "GET";
let uri = `https://jsonplaceholder.typicode.com/posts`;
xhr.open(method, uri);
xhr.responseType = "json";
xhr.onerror = (e) => console.log(e);
xhr.onload = (e) => {
  let posts = xhr.response;
  posts = posts
    .map((p) => {
      return `
         <div class="col">
              <div class="post">
                  <a href="post.html?postId=${p.id}">
                  <h3>${p.title}</h3>
                    <p>${p.body}</p>
                </a>  
              </div>
          </div>
       `;
    })
    .join("");
  document.querySelector(".posts").innerHTML = posts;
};
xhr.send(null);
