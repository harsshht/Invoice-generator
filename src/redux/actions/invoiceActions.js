import * as types from '../types/invoiceTypes';

export const addInvoice = (invoice) => ({
  type: types.ADD_INVOICE,
  payload: invoice,
});

export const editInvoice = (invoice) => ({
  type: types.EDIT_INVOICE,
  payload: invoice,
});

export const viewInvoice = (invoiceId) => ({
  type: types.VIEW_INVOICE,
  payload: invoiceId,
});

export const deleteInvoice = (invoiceId) => ({
  type: types.DELETE_INVOICE,
  payload: invoiceId,
});
