function signup() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:8080/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("User already exists!");
      }
      return response.json();
    })
    .then(() => {
      alert("Signup successful! Kindly login.");
      window.location.href = "../html/index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:8080/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("userId", data.id);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}
