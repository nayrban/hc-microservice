export default {
  template: require('components/Dashboard/Views/UserProfile/UserCard.html'),
  data () {
    return {
      details: [
        {
          title: '12',
          subTitle: 'Files'
        },
        {
          title: '2GB',
          subTitle: 'Used'
        },
        {
          title: '24,6$',
          subTitle: 'Spent'
        }
      ]
    }
  },
  methods: {
    getClasses (index) {
      var remainder = index % 3
      if (remainder === 0) {
        return 'col-md-3 col-md-offset-1'
      } else if (remainder === 2) {
        return 'col-md-4'
      } else {
        return 'col-md-3'
      }
    }
  }
}
