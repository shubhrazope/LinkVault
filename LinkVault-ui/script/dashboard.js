let allBookmarks = [];

document.addEventListener("DOMContentLoaded", () => {
  if (!getUser()) {
    alert("You must be logged in to access this page");
    window.location.href = "index.html";
    return;
  }

  fetch(`http://localhost:8080/api/bookmark/user/${getUser()}`)
    .then((response) => response.json())
    .then((data) => {
      allBookmarks = data;
      renderBookmarks(allBookmarks);
    });
});

function getUser() {
  return localStorage.getItem("userId");
}

function editBookmark(bookmarkId) {
  window.location.href = `edit-bookmark.html?bookmarkId=${bookmarkId}`;
}

function deleteBookmark(bookmarkId) {
  const confirmDelete = window.confirm(
    "Click OK to delete this bookmark, or Cancel to keep it."
  );
  if (!confirmDelete) return;

  fetch(`http://localhost:8080/api/bookmark/${bookmarkId}`, {
    method: "DELETE",
  })
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("Error deleting bookmark:", error);
    });
}

function logout() {
  localStorage.removeItem("userId");
  window.location.href = "index.html";
}

function addBookmark() {
  window.location.href = "add-bookmark.html";
}

function filterBookmarks() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();

  fetch(`http://localhost:8080/api/bookmark/user/${getUser()}`)
    .then((response) => response.json())
    .then((data) => {
      const filteredBookmarks = data.filter(
        (bookmark) =>
          bookmark.title.toLowerCase().includes(searchTerm) ||
          bookmark.description.toLowerCase().includes(searchTerm) ||
          bookmark.url.toLowerCase().includes(searchTerm) ||
          bookmark.category.toLowerCase().includes(searchTerm)
      );

      renderBookmarks(filteredBookmarks);
    });
}

function renderBookmarks(bookmarks) {
  const bookmarksContainer = document.getElementById("bookmarks-container");
  bookmarksContainer.innerHTML = "";

  bookmarks.forEach((bookmark) => {
    const bookmarkCard = document.createElement("div");
    bookmarkCard.innerHTML = `
      <div class="card" style="width: 18rem; height: 14rem">
        <div class="card-body">
          <h5 class="card-title">${bookmark.title}</h5>
          <p class="card-text">Description - ${bookmark.description}</p>
          <p class="card-text">Category - ${
            bookmark.category || "Uncategorized"
          }</p>
          <a href="${bookmark.url}" target="_blank" class="card-link">${
      bookmark.url
    }</a>
          <div class="card-buttons">
            <button class="card-btn edit-btn" onclick="editBookmark(${
              bookmark.id
            })">✏️ Edit</button>
            <button class="card-btn delete-btn" onclick="deleteBookmark(${
              bookmark.id
            })">🗑️ Delete</button>
          </div>
        </div>
      </div>
    `;
    bookmarksContainer.appendChild(bookmarkCard);
  });
}
