// article.js

// JavaScript code for handling category buttons
var btnAll = document.getElementById("btn-all");
var btnTrending = document.getElementById("btn-trending");
var btnLatest = document.getElementById("btn-latest");

btnAll.addEventListener("click", function() {
  // Show all articles
  showArticles();
});

btnTrending.addEventListener("click", function() {
  // Show only trending articles
  showArticles("trending");
});

btnLatest.addEventListener("click", function() {
  // Show only latest articles
  showArticles("latest");
});

function showArticles(category) {
  var articles = document.getElementsByClassName("article");

  for (var i = 0; i < articles.length; i++) {
    var article = articles[i];

    if (category === "trending" && !article.classList.contains("trending")) {
      article.style.display = "none";
    } else if (category === "latest" && !article.classList.contains("latest")) {
      article.style.display = "none";
    } else {
      article.style.display = "block";
    }
  }
}

// JavaScript code for handling like and comment buttons
var likeButtons = document.getElementsByClassName("like");
var commentButtons = document.getElementsByClassName("comment");

for (var i = 0; i < likeButtons.length; i++) {
  var likeButton = likeButtons[i];
  likeButton.addEventListener("click", handleLike);
}

for (var i = 0; i < commentButtons.length; i++) {
  var commentButton = commentButtons[i];
  commentButton.addEventListener("click", handleComment);
}

function handleLike(event) {
  var likeButton = event.target;
  var parentArticle = likeButton.closest(".article");
  var likeCount = parentArticle.querySelector(".like-count");

  if (likeButton.classList.contains("liked")) {
    likeButton.classList.remove("liked");
    likeCount.textContent = parseInt(likeCount.textContent) - 1;
  } else {
    likeButton.classList.add("liked");
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
  }
}

function handleComment(event) {
  var commentButton = event.target;
  var parentArticle = commentButton.closest(".article");
  var commentInput = parentArticle.querySelector(".comment-input");
  var commentsList = parentArticle.querySelector(".comments-list");

  var commentText = commentInput.value;
  if (commentText.trim() === "") {
    return;
  }

  var commentItem = document.createElement("li");
  commentItem.textContent = commentText;

  commentsList.appendChild(commentItem);
  commentInput.value = "";
}
// JavaScript code for handling share options
var shareOptions = document.getElementsByClassName("share-options");

for (var i = 0; i < shareOptions.length; i++) {
  var shareOption = shareOptions[i];
  var shareButtons = shareOption.getElementsByTagName("span");

  for (var j = 1; j < shareButtons.length; j++) {
    var shareButton = shareButtons[j];
    shareButton.addEventListener("click", handleShare);
  }
}

function handleShare(event) {
  var shareButton = event.target;
  var shareText = shareButton.textContent;

  // Replace the following code with the actual share functionality
  alert("Sharing on " + shareText + "...");
}

