import TopNavbar from './TopNavbar'
import ContentFooter from './ContentFooter'
import DashboardContent from './Content'

export default {
  template: require('components/Dashboard/Layout/DashboardLayout.html'),
  data () {
    return {}
  },
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent
  },
  methods: {
    toggleSidebar () {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    }
  }
}
