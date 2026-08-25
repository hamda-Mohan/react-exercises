import ContactItem from './ContactItem';

const ContactList = ({ contacts, dispatch, setEditingContact }) => {

  return (
    <div>

      <h3 className="text-2xl font-bold text-gray-800 mb-5">
        Contacts
      </h3>

      {contacts.length > 0 ? (

        <ul className="space-y-4">

          {contacts.map((contact) => (

            <ContactItem
              key={contact.id}
              contact={contact}
              dispatch={dispatch}
              setEditingContact={setEditingContact}
            />

          ))}

        </ul>

      ) : (

        <p className="text-center text-gray-500 bg-gray-50
                      rounded-xl p-6">
          No contacts available.
        </p>

      )}

    </div>
  );
};

export default ContactList;