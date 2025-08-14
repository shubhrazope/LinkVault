const urlParams = new URLSearchParams(window.location.search);
const bookmarkId = urlParams.get("bookmarkId");

fetch(`http://localhost:8080/api/bookmark/${bookmarkId}`, {
  method: "GET",
})
  .then((response) => response.json())
  .then((bookmark) => {
    document.getElementById("title").value = bookmark.title;
    document.getElementById("url").value = bookmark.url;
    document.getElementById("category").value = bookmark.category;
    document.getElementById("description").value = bookmark.description;
  })
  .catch((error) => {
    alert(error.message);
    console.error(error);
  });

function updateBookmark(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const url = document.getElementById("url").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  fetch(`http://localhost:8080/api/bookmark/${bookmarkId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, url, category, description }),
  })
    .then((response) => response.json())
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
      console.error(error);
    });
}
