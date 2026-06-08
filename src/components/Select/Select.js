import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";

const Select = ({ label, value, onChange, children }) => {
  return (
    <Wrapper>
      <SelectIcon id="chevron-down" size="24" strokeWidth="2" />
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeSelect = styled.select`
  appearance: none;

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
  top: 0;
  bottom: 0;
  height: ${(p) => p.size}px;
  width: ${(p) => p.size}px;
  margin-block: auto;
  pointer-events: none;
`;

export default Select;
