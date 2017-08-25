export default {
  template: require('components/Dashboard/Views/UserProfile/MembersCard.html'),
  data () {
    return {
      title: 'Team members',
      members: [
        {
          image: 'static/img/faces/face-0.jpg',
          name: 'Dj Khaled',
          status: 'Offline'
        },
        {
          image: 'static/img/faces/face-1.jpg',
          name: 'Creative Tim',
          status: 'Available'
        },
        {
          image: 'static/img/faces/face-1.jpg',
          name: 'Flume',
          status: 'Busy'
        }
      ]
    }
  },
  methods: {
    getStatusClass (status) {
      switch (status) {
        case 'Offline':
          return 'text-muted'
        case 'Available':
          return 'text-success'
        case 'Busy':
          return 'text-danger'
        default:
          return 'text-success'
      }
    }
  }
}
