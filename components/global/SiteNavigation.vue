<template>
    <nav class="navCon">
        <ul class="navWrapper">

            <li class="sectLi">
                <p class="sectionTitleP">GENERAL</p>
                <ul>
                    <li><nuxt-link to="/">Introduction</nuxt-link></li>
                </ul>
            </li>
            <li  class="sectLi">
                <p class="sectionTitleP">GUIDE</p>
                <ul>
                    <li><nuxt-link to="/guide/setup">Setup</nuxt-link></li>
                    <li><nuxt-link to="/guide/validation-methods">Validation Methods</nuxt-link></li>
                    <li><nuxt-link to="/guide/config">Config</nuxt-link></li>
                    <li><nuxt-link to="/guide/functions">Function</nuxt-link></li>
                </ul>
            </li>
            <li  class="sectLi">
                <p class="sectionTitleP">DEMOS</p>
                <ul>
                    <li><nuxt-link to="/demo/counter">Textarea Counter</nuxt-link></li>
                    <li><nuxt-link to="/demo/show-password">Show Password</nuxt-link></li>
                    <li><nuxt-link to="/demo/password-strength">Password Strength</nuxt-link></li>
                    <li><nuxt-link to="/demo/custom-validation">Custom Validation</nuxt-link></li>
                </ul>
            </li>
        </ul>

    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navCon {
    width: 100%;
    position: sticky;
    top: 60px;
}
.navWrapper {
    list-style-type: none;
    padding: 30px 30px 0 0;
}
.sectLi {
    margin-bottom: 15px;
}
.sectionTitleP {
    color: var(--unhighlighted);
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
}
.navWrapper li ul {
    list-style-type: none;
    padding: 0;
}
.navWrapper li ul li a {
    padding: 5px;
    font-size: 16px;
    color: var(--title-text);
    text-decoration: none;
    display: block;
    border-radius: 5px;
}
.navWrapper li ul li a:hover {
    color: var(--accent-1-light);
}
.nuxt-link-exact-active {
    background: var(--accent-1);
    background: linear-gradient(328deg, var(--accent-1) 0%, var(--accent-2) 100%);
}
.nuxt-link-exact-active:hover {
    color: #FFF !important;
}
</style>