export default {
  template: require('components/UIComponents/PaperTable.html'),
  props: {
    columns: Array,
    data: Array,
    type: {
      type: String, // striped | hover
      default: 'striped'
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''

    }
  },
  computed: {
    tableClass () {
      return `table-${this.type}`
    }
  },
  methods: {
    hasValue (item, column) {
      return item[column.toLowerCase()] !== 'undefined'
    },
    itemValue (item, column) {
      return item[column.toLowerCase()]
    }
  }
}
