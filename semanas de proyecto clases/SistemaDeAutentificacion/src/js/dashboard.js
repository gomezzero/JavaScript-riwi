const user = localStorage.getItem("userOnline")
const btnLogout = document.getElementById("btn-logout")

if (user == null) {
    window.location.href = "/"
}

btnLogout.addEventListener("click", () => {
    localStorage.removeItem("userOnline")
    window.location.href = "/"
})