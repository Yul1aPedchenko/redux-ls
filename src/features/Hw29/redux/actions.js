export const addContact = (newContact) => {
  return {
    type: "hw29/addContact",
    payload: newContact,
  };
};

export const deleteContact = (id) => {
  return {
    type: "hw29/deleteContact",
    payload: id,
  };
};

export const updateFilter = (value) => {
  return {
    type: "hw29/updateFilter",
    payload: value,
  };
};
