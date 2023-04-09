import Dashboard  from "./admin/dashboard/dashboard";
import Table from "./admin/dashboard/table/table";
import Request from './admin/dashboard/Request/Request';
import Users from './admin/dashboard/Users/Users'
import Leftnav from "./admin/dashboard/navbar1/leftnavbar";
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Leftnav />
      <Routes>
      <Route path="/dashboard1" element={<Dashboard />} />
      <Route path="/table" element={<Table />} />
      <Route path="/request" element={<Request />} />
      <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
