import Notification from './Notification'

export default {
  template: require('components/UIComponents/NotificationPlugin/Notifications.html'),
  data () {
    return {
      notifications: this.$notifications.state
    }
  },
  components: {
    Notification
  },
  methods: {
    removeNotification (index) {
      this.$notifications.removeNotification(index)
    }
  }
}
