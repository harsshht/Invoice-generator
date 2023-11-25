import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InvoiceList from "./components/InvoiceList";
import InvoiceForm from "./components/InvoiceForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App d-flex flex-column align-items-center justify-content-center w-100">
          <Container>
            <Routes>
              <Route path="/create-invoice" element={<InvoiceForm />} />
              <Route path="/invoices/:id" element={<InvoiceForm />} />
              <Route path="/" element={<InvoiceList />} />
            </Routes>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
