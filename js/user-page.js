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
        console.log(data);
        document.getElementById("username").innerHTML = data.UserName;
        document.getElementById("email").innerHTML = data.Email;
        document.getElementById("phone").innerHTML = data.PhoneNumber;

      })
      .catch((error) => {});
};

