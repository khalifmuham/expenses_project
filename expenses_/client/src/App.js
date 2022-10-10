import './App.css';
import {Routes, Route} from "react-router-dom"
import Dashboard from './views/Dashboard';
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import EditPage from './views/EditPage';

function App() {
  return (
    <div className="App">
      <h1 className="title" >€xpen$e$ </h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/expenses/new" element={<CreatePage />} />
        <Route path="/details/:id" element={< DetailsPage/>} />
        <Route path="/expenses/edit/:id" element={<EditPage />} />

      </Routes>
    </div>
  );
}

export default App;
