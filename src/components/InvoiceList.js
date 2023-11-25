// src/components/InvoiceList.js
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { viewInvoice, editInvoice, deleteInvoice } from '../redux/actions/invoiceActions';
import "../App.css"


class InvoiceList extends React.Component {
  render() {
    const { invoices } = this.props;

    return (
      <div className="invoice-list-container">
        <h2 className="invoice-list-header">Invoice List</h2>
        <Link to="/create-invoice">
          <button className="create-invoice-btn">Create Invoice</button>
        </Link>
        <ul className="invoice-list">
        
          {invoices.map((invoice) => (
            <li key={invoice.id} className="invoice-item">
              <span>{invoice.invoiceNumber}</span>
              <span>{invoice.billTo}</span>
              <span>{invoice.total}</span>
              <Link to={`/invoices/${invoice.id}`}>
                <button className="invoice-action-btn">View</button>
              </Link>
              <button onClick={() => this.props.editInvoice(invoice)} className="invoice-action-btn">
                Edit
              </button>
              <button onClick={() => this.props.deleteInvoice(invoice.id)} className="invoice-action-btn">
                Delete
              </button>
            </li>
          ))}
        </ul>
        <a className="placeholder-text">Invoice list will render here</a>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    invoices: state.invoiceReducer.invoices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewInvoice: (id) => dispatch(viewInvoice(id)),
    editInvoice: (invoice) => dispatch(editInvoice(invoice)),
    deleteInvoice: (id) => dispatch(deleteInvoice(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceList);