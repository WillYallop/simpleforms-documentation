<template>
    <div>
        <nuxt-content :document="showPasswordDemo"/>
    </div>
</template>

<script>
import simpleForms from 'simpleforms.js';

export default {
    async asyncData({ $content }) {
        const showPasswordDemo = await $content('/demo/show-password').fetch()
        return { showPasswordDemo }
    },
    mounted() {
        let myForm = document.getElementById("spForm");

        const showPasswordForm = new simpleForms(myForm, {
            errorClass: "inpError",
            escapeValues: false,
            useTogglePassword: true
        });

        myForm.addEventListener( "submit", function(event) {
            event.preventDefault();
            
            showPasswordForm.submit()
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
.passwordInp {
    padding-right: 50px;
}
.togglePasswordBtn {
    position: absolute;
    right: 0;
    height: 40px;
    width: 40px;
    bottom: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
.togglePasswordBtn img {
    width: 20px;
}
.closedEyeImg {display: none;}
.visible .openEyeImg {display: none;}
.visible .closedEyeImg {display: inline-block;}
</style>
