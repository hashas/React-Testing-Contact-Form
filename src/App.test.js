import React from "react";
import { render, fireEvent, getByTestId, getByLabelText, getByPlaceholderText } from "@testing-library/react";
import App from "./App";
// import ContactForm from './components/ContactForm';
// import '@testing-library/jest-dom/extend-expect';
// import 'mutationobserver-shim';

test("renders App without crashing", () => {
  render(<App />);
});

// test("renders ContactForm without crashing", () => {
//   render(<ContactForm />)
// })

// test("email input type=email", () => {
//   const {getByPlaceholderText} = render(<ContactForm />)

//   const emailInput = getByPlaceholderText(/bluebill1049@hotmail.com/i)

//   expect(emailInput).toHaveAttribute('type', 'email')
// })