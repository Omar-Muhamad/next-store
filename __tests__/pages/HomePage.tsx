import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Suspense } from "react";

import Page from "@/app/page";

describe("Page", () => {
  it("renders a heading", async() => {
     render(<Page />);
    
    const heading = screen.getByRole("heading", { level: 1 });
    
    expect(heading).toBeInTheDocument();
  });
});
