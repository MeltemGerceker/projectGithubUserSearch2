class UI {
    constructor() {
        this.profile = document.querySelector("#profile");
        this.repos = document.querySelector("#repos");
        this.alert = document.querySelector("#alert");
    }

    showProfile(data) {
        console.log(data);
        this.profile.innerHTML = `
        <div class="row border p-4 my-4">
            <!-- left -->
            <div class="col-md-3">
                <img class="img-fluid rounded shadow" src="${data.avatar_url}" alt="">
                <a class="btn btn-primary my-4 w-100" href="${data.html_url}" target="_blank">Show Profile</a>
            </div>

            <!-- right -->
            <div class="col-md-9">
                <span class="badge bg-primary fs-6 mt-1">Public Repos: ${data.public_repos}</span>
                <span class="badge bg-secondary fs-6 mt-1">Public Gists: ${data.public_gists}</span>
                <span class="badge bg-success fs-6 mt-1">Followers: ${data.followers}</span>
                <span class="badge bg-info fs-6 mt-1">Following: ${data.following}</span>

                <ul class="list-group mt-5">
                    <li class="list-group-item">About: ${data.bio}</li>
                    <li class="list-group-item">Company: ${data.company != null ? data.company : ""}</li>
                    <li class="list-group-item">Blog: ${data.blog}</li>
                    <li class="list-group-item">Location: ${data.location}</li>
                    <li class="list-group-item">Account Created: ${new Date(data.created_at).toLocaleDateString()}</li>
                </ul>
            </div>
        </div>
        `;
    }

    showRepos(data) {
        console.log(repos);

        let innerHtml = "";
        data.forEach(item => {
            innerHtml += `
            <div class="row border p-3 mb-4">
                <div class="col-md-6">
                    <a href="${item.html_url}" target="_blank">${item.name}</a>
                </div>
                <div class="col-md-6">
                    <span class="badge bg-primary">Stargazers: ${item.stargazers_count}</span>
                    <span class="badge bg-secondary">Watchers: ${item.watchers_count}</span>
                    <span class="badge bg-success">Forks: ${item.forks_count}</span>
                </div>
            </div>
            `;
        });

        this.repos.innerHTML = innerHtml;
    }

    showAlert(message, className) {
        this.alert.innerHTML = '';
        const div = document.createElement("div");
        div.classList.add("alert");
        div.classList.add(className);
        div.innerText = message;

        this.alert.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 3000);
    }

}

export default UI;