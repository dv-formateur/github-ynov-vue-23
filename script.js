var githubNames = ["Killy85",  "Nair0fl",  "raphaelCharre", "mathiasLoiret", "thomaspich", "TeofiloJ", "Grigusky", "Dakistos", "mael61", "KevinPautonnier", "BenoitCochet", "sfongue", "ClementCaillaud", "gfourny", "Mokui", "LordInateur", "AntoineGOSSET", "etienneYnov", "Coblestone", "AlexDesvallees", "rudy8530", "benjaminbra", "mael61", "alixnzt"];

var repoAddress = "https://api.github.com/repos/";
var userAddress = "https://api.github.com/users/";
var repoName = "github-ynov-vue";

var client_id ="74d5bc2e581ebb60dcc7";
var client_secret ="45de24cc6d2e2dfa6bdff1fc59a0af22e4409b4a";



var vue = new Vue({
    el: '#app',
    data: {
        names: githubNames,

    },

    methods: {
        getCommits: function(user){

            var value;

            axios
                .get(repoAddress + user + '/' + repoName + '/commits?client_id=' + client_id + '&client_secret=' + client_secret)
                .then(function (response) {
                    //console.log(response.data);
                    value = response.data;
                    console.log(value)
                });

            return "hello";

        }
    }, created(){

    }
    
});