import {loadPage} from '@s-ui/react-initial-props'
import {IndexRoute, Route} from '@s-ui/react-router'

import contextFactory from './contextFactory.js'

const LoadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "HomePage" */ './pages/Home/index.js')
)

export default (
  <Route>
    <Route path="/">
      <IndexRoute getComponent={LoadHomePage} />
    </Route>
  </Route>
)
