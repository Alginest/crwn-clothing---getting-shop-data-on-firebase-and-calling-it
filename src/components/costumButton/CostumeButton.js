import React from "react";

import { CustomButtonContainer } from "./CustomeButton.styles";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
