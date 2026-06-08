import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES_BY_SIZE[size];
  return (
    <TextInput
      type="text"
      placeholder={placeholder}
      width={width}
      style={styles}
    />
  );
};

const STYLES_BY_SIZE = {
  small: {
    "--line-size": 1 + "px",
    "--font-size": 14 / 16 + "rem",
  },
  large: {
    "--line-size": 2 + "px",
    "--font-size": 18 / 16 + "rem",
  },
};

const TextInput = styled.input`
  width: ${(p) => p.width}px;

  border: none;
  border-bottom: var(--line-size) solid ${COLORS.black};

  color: ${COLORS.gray700};
  font-size: var(--font-size);
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
