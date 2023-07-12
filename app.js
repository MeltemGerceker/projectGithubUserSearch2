import Github from "./githubApi.js";
import UI from "./ui.js";

const github = new Github();
const ui = new UI();

const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const themeBtn = document.querySelector("#theme-btn");
const body = document.querySelector("body");

const getInput = () => {
    if (searchInput.value === "") {
        ui.showAlert("Please enter username.", "alert-warning");
        return;
    }

    github.getUser(searchInput.value).then((data) => {

        if (data.profile.message === "Not Found") {
            ui.showAlert("Could not find user.", "alert-danger");
            return;
        }

        ui.showAlert("User is found.", "alert-success");
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
    });
};

const changeTheme = () => {
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-bg-dark");

    if (body.classList.contains("bg-dark"))
        themeBtn.innerText = "Light Mode";
    else
        themeBtn.innerText = "Dark Mode";
};
    

searchBtn.addEventListener("click", getInput);

searchInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter")
        getInput();
});

themeBtn.addEventListener("click", changeTheme);