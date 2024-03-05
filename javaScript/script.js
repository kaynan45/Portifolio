import { posts } from "./data.js";

const postInput = document.querySelector(".post-input");
const newPostButton = document.querySelector(".add-post-button");

newPostButton.addEventListener("click", () => {

  
  let postHtml = "";
  posts.forEach((post) => {
    postHtml += `
    <div class="post">
        <h3 class="post-title">${post.title}</h3>
        <p class="post-content"> ${post.content} </p>
        <p class="post-author">${post.author}</p>
    </div>
    `;
  });

  document.querySelector(".posts-grid").innerHTML = postHtml;
});
