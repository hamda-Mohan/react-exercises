const ContactItem = ({ contact, dispatch, setEditingContact }) => {

  const { id, name, email, phone, favorite } = contact;

  return (
    <li className="bg-gray-50 border border-gray-200 rounded-xl p-5
                   shadow-sm hover:shadow-md transition">

      <div className="flex items-center justify-between mb-2">

        <strong className="text-lg font-bold text-violet-700">
          {name}
        </strong>

        {favorite && (
          <span className="text-yellow-500 text-xl">
            ★
          </span>
        )}

      </div>

      <p className="text-gray-600 mb-1">
        <span className="font-medium">Email:</span> {email}
      </p>

      <p className="text-gray-600 mb-4">
        <span className="font-medium">Phone:</span> {phone}
      </p>

      <div className="flex gap-2 flex-wrap">

        <button
          onClick={() =>
            dispatch({
              type: 'toggleFavorite',
              payload: id
            })
          }
          className="bg-yellow-500 text-white px-3 py-2 rounded-lg
                     hover:bg-yellow-600 transition"
        >
          {favorite ? 'Unfavorite' : 'Favorite'}
        </button>

        <button
          onClick={() => setEditingContact(contact)}
          className="bg-blue-500 text-white px-3 py-2 rounded-lg
                     hover:bg-blue-600 transition"
        >
          Edit
        </button>

        <button
          onClick={() =>
            dispatch({
              type: 'delete',
              payload: id
            })
          }
          className="bg-red-500 text-white px-3 py-2 rounded-lg
                     hover:bg-red-600 transition"
        >
          Delete
        </button>

      </div>

    </li>
  );
};

export default ContactItem;