export default {
  template: require('components/Dashboard/Views/UserProfile/EditProfileForm.html'),
  data () {
    return {
      user: {
        company: 'Paper Dashboard',
        username: 'michael23',
        email: '',
        lastName: 'Faker',
        address: 'Melbourne, Australia',
        city: 'melbourne',
        postalCode: '',
        aboutMe: `Oh so, your weak rhyme. You doubt I'll bother, reading into it.I'll probably won't, left to my own devicesBut that's the difference in our opinions.`
      }
    }
  },
  methods: {
    updateProfile () {
      alert('Your data: ' + JSON.stringify(this.user))
    }
  }
}
