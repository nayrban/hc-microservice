import Tab from 'components/UIComponents/Tab'
import Tabs from 'components//UIComponents/Tabs'

const apiURL = 'https://api.github.com/repos/nayrban/Nas/commits?per_page=3&sha='
const nasBranchesURL = 'https://api.github.com/repos/nayrban/Nas/branches?per_page=3&sha='
const productsURL = 'http://127.0.0.1:8083/products-microservice/resources/products'

export default {
  template: require('components/Dashboard/Views/Tabs-Component.html'),
  data: () => ({
    branches: null,
    currentBranch: '',
    commits: null,
    products: ''
  }),
  components: {
    Tab,
    Tabs
  },
  watch: {
    currentBranch: 'fetchData'
  },
  created () {
    this.fetchBranches()
    this.fetchProducts()
  },
  methods: {
    fetchBranches () {
      let xhr = new XMLHttpRequest()
      let self = this
      xhr.open('GET', nasBranchesURL)
      xhr.onload = function () {
        self.branches = JSON.parse(xhr.responseText)
        if (self.branches.length) {
          self.currentBranch = self.branches[0].name
          self.fetchData()
        }
      }
      xhr.send()
    },
    fetchData () {
      let xhr = new XMLHttpRequest()
      let self = this
      xhr.open('GET', apiURL + self.currentBranch)
      xhr.onload = function () {
        self.commits = JSON.parse(xhr.responseText)
      }
      xhr.send()
    },
    fetchProducts () {
      let xhr = new XMLHttpRequest()
      let self = this
      xhr.open('GET', productsURL)
      xhr.onload = function () {
        self.products = xhr.responseText
      }
      xhr.send()
    }
  }
}
