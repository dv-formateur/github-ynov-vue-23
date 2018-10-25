var vue = new Vue({
    el: '#app' ,
    methods: {
        getUserCommit: function (userName){
            var result;
            axios
                .get('https://api.github.com/users/'+userName+'/github-ynov-vue/commits/master')
                .then(response => (result = response.data));

            return result
        }
    },
    data() {
        return {
            info: null,
            githubInfos: [
                { name: "Killy85", commit: getUserCommit("Killy85")},
                { name: "Nair0fl", commit: getUserCommit("Nair0fl") },
                { name: "raphaelCharre", commit: getUserCommit("raphaelCharre") },
                { name: "mathiasLoiret", commit: getUserCommit("mathiasLoiret") },
                { name: "thomaspich", commit: getUserCommit("thomaspich") },
                { name: "TeofiloJ", commit: getUserCommit("TeofiloJ") },
                { name: "Grigusky", commit: getUserCommit("Grigusky") },
                { name: "Dakistos", commit: getUserCommit("Dakistos") },
                { name: "mael61", commit: getUserCommit("mael61") },
                { name: "KevinPautonnier", commit: getUserCommit("KevinPautonnier") },
                { name: "BenoitCochet", commit: getUserCommit("BenoitCochet") },
                { name: "sfongue", commit: getUserCommit("sfongue") },
                { name: "ClementCaillaud", commit: getUserCommit("ClementCaillaud") },
                { name: "gfourny", commit: getUserCommit("gfourny") },
                { name: "Mokui", commit: getUserCommit("Mokui") },
                { name: "LordInateur", commit: getUserCommit("LordInateur") },
                { name: "AntoineGOSSET", commit: getUserCommit("AntoineGOSSET") },
                { name: "etienneYnov", commit: getUserCommit("etienneYnov") },
                { name: "Coblestone", commit: getUserCommit("Coblestone") },
                { name: "AlexDesvallees", commit: getUserCommit("AlexDesvallees") },
                { name: "rudy8530", commit: getUserCommit("rudy8530") },
                { name: "benjaminbra", commit: getUserCommit("benjaminbra") },
                { name: "mael61", commit: getUserCommit("mael61") },
                { name: "alixnzt", commit: getUserCommit("alixnzt") },
            ],

        }
    },
    created () {


    }
});