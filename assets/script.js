Vue.component('presentation-div', {
    template:   `<div class="presentation-article">
                    <h3> {{presentation_title}} </h3>
                    <p class="presentation-desc"> {{presentation_text}} </p>
                </div>`,
    props: ['presentation_title', 'presentation_text'],
});
Vue.component('portfolio-div', {
    template:   `<div class="portfolio-projet">
                    <h3> {{title}} </h3>
                    <img v-bind:src="image" alt="">
                    <a v-bind:href="link"> 
                        <button> {{button}} </button>
                    </a>
                </div>`,
    props: ['title', 'image', 'button', 'link'],
});

var app = new Vue({
    el: '#app',
    data: {
        home: false,
        portfolio: true,
        presentation: false,
        skills: false,
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
    },
})


// {
//     name: 'css',
//     type:[
//         {
//             name: 'flex',
//             niveau: 4,
//         },
//         {
//             name: 'grid',
//             niveau: 1
//         }
//     ],
// },