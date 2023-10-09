import { Fragment } from 'react'
import './App.css'
import Navbar from './compoments/Navbar'
import AddButton from './compoments/AddButton'
import SearchPage from './pages/SearchPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Fragment>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/detail/:id' element={<DetailPage />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  )
}

export default App
