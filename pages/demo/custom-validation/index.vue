<template>
    <div>
        <nuxt-content :document="customValDemo"/>
    </div>
</template>

<script>
import simpleForms from 'simpleforms.js';

export default {
    async asyncData({ $content }) {
        const customValDemo = await $content('demo/custom-validation').fetch()
        return { customValDemo }
    },
    mounted() {
        let myForm = document.getElementById("customValFrom");

        const customValFrom = new simpleForms(myForm, {
            methods: {
                custom_sf: {
                    active: true,
                    regex: /^[?]+(?:-[?]+)*$/,
                    min: 4,
                    max: 4
                }
            },
            errorClass: "inpError",
            escapeValues: false
        });

        myForm.addEventListener( "submit", function(event) {
            event.preventDefault();
            
            customValFrom.submit()
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
.messageCountCon {
    position: absolute;
    bottom: 15px;
    padding: 5px 10px;
    border-radius: 10px;
    right: 10px;
    background: linear-gradient(328deg, var(--accent-1) 0%, var(--accent-2) 100%);
    color: #FFF;
    font-weight: bold;
    font-size: 14px;
}
.messageCountCon.error {
    background: red;
}
</style>
