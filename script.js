var githubNames = ["Killy85",  "Nair0fl",  "raphaelCharre", "mathiasLoiret", "thomaspich", "TeofiloJ", "Grigusky", "Dakistos", "mael61", "KevinPautonnier", "BenoitCochet", "sfongue", "ClementCaillaud", "gfourny", "Mokui", "LordInateur", "AntoineGOSSET", "etienneYnov", "Coblestone", "AlexDesvallees", "rudy8530", "benjaminbra", "mael61", "alixnzt"];


var repoAddress = "https://api.github.com/repos/";
var repos = ["github-ynov-vue", "gta-ynov-vue"];

var client_id ="0beaa261583901a5aa83";
var client_secret ="baff1c994b9a1c21432bcb0e5cd7635ebe445ed1";

var vm;

// Choix projet / Choix période / choix users


var vue = new Vue({
    el: '#app',
    data: {
        names: githubNames,
        usersSelected: [],
        startDate: "",
        endDate: "",
        repos: repos,
        repoSelected: repos[0]

    }, created(){

        this.getSelectedUsers();

    },

    methods: {

        getSelectedUsers: function() {

            this.names.forEach(this.getSelectedUser)
        },



        getSelectedUser: function(user) {

            vm = this;
                axios
                    .get(repoAddress +user + '/' + vm.repoSelected + '/commits?client_id=' + client_id + '&client_secret=' + client_secret)
                    .then(function (response) {

                        //console.log(nom)

                        vm.usersSelected.push({
                            name: user,
                            commit: response.data.concat()
                        });


                    });

        }
    }
});