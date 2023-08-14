import { InstituteForm } from "@/components/organisms";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
jest.mock("next/router", () => require("next-router-mock"));

const instituteDetails={
    students:[{
        _id:"1",
		classLocation:"Rotary",
        day:"Monday",
        time:"7:30am",
        fee:"1200LKR",
       
        

    }]
    
}

describe("Show institute form property", () => {

  // Mock window.matchMedia
  window.matchMedia = jest.fn().mockImplementation(() => ({
    matches: true,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));
  it("should render edit craft form with values", () => {
    const mockFunction = jest.fn();
    const instituteDetails = {
        _id:"1",
		classLocation:"Rotary",
        day:"Monday",
        time:"7:30am",
        fee:"1200LKR",
    };

	render(<InstituteForm instituteDetails={ instituteDetails }   handleDelete={() => {mockFunction}}  /> )



    expect(screen.getByDisplayValue(instituteDetails.classLocation)).toBeInTheDocument();
});
})