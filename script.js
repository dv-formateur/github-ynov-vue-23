var githubNames = ["Killy85",  "Nair0fl",  "raphaelCharre", "mathiasLoiret", "thomaspich", "TeofiloJ", "Grigusky", "Dakistos", "mael61", "KevinPautonnier", "BenoitCochet", "sfongue", "ClementCaillaud", "gfourny", "Mokui", "LordInateur", "AntoineGOSSET", "etienneYnov", "Coblestone", "AlexDesvallees", "rudy8530", "benjaminbra", "mael61", "alixnzt"];

var repoAddress = "https://api.github.com/repos/";
var userAddress = "https://api.github.com/users/";
var repoName = "github-ynov-vue";


var vue = new Vue({
    el: '#app' ,
    methods: {

        getCommits: function(){
            for (user in githubNames){

                axios
                    .get(repoAddress+this.userSelected[user]+'/'+repoName+'/commits')
                    .then(function (response){
                        for (result in response){

                         }
                    });
            }
        },

        getGithubAccounts: function(){
            var users = [];

            var newAccount = {};

            for (user in this.userSelected){

                newAccount.name = this.userSelected[user];

                axios
                    .get(repoAddress+this.userSelected[user]+'/'+repoName+'/commits')
                    .then(function (response){

                        for (result in response){
                            //users.commit.append(result);
                        }

                    });

                users += newAccount;
            }
            this.githubAccounts = users;
            console.log(this.githubAccounts)
        }


    },
    data: {
        githubAccounts: [],
        usersName: githubNames,
        dateDebut: "",
        dateFin: "",
        userSelected: githubNames,

    }, created(){

        this.getGithubAccounts();

    }

});