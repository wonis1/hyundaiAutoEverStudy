
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import NotFound from './pages/NotFound'
import PostNew from './pages/PostNew'

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/post/new' element={<PostNew />}/>
          <Route path='/post/:id' element={<PostDetail />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
