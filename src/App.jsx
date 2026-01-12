
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Project from './pages/Project'
import Navbar from './component/Navigtion/Navbar'
import FullSreenNav from './component/Navigtion/FullSreenNav'

const App = () => {

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <FullSreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Project />} />
      </Routes>
    </div>
  )
} 

export default App
