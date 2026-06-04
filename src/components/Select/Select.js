import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  appearance: none;

  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  padding: 12px 16px;

  font-size: 1rem;
  color: ${COLORS.gray700};
`;

export default Select;
