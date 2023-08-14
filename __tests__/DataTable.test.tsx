import {screen,render,fireEvent} from "@testing-library/react";
import  StudentTable  from '@/components/organisms/DataTable';
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

const students={
    students:[{
        _id:"1",
        name:"Student 1",
        nic:"932345676v",
        school:"Royal Collage",
        contactNo:"0771256567",
        classLocation:"Rotary"

    }]
    
}

describe("Show student list", () => {
    it("Student list should render correctly", () => {
        render( <StudentTable  students={students}  />)
    })
})