import InstituteTable from "@/components/organisms/InstituteTable";
import { render, screen } from "@testing-library/react";



describe('LoginFormComponent', () => {
    test("render login form", () => {
        render(<InstituteTable/>)
    })
});