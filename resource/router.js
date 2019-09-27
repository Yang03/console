import Loadable from 'react-loadable'
import Loading from './components/loading/index.jsx'
 
const routes = [
    {
        path: '/login',
        component: Loadable({
            loader: () => import('./page/login/index.jsx'),
            loading: Loading
        })
    },
    {
        path: '/register',
        component: Loadable({
            loader: () => import('./page/register/index.jsx'),
            loading: Loading
        })
    }
]

export default routes