const form = document.getElementById("login");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let UserName = document.getElementById("username").value;
    let Password = document.getElementById("password").value;
    localStorage.setItem('pswrd', Password);
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      body: JSON.stringify({
        UserName: UserName,
        Password: Password
      }),
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
        if (response.status == 200) window.open("user-page.html", "_self");
        return response.json();
      })
      .then((data) => {
        if (data.code) {
          throw new Error(data.description);
        }
        localStorage.setItem('jwt', data.token);
        var description = document.getElementById("error-message") 
        description.textContent = data.Message
      })
      .catch((error) => {});
  });
}
