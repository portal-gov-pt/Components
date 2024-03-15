import React from "react";
import { render } from "@testing-library/react";

import PortalHeader from "./PortalHeader";

describe("PortalHeader", () => {
  test("renders the PortalHeader component", () => {
    render(<PortalHeader publicService="balcao-condutor" />);
  });
});