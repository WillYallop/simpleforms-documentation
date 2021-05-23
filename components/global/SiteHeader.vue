<template>
    <header class="headerCon">
        <div class="headerWrapper wrapper">
            <img class="siteLogo" src="@/assets/images/logo.png" alt="Simpleforms.js Logo">

            <button class="mobileNavBtn" v-on:click="$emit('show-nav')">NAV</button>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.headerCon {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    width: 100%;
    background-color: var(--background-1);
    border-bottom: 1px solid  var(--border);
    z-index: 1000;
}
.headerWrapper {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.siteLogo {
    height: 25px;
}

.mobileNavBtn {
    display: none;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    padding: 6px 20px;
    border: none;
    color: #FFF;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}
.mobileNavBtn:hover {
    background-color: rgba(255, 255, 255, 0.6);
}

@media only screen and (max-width: 900px) {
  .mobileNavBtn {display: flex;}
}
</style>