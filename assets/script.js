Vue.component('presentation-div', {
    template:   `<div class="presentation-article">
                    <h3> {{presentation_title}} </h3>
                    <p class="presentation-desc"> {{presentation_text}} </p>
                </div>`,
    props: ['presentation_title', 'presentation_text'],
});

Vue.component('portfolio-div', {
    template:   `<div class="portfolio-projet">
                    <h4> {{title}} </h4>
                    <img class="portfolio-img" v-bind:src="image" v-bind:alt="title">
                    <a v-bind:href="link"> 
                        <button> {{button}} </button>
                    </a>
                </div>`,
    props: ['title', 'image', 'button', 'link'],
});

Vue.component('object-category-skills', {
    template:   `<div class="skill-object">
                    <h4> {{name}} </h4>
                    <progress v-bind:class="progresscolor(level)" id="file" max="100" v-bind:value="level * 20"></progress>
                </div>`,
    props: ['level', 'name', 'progresscolor'],
});

var app = new Vue({
    el: '#app',
    data: {
        home: false,
        portfolio: false,
        presentation: false,
        skills: true,
        presentationArticle: [
            {
                title: "La Manu",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur ut ex eget efficitur. Cras odio nisi, venenatis auctor imperdiet non, efficitur ac enim. Donec aliquet feugiat eleifend.",
            },
            {
                title: "Edouard Branly",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur ut ex eget efficitur. Cras odio nisi, venenatis auctor imperdiet non, efficitur ac enim. Donec aliquet feugiat eleifend.",
            },
            {
                title: "Novalis",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur ut ex eget efficitur. Cras odio nisi, venenatis auctor imperdiet non, efficitur ac enim. Donec aliquet feugiat eleifend.",
            },
        ],
        portfolioProjets: [
            {
                title: "Projet Shifumi",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
                button: "Lien du site",
                link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
            },
            {
                title: "Projet Restaurant",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
                button: "Lien du site",
                link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
            },
            {
                title: "Projet Instant Gaming",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
                button: "Lien du site",
                link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
            },
            {
                title: "Projet CV",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
                button: "Lien du Figma",
                link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
            },
        ],
        skillsList : {
            Languages: [
                {
                    name: 'HTML',
                    level: 3,
                    more:[
                        
                    ],
                },
                {
                    name: 'CSS',
                    level: 2,
                    more:[
                        {
                            name: 'flex',
                            level: 3,
                        },
                        {
                            name: 'grid',
                            level: 1
                        },
                        {
                            name: 'reponsive',
                            level: 2
                        },
                    ],
                },
                {
                    name: 'Python',
                    level: 4,
                    more:[
                        {
                            name: 'optimisation',
                            level: 4,
                        },
                    ],
                },
                {
                    name: 'JavaScript',
                    level: 4,
                    more:[
                        {
                            name: 'optimisation',
                            level: 4,
                        },
                        {
                            name: 'local storage',
                            level: 3,
                        },
                    ],
                },
                {
                    name: 'PHP',
                    level: 3.5,
                    more:[
                        {
                            name: 'procédural',
                            level: 4,
                        },
                        {
                            name: 'optimisation',
                            level: 3,
                        },
                        {
                            name: 'GET/POST',
                            level: 2,
                        },
                    ],
                },
                {
                    name: 'mySQl',
                    level: 3,
                    more:[
                        {
                            name: 'SELECT',
                            level: '3',
                        },
                    ],
                },
            ],
            framework: [
                {
                    name: 'Vue.js',
                    level: 4,
                    more:[
                        {
                            name: 'optimisation',
                            level: 3,
                        },
                        {
                            name: 'templates',
                            level: 4,
                        },
                    ],
                },
                {
                    name: 'Bootstrap',
                    level: 3,
                    more:[
                        {
                            name: 'style',
                            level: 3,
                        },
                    ],
                },
            ],
            design: [
                {
                    name: 'Figma',
                    level: 2,
                    more:[
                        {
                            name: 'UI',
                            level: 1,
                        },
                        {
                            name: 'UX',
                            level: 2,
                        },
                        {
                            name: 'maquettage',
                            level: 3,
                        },
                    ],
                },
                {
                    name: 'Adobe XD',
                    level: 1,
                    more:[
                        {
                            name: 'UI',
                            level: 1,
                        },
                        {
                            name: 'UX',
                            level: 2,
                        },
                        {
                            name: 'maquettage',
                            level: 2,
                        },
                    ],
                },
                {
                    name: 'Photoshop',
                    level: 1,
                    more:[
                        {
                            name: 'UI',
                            level: 1,
                        },
                        {
                            name: 'UX',
                            level: 2,
                        },
                        {
                            name: 'modification d\'images',
                            level: 1,
                        },
                    ],
                },
                {
                    name: 'Adobe Illustrator',
                    level: 1,
                    more:[
                        {
                            name: 'création de logo',
                            level: 1,
                        },
                        {
                            name: 'création de bannière',
                            level: 1,
                        },
                        {
                            name: 'illustration',
                            level: 1,
                        },
                    ],
                },
            ],
            Autre: [
                {
                    name: 'Git',
                    level: 3,
                    more:[
                        {
                            name: 'Serveur GitHub',
                            level: 4,
                        },
                        {
                            name: 'Desktop',
                            level: 4,
                        },
                        {
                            name: 'Console',
                            level: 1,
                        },
                        {
                            name: 'Versionning',
                            level: 3,
                        },
                        {
                            name: 'Branch',
                            level: 3,
                        },
                    ],
                },
                {
                    name: 'Trello',
                    level: 3,
                    more:[
                        {
                            name: 'Lecture',
                            level: '5',
                        },
                        {
                            name: 'Gestion',
                            level: '2',
                        },
                    ],
                },
                {
                    name: 'XML',
                    level: 3,
                    more:[
                        {
                            name: 'RSS',
                            level: 1,
                        },
                    ],
                },
            ],
        },

    },
    computed: {

    },
    methods: {
        navHome: function () {
            this.home = true;
            this.portfolio = false;
            this.presentation = false;
            this.skills = false;
        },
        navPortfolio: function () {
            this.home = false;
            this.portfolio = true;
            this.presentation = false;
            this.skills = false;
        },
        navPresentation: function () {
            this.home = false;
            this.portfolio = false;
            this.presentation = true;
            this.skills = false;
        },
        navSkills: function () {
            this.home = false;
            this.portfolio = false;
            this.presentation = false;
            this.skills = true;
        },
        progressColor: function (level) {
            if (level <= 1) {
                return "progress-red";
            } else if (level <= 2) {
                return "progress-orange";
            } else if (level <= 3) {
                return "progress-yellow";
            } else if (level <= 4) {
                return "progress-green";
            } else if (level <= 5) {
                return "progress-succes";
            }
            // switch (level) {
            //     case 1:
            //         return "progress-red";
            //     case 2:
            //         return "progress-orange";
            //     case 3:
            //         return "progress-yellow";
            //     case 4:
            //         return "progress-green";
            //     case 5:
            //         return "progress-succes";
            // };
        },
    },
})