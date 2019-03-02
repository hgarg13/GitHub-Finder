class Github {
  constructor(){
    this.client_id = '77dcae82b8f2dbc65fce';
    this.client_secret = 'f93e5b39e2caedfb91b3d625a1a7880ceb0ad0cd';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      // profile: profile
      profile,
      repos
    }
  }
}