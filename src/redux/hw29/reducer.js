export const initialState = {
  contacts: [],
  filter: "",
};

export const hw29Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/add": {
      const isInCintacts = state.contacts.find((contact) => {
        return contact.name.toLowerCase().trim() === action.payload.name.toLowerCase().trim() || contact.number.trim() === action.payload.number.trim();
      });

      if (!isInCintacts) {
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      } else {
        alert(`${action.payload.name} or ${action.payload.number} is already in your contacts`);
        return state;
      }
    }
    case "contacts/delete":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    case "filter/update":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
