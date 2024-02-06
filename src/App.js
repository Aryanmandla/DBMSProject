import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import RegisterFIR from './screens/RegisterFIR';
import DataTable from './screens/UpdateFIR';
import DeleteFIR from './screens/DeleteFIR';
import UpdateCriminalDb from './screens/UpdateCriminalDb';
import RetrieveCriminalRecord from './screens/RetrieveCriminalRecord';
import AddCriminal from './screens/AddCriminal';
import './Css/Component.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomeScreen />} />
        <Route exact path='/register-fir' element={<RegisterFIR />} />
        <Route exact path='/update-fir' element={<DataTable />} />
        <Route exact path='/delete-fir' element={<DeleteFIR />} />
        <Route exact path='update-criminal-record' element={<UpdateCriminalDb />} />
        <Route exact path='retrieve-criminal-record' element={<RetrieveCriminalRecord />} />
        <Route exact path='add-criminal' element={<AddCriminal />} />
      </Routes>
    </Router>
  );
}

export default App;
