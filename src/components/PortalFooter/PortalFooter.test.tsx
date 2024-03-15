import React from "react";
import { render } from "@testing-library/react";

import PortalFooter from "./PortalFooterOld";

describe("PortalFooter", () => {
  test("renders the PortalFooter component", () => {
    render(<PortalFooter label="Hello world!" />);
  });
});