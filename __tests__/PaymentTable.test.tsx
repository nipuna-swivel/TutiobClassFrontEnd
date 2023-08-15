import ListPayments from "@/components/templates/listPayment";
import { render, screen } from "@testing-library/react";



describe('ListPayments Component', () => {
    test("render login form", () => {
        render(<ListPayments/>)
    })
});