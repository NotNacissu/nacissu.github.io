new Vue({
    el: '#app',
    data: {
        projects: [
            { id: 1, name: 'Project 1', description: 'Description of Project 1', link: 'https://www.youtube.com/watch?v=fevGo3H5840', languages: ['JavaScript', 'HTML', 'CSS'], date: '2024-03-30' },
            { id: 2, name: 'Project 2', description: 'Description of Project 2', link: 'project2.html', languages: ['Python', 'Django', 'HTML', 'CSS'], date: '2023-12-30' },
            { id: 3, name: 'Project 3', description: 'Description of Project 3', link: 'project3.html', languages: ['Java', 'Spring', 'JavaScript', 'HTML'], date: '2023-11-30' },
            { id: 4, name: 'Project 4', description: 'Description of Project 4', link: 'project4.html', languages: ['C++', 'OpenGL'], date: '2023-10-30' },
            { id: 5, name: 'Project 5', description: 'Description of Project 5', link: 'project5.html', languages: ['JavaScript', 'React', 'Node.js'], date: '2023-09-30' },
            { id: 6, name: 'Project 6', description: 'Description of Project 6', link: 'project6.html', languages: ['Python', 'Flask', 'HTML', 'CSS'], date: '2022-08-30' },
            { id: 7, name: 'Project 7', description: 'Description of Project 7', link: 'project7.html', languages: ['JavaScript', 'Vue.js', 'HTML', 'CSS'], date: '2022-07-30' },
            { id: 8, name: 'Project 8', description: 'Description of Project 8', link: 'project8.html', languages: ['Ruby', 'Rails', 'JavaScript', 'HTML', 'CSS'], date: '2022-05-30' },
            { id: 9, name: 'Project 9', description: 'Description of Project 9', link: 'project9.html', languages: ['JavaScript', 'Angular', 'HTML', 'CSS'], date: '2022-03-30' }
            // Add more projects as needed
        ]
    },
    computed: {
        reversedProjects: function() {
            return this.projects.slice().reverse();
        }
    },
    methods: {
        navigateToProject: function(link) {
            window.location.href = link;
        }
    },
    filters: {
        formatDate: function(value) {
            const date = new Date(value);
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        }
    }
});
