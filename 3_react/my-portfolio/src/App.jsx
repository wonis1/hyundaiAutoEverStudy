import './App.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div className="App">
      <Header
        name="정재원"
        title="프론트엔드 개발자"
        intro="사용자 경험을 중시하는 개발자입니다." 
        profileImage="/vite.svg"
        />

      <About
        description="안녕하세요, 저는 정재원입니다. 사용자 경험을 중시하는 프론트엔드 개발자입니다." />

      <Skills/>

      <Footer 
        email="jungjaewon@example.com"
        github="github.com/jungjaewon" 
      />

    </div>
  )
}

export default App;
