import EditProfileForm from './UserProfile/EditProfileForm'
import UserCard from './UserProfile/UserCard'
import MembersCard from './UserProfile/MembersCard'

export default {
  template: require('components/Dashboard/Views/UserProfile.html'),
  data () {
    return {}
  },
  components: {
    EditProfileForm,
    UserCard,
    MembersCard
  }
}
