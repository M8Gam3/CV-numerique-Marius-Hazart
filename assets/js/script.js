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
                    <a v-bind:href="link" target="_blank">
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
        home: true,
        portfolio: false,
        presentation: false,
        skills: false,
        presentationArticle: [
            {
                title: "La Manu",
                desc: "Actuellement en première année de formation a La Manu pour un Master dans les métiers du numériques. Apprentissage du JS, Vue.js, PHP, Python, MySQL, PAO, UX/I, HTML, CSS.",
            },
            {
                title: "Edouard Branly",
                desc: "Obtention d'un Bac STI2D option SIN mention bien dans le Lycée d'Edouard branly. Première année en générale option NSI pour finalement me réorienter vers la STI2D qui convenait mieux a mes attentes liés aux métiers du numériques.",
            },
            {
                title: "Novalys",
                desc: "Stage de troisième dans l'entreprise Novalys basée sur Amiens. Ayant été en contact tout du long avec des proffessionels travaillant sur HTML,CSS et PHP pour gérer et administrer le site de l'entreprise en le mettant à jour régulièrement",
            },
        ],
        portfolioProjets: [
            {
                title: "Shifumi version cyberpunk(JS)",
                image: "./assets/img/shifumi.png",
                button: "Lien du github",
                link: "https://github.com/MRCThomas/Projet-Shifumi",
            },
            {
                title: "District Noir(python)",
                image: "./assets/img/district-noir.png",
                button: "Lien du github",
                link: "https://github.com/M8Gam3/district-noir-python",
            },
            {
                title: "Instant Gaming remake(html/css)",
                image: "./assets/img/instant-gaming.png",
                button: "Lien du github",
                link: "https://github.com/MRCThomas/Projet-Shifumi",
            },
            {
                title: "Popchill(Vue.js/API)",
                image: "./assets/img/popchill.png",
                button: "Lien du github",
                link: "https://github.com/makake974/vuejs",
            },
            {
                title: "La caverne aux infos(php/xml)",
                image: "./assets/img/la-caverne-aux-infos.png",
                button: "Lien du github",
                link: "https://github.com/M8Gam3/La-Cavernes-Aux-Infos",
            },
            {
                title: "Blackjack(python)",
                image: "./assets/img/blackjack.png",
                button: "Lien du github",
                link: "https://github.com/M8Gam3/blackjack-python-",
            },
            {
                title: "Refonte de la gestion des utilisateurs (Pinel, Amiens)",
                image: "./assets/img/pinel.png",
                button: "Lien du rapport de stage",
                link: "https://docs.google.com/document/d/1Wb_nxQzDzcckgN0NPZOg5tkyx9mX5tYF-8GzdUR9w9o/edit?usp=sharing",
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