import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOps';

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
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.error = false;
        state.contacts.items = action.payload;
        state.contacts.loading = false;
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.contacts.loading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== action.payload
        );
      });
  },
});

export const { setIsError, setIsLoading } = slice.actions;
export const contactFormReducer = slice.reducer;
