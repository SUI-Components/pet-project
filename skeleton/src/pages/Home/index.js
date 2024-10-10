import {useContext} from 'react'

import Context from '@s-ui/react-context'

function HomePage() {
  const {domain} = useContext(Context)

  console.log('domain', domain) // eslint-disable-line no-console
  console.log('domain config', domain.get('config')) // eslint-disable-line no-console

  return (
    <>
      <h1>Welcome to Adevinta! 👋</h1>
    </>
  )
}

HomePage.displayName = 'HomePage'

export default HomePage
