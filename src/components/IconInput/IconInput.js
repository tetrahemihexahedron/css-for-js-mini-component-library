import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES_BY_SIZE[size];
  const iconSize = size === "small" ? 16 : 24;
  const strokeWidth = size === "small" ? 1 : 2;

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput
        type="text"
        placeholder={placeholder}
        width={width}
        style={styles}
      />
      <PositionedIcon id={icon} size={iconSize} strokeWidth={strokeWidth} />
    </Wrapper>
  );
};

const STYLES_BY_SIZE = {
  small: {
    "--line-thickness": 1 + "px",
    "--font-size": 14 / 16 + "rem",
    "--padding-left": 24 + "px",
    "--padding-block": 4 + "px",
  },
  large: {
    "--line-thickness": 2 + "px",
    "--font-size": 18 / 16 + "rem",
    "--padding-left": 36 + "px",
    "--padding-block": 6 + "px",
  },
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  width: ${(p) => p.width}px;
  padding-left: var(--padding-left);
  padding-block: var(--padding-block);

  border: none;
  border-bottom: var(--line-thickness) solid ${COLORS.black};

  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;

  &:focus-visible {
    outline-offset: 1px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin-block: auto;

  color: inherit;

  pointer-events: none;
`;

export default IconInput;
