import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/firstName/i);
    const lastNameInput = screen.getByLabelText(/lastName/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);



    userEvent.type(firstNameInput, "Ismael")
    userEvent.type(lastNameInput, "Hernandez")
    userEvent.type(addressInput, "123456 street")
    userEvent.type(cityInput, "wakanda")
    userEvent.type(stateInput, "california")
    userEvent.type(zipInput, "92636")

    const button = screen.getByRole("button", { name: /checkout/i });

    userEvent.click(button);

    const checkoutText = screen.queryByText(/ismael/i)

    expect(checkoutText).toBeInTheDocument();




});
