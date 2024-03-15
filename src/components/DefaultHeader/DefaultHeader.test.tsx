import React from "react";
import { render } from "@testing-library/react";

import DefaultHeader from "./DefaultHeader";

describe("Default Header", () => {
  test("renders the DefaultHeader component", () => {
    render(<DefaultHeader publicService="balcao-condutor" />);
  });
});