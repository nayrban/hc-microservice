import PaperNotification from 'src/components/UIComponents/NotificationPlugin/Notification'

export default {
  template: require('components/Dashboard/Views/Notifications.html'),
  data () {
    return {
      type: ['', 'info', 'success', 'warning', 'danger'],
      notifications: {
        topCenter: false
      }
    }
  },
  components: {
    PaperNotification
  },
  methods: {
    notifyVue (verticalAlign, horizontalAlign) {
      var color = Math.floor((Math.random() * 4) + 1)
      this.$notifications.notify(
        {
          message: 'Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer.',
          icon: 'ti-gift',
          horizontalAlign: horizontalAlign,
          verticalAlign: verticalAlign,
          type: this.type[color]
        })
    }
  }
}
