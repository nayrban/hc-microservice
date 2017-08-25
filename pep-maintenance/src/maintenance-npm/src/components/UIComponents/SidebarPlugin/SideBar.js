import MovingArrow from './MovingArrow'
import Logo from '../Logo'

export default {
  template: require('components/UIComponents/SidebarPlugin/SideBar.html'),
  props: {
    type: {
      type: String,
      default: 'sidebar',
      validator: (value) => {
        let acceptedValues = ['sidebar', 'navbar']
        return acceptedValues.indexOf(value) !== -1
      }
    },
    backgroundColor: {
      type: String,
      default: 'white',
      validator: (value) => {
        let acceptedValues = ['white', 'black', 'darkblue']
        return acceptedValues.indexOf(value) !== -1
      }
    },
    activeColor: {
      type: String,
      default: 'success',
      validator: (value) => {
        let acceptedValues = ['primary', 'info', 'success', 'warning', 'danger']
        return acceptedValues.indexOf(value) !== -1
      }
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    }
  },
  components: {
    MovingArrow,
    Logo
  },
  computed: {
    sidebarClasses () {
      if (this.type === 'sidebar') {
        return 'sidebar'
      } else {
        return 'collapse navbar-collapse off-canvas-sidebar'
      }
    },
    navClasses () {
      if (this.type === 'sidebar') {
        return 'nav'
      } else {
        return 'nav navbar-nav'
      }
    },
    /**
     * Styles to animate the arrow near the current active sidebar link
     * @returns {{transform: string}}
     */
    arrowMovePx () {
      return this.linkHeight * this.activeLinkIndex
    }
  },
  data () {
    return {
      linkHeight: 60,
      activeLinkIndex: 0,
      windowWidth: 0,
      isWindows: false,
      hasAutoHeight: false
    }
  },
  methods: {
    findActiveLink () {
      this.sidebarLinks.find((element, index) => {
        let found = element.path === this.$route.path
        if (found) {
          this.activeLinkIndex = index
        }
        return found
      })
    }
  },
  mounted () {
    this.findActiveLink()
  },
  watch: {
    $route: function (newRoute, oldRoute) {
      this.findActiveLink()
    }
  }
}
