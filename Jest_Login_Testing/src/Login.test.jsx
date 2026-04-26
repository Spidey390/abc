import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
describe("Login Page Validation", () => {
    test("shows error for invalid email", () => {
        render(<Login />);
        fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "invalidemail" } });
        fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "123456" } });
        fireEvent.click(screen.getByRole("button", { name: "Login" }));
        expect(screen.getByRole("alert")).toHaveTextContent("Invalid email format");
    });
});