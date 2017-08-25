export default {
  template: require('components/UIComponents/NotificationPlugin/Notification.html'),
  name: 'notification',
  props: {
    message: String,
    icon: String,
    verticalAlign: {
      type: String,
      default: 'top'
    },
    horizontalAlign: {
      type: String,
      default: 'center'
    },
    type: {
      type: String,
      default: 'info'
    },
    timeout: {
      type: Number,
      default: 5000
    }
  },
  data () {
    return {}
  },
  computed: {
    hasIcon () {
      return this.icon && this.icon.length > 0
    },
    alertType () {
      return `alert-${this.type}`
    },
    customPosition () {
      let initialMargin = 20
      let alertHeight = 90
      let sameAlertsCount = this.$notifications.state.filter((alert) => {
        return alert.horizontalAlign === this.horizontalAlign && alert.verticalAlign === this.verticalAlign
      }).length
      let pixels = (sameAlertsCount - 1) * alertHeight + initialMargin
      let styles = {}
      if (this.verticalAlign === 'top') {
        styles.top = `${pixels}px`
      } else {
        styles.bottom = `${pixels}px`
      }
      return styles
    }
  },
  methods: {
    close () {
      this.$emit('on-close')
    }
  },
  mounted () {
    if (this.timeout) {
      setTimeout(this.close, this.timeout)
    }
  }
}
