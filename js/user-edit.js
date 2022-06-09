window.addEventListener("load", showdata());
function logout() {
    localStorage.removeItem('jwt');
    location.href = "login.html";
}
function showdata(){
    fetch("http://127.0.0.1:5000/api1/user", {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.code) {
          throw new Error(data.description);
        }
        localStorage.setItem("user", JSON.stringify(data));
        console.log(data);
        document.getElementById("username").placeholder = data.UserName;
        document.getElementById("email").placeholder = data.Email;
        document.getElementById("phone").placeholder = data.PhoneNumber;
      })
      .catch((error) => {});
};

const form = document.getElementById("user-edit");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    user=localStorage.getItem("user");
    let newUsername = "";
    if (document.getElementById("username").value) 
    newUsername=document.getElementById("username").value;
    else newUsername=document.getElementById("username").placeholder;
    console.log("newUsername", newUsername);
    let newEmail = "";
    if (document.getElementById("email").value) newEmail=document.getElementById("email").value;
    else newEmail=document.getElementById("email").placeholder;
    console.log("newUsername", newEmail);
    let newPassword = "";
    if (document.getElementById("password").value) newPassword=document.getElementById("password").value;
    else newPassword = localStorage.getItem('pswrd');
    console.log("newUsername", newPassword);
    let newPhone = "";
    if (document.getElementById("phone").value) newPhone=document.getElementById("phone").value;
    else newPhone=document.getElementById("phone").placeholder;
    console.log("newUsername", newPhone);

    fetch("http://127.0.0.1:5000/api1/user", {
      method: "PUT", 
      body: JSON.stringify({
        UserName: newUsername,        
        PhoneNumber: newPhone,
        Email: newEmail,
        Password: newPassword
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((response) => {
        if (response.status == 200) window.open("login.html", "_self");
        
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
    })
}

