export const handleAuthSubmit = async ({ values, dispatch, thunk, navigate, setError, successPath, errorMessage }) => {
  setError("");

  try {
    await dispatch(thunk(values)).unwrap();
    navigate(successPath);
  } catch (e) {
    setError(errorMessage);
  }
};
