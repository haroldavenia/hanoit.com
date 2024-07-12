import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Modal from 'react-modal';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const reCAPTCHAKey = process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY;

Modal.setAppElement("#root");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleReCaptchaProvider
    reCaptchaKey={reCAPTCHAKey}
  >
    <App />
  </GoogleReCaptchaProvider>,
  document.getElementById("root")
);
