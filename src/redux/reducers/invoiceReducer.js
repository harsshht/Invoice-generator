// src/redux/reducers/invoiceReducer.js
import * as types from "../types/invoiceTypes";
const initialState = {
  invoices: [],
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
      };

    case types.EDIT_INVOICE:
      const updatedInvoices = state.invoices.map((invoice) => {
        if (invoice.id === action.payload.id) {
          return action.payload;
        } else {
          return invoice;
        }
      });
      return {
        ...state,
        invoices: updatedInvoices,
      };

    case types.VIEW_INVOICE:
      const viewedInvoices = state.invoices.map((invoice) => {
        if (invoice.id === action.payload) {
          return {
            ...invoice,
            viewed: true,
          };
        } else {
          return invoice;
        }
      });
      return {
        ...state,
        invoices: viewedInvoices,
      };

    case types.DELETE_INVOICE:
      const filteredInvoices = state.invoices.filter((invoice) => {
        return invoice.id !== action.payload;
      });
      return {
        ...state,
        invoices: filteredInvoices,
      };

    case types.COPY_TO_NEW_INVOICE:
      const { sourceInvoiceId, newInvoiceId } = action.payload;
      const sourceInvoice = state.invoices.find(
        (invoice) => invoice.id === sourceInvoiceId
      );

      if (sourceInvoice) {
        const newInvoice = {
          ...sourceInvoice,
          id: newInvoiceId,
          dateOfIssue: new Date().toLocaleDateString(), // set current date for the new invoice
        };

        const updatedInvoices = [...state.invoices, newInvoice];
        return {
          ...state,
          invoices: updatedInvoices,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default invoiceReducer;
