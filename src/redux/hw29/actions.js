export const addContact = (newContact) => {
  return {
    type: "contacts/add",
    payload: newContact,
  };
};

export const deleteContact = (id) => {
  return {
    type: "contacts/delete",
    payload: id,
  };
};

export const updateFilter = (value) => {
  return {
    type: "filter/update",
    payload: value,
  };
};
