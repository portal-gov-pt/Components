import React from "react";
import { render } from "@testing-library/react";
import { defaultFooterDataProps } from "./defaultFooterData";

import DefaultFooter from "./DefaultFooter";

describe("DefaultFooter", () => {
  test("renders the DefaultFooter component", () => {
    render(<DefaultFooter { ...defaultFooterDataProps } />);
  });
});