

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContacts } from "../redux/operations";
import { selectError, selectIsLoading } from "../redux/selectors";
import { Loader } from "./Loader";


export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 30,
            color: '#010101'
          }}
        >
        <div>
        <h1>Phonebook</h1>
        <ContactForm />
        {loading && !error && <Loader />}
        <h2>Contacts</h2>
        <Filter />
        {error && <h2>{error}</h2>}
        <ContactList  />
        </div>
        </div>
  )

};