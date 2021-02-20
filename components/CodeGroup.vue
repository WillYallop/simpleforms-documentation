<template>
  <div class="code-group">
    <div class="btnCon">
      <button
        v-for="({ label }, i) in tabs"
        ref="tabs"
        :key="label"
        class=""
        :class="[activeTabIndex === i && 'active']"
        @click="updateTabs(i)"
      >{{ label }}</button>
      <span ref="highlight-underline" class="highlight-underline" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [],
      activeTabIndex: 0
    }
  },
  watch: {
    activeTabIndex (newValue, oldValue) {
      this.switchTab(newValue)
    }
  },
  mounted () {
    this.tabs = this.$slots.default.filter(slot => Boolean(slot.componentOptions)).map((slot) => {
      return {
        label: slot.componentOptions.propsData.label,
        elm: slot.elm
      }
    })
    this.$nextTick(this.updateHighlighteUnderlinePosition)
  },
  methods: {
    switchTab (i) {
      this.tabs.forEach((tab) => {
        tab.elm.classList.remove('active')
      })
      this.tabs[i].elm.classList.add('active')
    },
    updateTabs (i) {
      this.activeTabIndex = i
      this.updateHighlighteUnderlinePosition()
    },
    updateHighlighteUnderlinePosition () {
      const activeTab = this.$refs.tabs[this.activeTabIndex]
      if (!activeTab) {
        return
      }
      const highlightUnderline = this.$refs['highlight-underline']
      highlightUnderline.style.left = `${activeTab.offsetLeft}px`
      highlightUnderline.style.width = `${activeTab.clientWidth}px`
    }
  }
}
</script>

<style scoped>
.btnCon {
  background-color: #25283E;
  border-radius: 10px 10px 0 0;
  padding: 0 10px;
  position: relative;
  border-bottom: 2px solid #414460;
}
button {
  outline: none;
  padding: 15px 10px;
  background-color: transparent;
  color: var(--body-text);
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}
.highlight-underline {
  height: 1px;
  position: absolute;
  background: linear-gradient(328deg, var(--accent-1) 0%, var(--accent-2) 100%);
  bottom: -2px;
  height: 2px;
  transition: left 150ms, width 150ms;
}
</style>

<style>
.code-group pre {
  border-radius: 0 0 10px 10px;
}
</style>