import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview'
import UserProfile from 'src/components/Dashboard/Views/UserProfile'
import Notifications from 'src/components/Dashboard/Views/Notifications'
import Icons from 'src/components/Dashboard/Views/Icons'
import Maps from 'src/components/Dashboard/Views/Maps'
import Typography from 'src/components/Dashboard/Views/Typography'
import TableList from 'src/components/Dashboard/Views/TableList'
import TabsComponents from 'src/components/Dashboard/Views/Tabs-Component'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'stats',
        name: 'stats',
        component: UserProfile
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      },
      {
        path: 'tabs-component',
        name: 'tabs-component',
        component: TabsComponents
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
