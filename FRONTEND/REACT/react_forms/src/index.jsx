import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

console.log(fruits);

const fullName = {
  fName: "Nihaal",
  lName: "Naresh"
}

const user = {
  ...fullName, 
  id: 1,
  username:"ni190304"
}

console.log(user);

reportWebVitals();
