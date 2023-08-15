import { PaymentForm } from "@/components/organisms";
import { render, screen } from "@testing-library/react";



describe('LoginFormComponent', () => {
    test("render login form", () => {
        render(<PaymentForm/>)
    })
});