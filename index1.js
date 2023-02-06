var button = document.getElementById("likes"),
  likes = 0;
button.onclick = function() {
  likes += 1;
  button.innerHTML = "likes " + likes;
};