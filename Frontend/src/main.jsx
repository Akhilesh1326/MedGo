import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import i18n from "./i18nDoctorDash.js"; // Import i18n
import { I18nextProvider } from "react-i18next";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  </StrictMode>,
)
