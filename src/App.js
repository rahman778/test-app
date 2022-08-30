import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "./custom.scss";
import Layout from "./pages/Layout";
import TeamsPage from "./pages/TeamsPage";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="compaigns" element={ <h5>Compaigns</h5> } />
               <Route path="teams" element={<TeamsPage />} />
               <Route path="contacts" element={ <h5>Contacts</h5> } />
               <Route path="reports" element={ <h5>Reports</h5> } />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
