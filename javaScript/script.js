const miniGold = {
  users: [
    {
      username: "kaynan45",
    },
  ],
  posts: [
    {
      id: 1,
      owner: "kaynan45",
      content: "First goldy",
    },
  ],
};

const postInput = document.querySelector(".post-input");
const newPostButton = document.querySelector(".add-post-button");
const postsArea = document.querySelector(".posts-grid");

newPostButton.addEventListener("click", () => {
  postsArea.insertAdjacentHTML(
    "afterbegin",
    `<div class="entirePost js-entire-post">
    <li class="postContent">${postInput.value}</li>
    <div class="post-actions">
    <button class="like-button js-like-button"><i class="fas fa-thumbs-up"></i></button>
    <button class="comment-button js-comment-button"><i class="fas fa-comment"></i></button>
</div>
<div class="comments-section js-comments-section">
    <!-- Comments will be added dynamically here -->
</div>
</div>`
  );

  miniGold.posts.push({
    id: miniGold.posts.length + 1,
    owner: "kaynan45",
    content: postInput.value,
  });
  console.log(miniGold.posts);
  postInput.value = "";
});

function readPosts() {
  return miniGold.posts;
}
