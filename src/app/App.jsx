import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import Providers from './Providers'

const App = () => {
    return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
    )
}

export default App