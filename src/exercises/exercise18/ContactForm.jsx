import { useState, useEffect } from 'react';

const ContactForm = ({ dispatch, editingContact, setEditingContact }) => {

  const [contact, setContact] = useState(
    editingContact || { id: null, name: '', email: '', phone: '' }
  );

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
      setIsEditing(true);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contact.name && contact.email && contact.phone) {
      if (isEditing) {
        dispatch({ type: 'edit', payload: contact });
        setIsEditing(false);
      } else {
        dispatch({
          type: 'add',
          payload: { ...contact, id: Date.now(), favorite: false },
        });
      }

      setContact({ id: null, name: '', email: '', phone: '' });
    }
  };

  const handleCancelEdit = () => {
    setContact({ id: null, name: '', email: '', phone: '' });
    setIsEditing(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-violet-50 p-6 rounded-xl mb-8"
    >

      <h3 className="text-2xl font-bold text-gray-800 mb-5">
        {isEditing ? 'Edit Contact' : 'Add New Contact'}
      </h3>

      <div className="mb-4">
        <label className="block font-medium text-gray-700">
          Name:

          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700">
          Email:

          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>
      </div>

      <div className="mb-5">
        <label className="block font-medium text-gray-700">
          Phone:

          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </label>
      </div>

      <button
        type="submit"
        className="bg-violet-600 text-white px-6 py-2 rounded-lg
                   hover:bg-violet-700 transition"
      >
        {isEditing ? 'Update' : 'Add'}
      </button>

      {isEditing && (
        <button
          type="button"
          onClick={handleCancelEdit}
          className="ml-3 bg-gray-500 text-white px-6 py-2 rounded-lg
                     hover:bg-gray-600 transition"
        >
          Cancel
        </button>
      )}

    </form>
  );
};

export default ContactForm;