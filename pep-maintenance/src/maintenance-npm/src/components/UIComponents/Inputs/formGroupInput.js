export default {
  template: require('components/UIComponents/Inputs/formGroupInput.html'),
  data () {
    return {}
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: String,
    name: String,
    disabled: Boolean,
    placeholder: String,
    value: [String, Number]
  }
}
