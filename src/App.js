
import Header from './components/Header'
import { Routes, Route } from "react-router-dom"
import Contacts from './components/Contacts'
import WhoAmI from './components/WhoAmI'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Blogs from './components/Blogs'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="contacts">
        <Contacts/>
      </div>
      
      <div className="main-container wrapper ">
        <Routes>
        <Route path="whoami" element={ <WhoAmI/> } />
        <Route path="/" element={ <WhoAmI/> } />
        <Route path="projects" element={ <Projects/> } />
        <Route path="resume" element={ <Resume/> } />
        <Route path="blogs" element={ <Blogs/> } />
        <Route path="*" element={ <PageNotFound/> } />
      </Routes>
      
     
        
      

      </div>
      
      
    </div>
  );
}

export default App;
