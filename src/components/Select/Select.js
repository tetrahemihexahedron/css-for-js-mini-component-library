import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectIcon id="chevron-down" size="24" strokeWidth="2" />
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectWrapper = styled.select`
  appearance: none;

  position: relative;
  field-sizing: content;

  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  font-size: 1rem;
  color: inherit;
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  right: 12px;
  top: calc(50% - 12px);
`;

export default Select;
