import axios from 'axios';
import { fetchDataSuccess, setIsError, setIsLoading } from './contactsSlice';

export const fetchData = () => async dispatch => {
  try {
    dispatch(setIsError(false));
    dispatch(setIsLoading(true));
    const response = await axios.get(
      'https://67bf83ddb2320ee05013ea7a.mockapi.io/phonebook/contacts'
    );
    dispatch(fetchDataSuccess(response.data));
  } catch {
    dispatch(setIsError(true));
  } finally {
    dispatch(setIsLoading(false));
  }
};
