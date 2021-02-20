<template>
  <div class="siteCon">

    <SiteHeader/>
    
    <div class="pageCon">
      <div class="wrapper">
        <div class="navigationCon">
          <SiteNavigation/>
        </div>
        <div class="pageContent">
          <Nuxt />
        </div>
      </div>
    </div>
    
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

html {

  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  background-color: var(--background-1);
  font-family: 'Lato', sans-serif;
}

button:focus {outline: none;}
input:focus {outline: none;}
textarea:focus {outline: none;}
select:focus {outline: none;}
textarea {font-family: 'Lato', sans-serif !important;}
::selection {background-color: var(--accent-1); color: #FFF;}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --background-1 : #1A1C2C;
  --background-2: #2D3046;

  --border: #312F48;

  --accent-1: #9854FF;
  --accent-1-light: #b07cff;
  --accent-2: #5A50FF;

  --title-text: #FFFFFF;
  --unhighlighted: #919FB0;
  --body-text: #e2e8f0;
}

.pageCon {
  padding: 60px 0 0;
}
.wrapper {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.pageCon .wrapper {
  display: flex;
}
.navigationCon {
  width: 250px;
  border-right: 1px solid var(--border);
} 
.pageContent {
  width: calc(100% - 250px);
  min-height: calc(100vh - 60px);
  padding: 30px;
  border-right: 1px solid var(--border);
}

p {color: var(--body-text);}
h1 {color: var(--title-text); font-size: 34px;}
h2 {color: var(--title-text);}
h3 {color: var(--title-text);}
h4 {color: var(--title-text);}
a {color: var(--accent-1-light);}

.nuxt-content-container h1 {margin-bottom: 20px;}
.nuxt-content-container h2 {margin-bottom: 8px; border-bottom: 1px solid var(--border);padding-bottom: 8px;margin-top: 15px;}
.nuxt-content-container p {margin-bottom: 10px;}
.nuxt-content-container ul {
  padding: 0;
}
.nuxt-content h2:before, .nuxt-content h3:before {
    display: block;
    content: " ";
    margin-top: -80px;
    height: 80px;
    visibility: hidden;
    pointer-events: none;
}
.nuxt-content-container ul li {
  list-style-type: none;
  color: var(--body-text);
  padding: 5px 0;
  font-size: 16px;
}

pre {
  background-color: var(--background-2) !important;
  text-shadow: none !important;
  color: #FFF !important;
  border-radius: 10px;
  margin-top: 0 !important;
  margin-bottom: 20px !important;
}
pre code::selection {
  background-color: var(--accent-1) !important; 
  color: #FFF !important;
}
.token::selection {
  background-color: var(--accent-1) !important; 
  color: #FFF !important;
}

.token.function, .token.class-name {color: #FF415B;}
.token.atrule, .token.attr-value, .token.keyword  {color: #05A5E8;}
.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted  {color: #96D518;}
.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string  {background-color: var(--background-2);color: #D9CECE;}
.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted {color: #FF1798;}


/* Forms */
.formCon {
  width: 100%;
  background-color: #FFF;
  padding: 20px;
  border-radius: 10px;
} 
.formCon label {
  padding: 0 5px;
  font-size: 14px;
}
.inputStyle {
  height: 40px;
  width: 100%;
  border-radius: 5px;
  background-color: #F9F9F9;
  border: 1px solid #E1E1E1;
  margin: 5px 0 10px;
  padding: 0 10px;
  font-size: 16px;
} 
.inputStyle.inpError {
  border: 1px solid red;
}
.inputWrapper {
  position: relative;
} 
.textareaStyle {
  height: 150px;
  width: 100%;
  border-radius: 5px;
  background-color: #F9F9F9;
  border: 1px solid #E1E1E1;
  margin: 5px 0 0;
  padding: 10px;
  font-size: 16px;
  resize: none;
} 
.textareaStyle.inpError {
  border: 1px solid red;
}
.submitBtn {
  background: linear-gradient(328deg, var(--accent-1) 0%, var(--accent-2) 100%);
  border-radius: 20px;
  padding: 10px 40px;
  margin-top: 15px;
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}
.submitBtn:hover {
  transform: scale(1.1);
}

/* Results */
.resultsContainer {
    background-color: var(--background-2);
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    display: none;
}
.resultsContainer.active {
    display: block;
}
.verificationPassedP {
    color: var(--title-text);
    padding: 0 10px;
}
.verificationPassedP span {
    font-weight: bold;
    color: var(--accent-1-light);
}
.jsonCon {
    background-color: var(--background-1);
    padding: 10px;
    border-radius: 10px;
}
.jsonCon p {
    color: var(--body-text);
    margin-bottom: 0 !important;
}
</style>
