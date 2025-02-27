import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push({ id: crypto.randomUUID(), ...action.payload });
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    fetchDataSuccess: (state, action) => {
      state.contacts.items = action.payload;
      state.contacts.loading = false;
    },
    setIsError: (state, action) => {
      state.contacts.error = action.payload;
    },
    setIsLoading: (state, action) => {
      state.contacts.loading = action.payload;
    },
  },
});

export const {
  addContact,
  deleteContact,
  fetchDataSuccess,
  setIsError,
  setIsLoading,
} = slice.actions;
export const contactFormReducer = slice.reducer;
