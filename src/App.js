import { BrowserRouter,  Routes,  Route,  Link} from 'react-router-dom';
import Create from './components/create'
import Read from './components/read'
import Update from './components/update';
import './App.css'
function App() {
  return (
    <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
      
      <div>
        <BrowserRouter>
              
          <Routes>
            <Route path="create" element={<Create/>}></Route>
            <Route path="read" element={<Read/>}></Route>
            <Route path="Update" element={<Update/>}></Route>
                     
          </Routes>
        </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;
