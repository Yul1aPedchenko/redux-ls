import { Routes, Route } from "react-router-dom";
import { ContactsPage } from "./pages/ContactsPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";

export const Hw39 = () => {
  return (
    <>
      {/* <ContactsPage /> */}
      <RegisterPage />
      <LoginPage />
    </>
  );
};
