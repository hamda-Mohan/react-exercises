import { useReducer, useState } from 'react';
import { reducer, initialState } from './Reducer';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editingContact, setEditingContact] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-violet-700 mb-8">
          Contact Management App
        </h2>

        <ContactForm
          dispatch={dispatch}
          editingContact={editingContact}
          setEditingContact={setEditingContact}
        />

        <ContactList
          contacts={state}
          dispatch={dispatch}
          setEditingContact={setEditingContact}
        />

      </div>

    </div>
  );
};

export default ContactApp;