class Github {
  constructor(props) {
    this.client_id = "cc2e8aeeb10e5e9edb40";
    this.client_secret = "df5be11bf21700597a31c6a9f15de71baff67166";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();

    const repos = await this.getRepos(user);

    return {
      profile,
      repos,
    };
  }

  async getRepos(user) {
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    return reposResponse.json();
  }
}
