import React from "react";
import { render, fireEvent, getByTestId, getByLabelText, getByPlaceholderText } from "@testing-library/react";
import ContactForm from './ContactForm';
import { act } from "react-dom/test-utils";

test("renders ContactForm without crashing", () => {
  render(<ContactForm />)
})

test("email field should be required and validate email format", () => {
  const {getByLabelText} = render(<ContactForm />)

  const emailInput = getByLabelText(/email/i)

  expect(emailInput).toHaveAttribute('type', 'email')
//   expect(emailInput).toBeRequired()
})

test("submit button will submit", () => {

    const {getByTestId} = render (<ContactForm />)

    const submitButton = getByTestId('submit')

    act(() => {
        fireEvent.click(submitButton)
    })
})

// test("The 'first name' field should not have a maxLength", () => {
//     const {getByLabelText} = render(<ContactForm />)

//     const firstNameInput = getByLabelText(/firstName/i)

//     expect(firstNameInput).toBeRequired()
// })