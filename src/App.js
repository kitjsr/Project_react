

import "./App.css";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register";
import Login from "./Login";
import Invoice from "./Invoice";
import Additem from "./Additem";
import Stock from "./Stock";
// import Sidebar from './Sidebar';
import Sidebar from "./Sidebar";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";

import { Route, Routes } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Party from "./Party";
import Profile from "./Profile";
import ViewProfile from "./ViewProfile";
import Service from "./Service";
import SingleInvoice from "./SingleInvoice";
import { Anuu } from "./Anuu";
import MyDocument from "./MyDocument";

function App() {
  return (
    <div>
      {/* <div className='App'> */}
      {/* <Sidebar/> */}
      {/* </div> */}
      {/* <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/invoice">Invoice</Link></li>
        <li><Link to="/additem">Item</Link></li>
      </ul> */}

      <Container>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col>
            <Routes>
              <Route path=" " element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/item" element={<Item />} />
              <Route path="/additem" element={<Additem />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/party" element={<Party />} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/service" element={<Service/>} />
              <Route path="/viewprofile" element={<ViewProfile/>} />
              <Route path="/singleInvoice" element={<SingleInvoice/>} />
              <Route path="/document" element={<MyDocument/>} />
              <Route path="/*" element={<Home />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
