export default {
  template: require('components/UIComponents/Tabs.html'),
  data: () => ({
    tabs: [],
    activeTabHash: '',
    nextEnabled: true,
    prevEnabled: false
  }),
  created () {
    // fill the array with the tabs
    this.tabs = this.$children
  },
  mounted () {
    window.addEventListener('hashchange', () => this.selectTab(window.location.hash))
    if (this.findTab(window.location.hash)) {
      this.selectTab(window.location.hash)
      return
    }
    if (this.tabs.length) {
      this.selectTab(this.tabs[0].hash)
    }
  },
  methods: {
    findTab (hash) {
      return this.tabs.find(tab => tab.hash === hash)
    },
    findTabIndex (hash) {
      return this.tabs.findIndex(tab => tab.hash === hash)
    },
    selectTab (selectedTabHash) {
      const selectedTab = this.findTab(selectedTabHash)
      if (!selectedTab) {
        return
      }
      this.tabs.forEach(tab => {
        tab.isActive = (tab.hash === selectedTab.hash)
      })
      this.$emit('changed', { tab: selectedTab })
      this.activeTabHash = selectedTab.hash
      this.handleControlsState(selectedTab)
    },
    handleControlsState (selectedTab) {
      let currentPosition = this.findTabIndex(selectedTab.hash)
      this.nextEnabled = currentPosition < this.tabs.length - 1
      this.prevEnabled = currentPosition > 0
    },
    next () {
      let currentPosition = this.findTabIndex(this.activeTabHash)
      if (currentPosition >= this.tabs.length - 1) {
        return
      }
      this.perfomControlsAction(currentPosition + 1)
    },
    prev () {
      let currentPosition = this.findTabIndex(this.activeTabHash)
      if (currentPosition <= 0) {
        return
      }
      this.perfomControlsAction(currentPosition - 1)
    },
    perfomControlsAction (positiion) {
      let nextTabHash = this.tabs[positiion].hash
      this.selectTab(nextTabHash)
    }
  }
}
