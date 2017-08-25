export default {
  template: require('components/UIComponents/SidebarPlugin/MovingArrow.html'),
  data () {
    return {}
  },
  props: {
    moveY: {
      type: Number,
      default: 0
    }
  },
  computed: {
    /**
     * Styles to animate the arrow
     * @returns {{transform: string}}
     */
    arrowStyle () {
      return {
        transform: `translate3d(0px, ${this.moveY}px, 0px)`
      }
    }
  }
}
