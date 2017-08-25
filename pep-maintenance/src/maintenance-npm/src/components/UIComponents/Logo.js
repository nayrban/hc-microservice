export default {
  template: require('components/UIComponents/Logo.html'),
  props: {
    height: {
      type: String,
      default: '43'
    },
    alignRight: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    useRightAlignment: function () {
      return (this.alignRight === null || this.alignRight === false)
    }
  }
}
