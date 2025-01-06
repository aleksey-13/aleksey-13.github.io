class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    const {
      avatar_url,
      html_url,
      public_repos,
      public_gists,
      followers,
      following,
      company,
      blog,
      email,
      location,
      created_at,
    } = user;
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${avatar_url}"/>
                        <a href="${html_url}" target="_blank" class="btn btn-block btn-primary mb-4">View profile</a>
                </div>
                
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${public_gists}</span>
                    <span class="badge badge-success">Followers: ${followers}</span>
                    <span class="badge badge-info">Following: ${following}</span>
                    <br>
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${company}</li>
                        <li class="list-group-item">Website/Blog: ${blog}</li>
                        <li class="list-group-item">Location: ${location}</li>
                        <li class="list-group-item">Member Since: ${new Date(
                          created_at
                        ).toLocaleDateString()}</li>
<!--                        <li class="list-group-item">Email: ${email}</li>-->
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
`;
  }

  clearProfile() {
    while (this.profile.firstChild) {
      this.profile.removeChild(this.profile.firstChild);
    }
  }

  createAlert(message) {
    const div = document.createElement("div");
    div.className = "alert alert-info";
    div.textContent = message;

    return div;
  }

  showAlert(message) {
    this.clearAlert();
    const alert = this.createAlert(message);
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");

    container.insertBefore(alert, search);

    setTimeout(this.clearAlert, 3000);
  }

  clearAlert() {
    const alert = document.querySelector(".alert");

    if (alert) {
      alert.remove();
    }
  }

  showRepos(repos) {
    let output;

    repos.forEach((repo) => {
      const { name, html_url, stargazers_count, watchers, forks } = repo;
      output += `
        <div class="card card-body md-2">
            <div class="row">
                <div class="col-md-6">
                    <a href="${html_url}" target="_blank">${name}</a> 
                </div>
                <div class="col-md-6">
                    <span class="badge badge-primary">Stars: ${stargazers_count}</span>
                    <span class="badge badge-secondary">Watches Gists: ${watchers}</span>
                    <span class="badge badge-success">Forks: ${forks}</span>
                </div>
            </div>
        </div>
      `;
    });

    document.getElementById("repos").innerHTML = output;
  }
}
