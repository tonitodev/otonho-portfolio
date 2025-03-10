import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import Work from '../Work'
import Hobies from '../Hobies'
import About from '../About'
import Resume from '../Resume'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/work', element: <Work/>},
    { path: '/hobies', element: <Hobies/>},
    { path: '/about', element: <About/>},
    { path: '/resume', element: <Resume/>},
  ])

  return routes
}

const App = () => {
  
  return (
    
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  

  );
}


export default App
