Vue.component('presentation-div', {
    template:   `<div class="presentation-article">
                    <h3> {{presentation_title}} </h3>
                    <p> {{presentation_text}} </p>
                </div>`,
    props: ['presentation_title', 'presentation_text'],
});

var app = new Vue({
    el: '#app',
    data: {
        home: false,
        portfolio: false,
        presentation: true,
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
        ]

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