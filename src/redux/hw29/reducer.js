export const initialState = {
  contacts: [],
  filter: "",
};

export const hw29Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "hw29/addContact": {
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
    case "hw31/deleteContact":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    case "hw29/updateFilter":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
