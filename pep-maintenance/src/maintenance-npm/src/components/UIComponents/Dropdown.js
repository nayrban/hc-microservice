export default {
  template: require('components/UIComponents/Dropdown.html'),
  props: {
    title: String,
    icon: String
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleDropDown () {
      this.isOpen = !this.isOpen
    },
    closeDropDown () {
      this.isOpen = false
    }
  }
}
