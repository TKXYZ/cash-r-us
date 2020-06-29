window.onload = function () {
    this.document.getElementById("logOutBtn").addEventListener("click", this.logout)
}

function logout() {
    fetch("http://localhost:9999/LogOutServlet")
        .then(response => response.text())
        .then(string => {
            console.log("-- Back from Servlet --")
            console.log("LoginServlet Response: " + string);
            console.log("Redirecting to: " + string);
            window.location.assign(string)
        })
        .catch(error => {
            console.log(error);
        });
}