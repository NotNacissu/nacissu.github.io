new Vue({
    el: '#app',
    data: {
        projects: []
    },
    created() {
        this.fetchGitHubProjects();
    },
    methods: {
        fetchGitHubProjects() {
            fetch('https://api.github.com/users/NotNacissu/repos')
                .then(response => response.json())
                .then(data => {
                    this.projects = data.map(repo => ({
                        id: repo.id,
                        name: repo.name,
                        description: repo.description,
                        link: repo.html_url,
                        languages: [], // This will be populated later
                        date: repo.created_at,
                        languages_url: repo.languages_url // Store languages URL for fetching
                    }));

                    // Fetch languages for each repo
                    this.projects.forEach(project => {
                        fetch(project.languages_url)
                            .then(response => response.json())
                            .then(languagesData => {
                                project.languages = Object.keys(languagesData); // Extract language names
                            })
                            .catch(err => console.error('Error fetching languages:', err));
                    });
                })
                .catch(err => console.error('Error fetching repositories:', err));
        },
        navigateToProject: function (link) {
            if (link) {
                window.location.href = link;
            } else {
                console.error('Invalid project link');
            }
        }
    },
    computed: {
        sortedProjects() {
            // Sort the projects by date in descending order
            return this.projects.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
        }
    },
    filters: {
        formatDate: function (value) {
            const date = new Date(value);
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        }
    }
});
