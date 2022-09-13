import { Container } from "semantic-ui-react";
import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import "semantic-ui-css/semantic.min.css";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Container className="maincontainer">
        {/*<style>
          {`html, body {background-color: #00a7a7 !important;`}
  </style>*/}
        <Dashboard></Dashboard>
      </Container>
      <Footer></Footer>
    </div>
  );
} 

export default App;
