const form = document.getElementById("signup-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone-number").value;

    fetch("http://127.0.0.1:5000/api1/user", {
      method: "POST", 
      body: JSON.stringify({
        UserName: username,
        Email: email,
        Password: password,
        PhoneNumber: phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status == 201) window.open("login.html", "_self");

        return response.json();
      })
      .then((data) => {
        if (data.code) {
          throw new Error(data.description);
        }
        localStorage.setItem("user", JSON.stringify(data));
        console.log(data);
        var description = document.getElementById("error-message") 
        description.textContent = data.Message
      })
      .catch((error) => {});
  });
}
