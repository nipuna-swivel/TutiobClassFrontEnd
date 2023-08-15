import LoginForm from "@/components/organisms/LoginForm";
import { render, screen } from "@testing-library/react";



describe('LoginFormComponent', () => {
    test("render login form", () => {
        render(<LoginForm/>)
    })
});