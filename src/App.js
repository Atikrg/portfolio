
import './App.css';

import Home from './routes/Home/home.component';
import {Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Project from './routes/Projects/project.component';


function App() {
  return (

   <Routes>
      <Route index element={<Home/>} />
      <Route path="projects" element={<Project/>} />
    </Routes> 
  );
}

export default App;
