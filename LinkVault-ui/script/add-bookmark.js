document.addEventListener("DOMContentLoaded", () => {
  if (!getUser()) {
    alert("You must be logged in to access this page");
    window.location.href = "index.html";
    return;
  }
});

function addBookmark(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const url = document.getElementById("url").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  fetch(`http://localhost:8080/api/bookmark?userId=${getUser()}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, url, category, description }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add bookmark");
      }
      return response.json();
    })
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
      console.error(error);
    });
}

function getUser() {
  return localStorage.getItem("userId");
}
