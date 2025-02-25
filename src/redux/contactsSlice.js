import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: { items: [] },
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
  },
});

export const { addContact, deleteContact } = slice.actions;
export const contactFormReducer = slice.reducer;
