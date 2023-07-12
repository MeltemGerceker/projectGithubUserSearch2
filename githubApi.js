class Github {
    constructor() {
        this.clientId = "40823e49c47c9dcd44a7";
        this.clientSecret = "36ca5570700dd9f4769f9170048086ac84cdea2d";
        this.perPage = 10;
        this.sort = "asc";
    }

    async getUser(username) {
        const responseProfile = await fetch(`https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const profile = await responseProfile.json();

        const responseRepos = await fetch(`https://api.github.com/users/${username}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}&per_page=${this.perPage}&sort=${this.sort}`);
        const repos = await responseRepos.json();
        
        return {profile, repos};
    }
    
}

export default Github;