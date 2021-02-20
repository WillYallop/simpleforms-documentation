<template>
    <div>
        <nuxt-content :document="passStrengthDemo"/>
    </div>
</template>

<script>
import simpleForms from 'simpleforms.js';

export default {
    async asyncData({ $content }) {
        const passStrengthDemo = await $content('/demo/password-strength').fetch()
        return { passStrengthDemo }
    },
    mounted() {
        let myForm = document.getElementById("psForm");

        const passStrengthForm = new simpleForms(myForm, {
            errorClass: "inpError",
            escapeValues: false,
            useStrengthIndicator: true
        });

        myForm.addEventListener( "submit", function(event) {
            event.preventDefault();
            
            passStrengthForm.submit()
            .then((response) => {
                document.getElementById("cResultsCon").classList.add("active");
                document.getElementById("cResultsP").innerText = JSON.stringify(response);
                document.getElementById("cVerificationPassed").innerText = "true";
            })
            .catch((error) => {
                document.getElementById("cResultsCon").classList.add("active");
                document.getElementById("cResultsP").innerText = JSON.stringify(error);
                document.getElementById("cVerificationPassed").innerText = "false";
            });
        });
    }
}
</script>

<style>

.strengthCon {
    background-color: #DBDBDB;
    height: 5px;
    width: 100%;
    border-radius: 10px;
    margin: -5px 0 0;
    overflow: hidden;
    display: flex;
} 
.strenthCol {
    height: 5px;
    width: 33.33%;
}

.weak .weakCol {background-color: red;} 
.medium .weakCol {background-color: orange;} 
.strong .weakCol {background-color: green;} 

.medium .mediumCol {background-color: orange;} 
.strong .mediumCol {background-color: green;} 

.strong .strongCol {background-color: green;} 
</style>
