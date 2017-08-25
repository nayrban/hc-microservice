export default {
  template: require('components/Dashboard/Layout/ContentFooter.html'),
  data () {
    return {}
  },
  computed: {
    year () {
      let d = new Date()
      return d.getFullYear()
    }
  }
}
