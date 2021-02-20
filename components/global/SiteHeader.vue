<template>
    <header class="headerCon">
        <div class="headerWrapper wrapper">
            <img class="siteLogo" src="@/assets/images/logo.png" alt="Simpleforms.js Logo">
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
    align-items: center;
}
.siteLogo {
    height: 25px;
}
</style>