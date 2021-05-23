<template>
    <div>
        <nuxt-content :document="counterDemo"/>
    </div>
</template>

<script>
import simpleForms from 'simpleforms.js';

export default {
    async asyncData({ $content }) {
        const counterDemo = await $content('/demo/textarea-counter').fetch()
        return { counterDemo }
    },
    mounted() {
        let myForm = document.getElementById("counterForm");

        const counterForm = new simpleForms(myForm, {
            errorClass: "inpError",
            escapeValues: false,
            useMessageCount: true
        });

        myForm.addEventListener( "submit", function(event) {
            event.preventDefault();
            
            counterForm.submit()
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
