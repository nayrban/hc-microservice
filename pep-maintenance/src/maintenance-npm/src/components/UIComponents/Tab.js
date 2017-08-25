export default {
  template: require('components/UIComponents/Tab.html'),
  props: {
    id: {default: null},
    name: {required: true},
    prefix: {default: ''},
    suffix: {default: ''}
  },
  data: () => ({
    isActive: false
  }),
  computed: {
    header () {
      return this.prefix + this.name + this.suffix
    },
    hash () {
      let value = Math.random()
      return this.id ? '#' + this.id + value : '#' + this.name.toLowerCase().replace(/ /g, '-') + value
    }
  }
}
