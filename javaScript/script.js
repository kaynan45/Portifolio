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
  postsArea.insertAdjacentHTML("afterbegin", `<li>${postInput.value}</li>`);

  miniGold.posts.push({
    id: miniGold.posts.length + 1,
    owner: "kaynan45",
    content: postInput.value,
  });
  console.log(miniGold.posts);
  postInput.value = "";
});
