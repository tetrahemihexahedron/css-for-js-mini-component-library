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
    "--line-size": 1 + "px",
    "--font-size": 14 / 16 + "rem",
    "--padding-left": 24 + "px",
    "--padding-bottom": 4 + "px",
  },
  large: {
    "--line-size": 2 + "px",
    "--font-size": 18 / 16 + "rem",
    "--padding-left": 36 + "px",
    "--padding-bottom": 6 + "px",
  },
};

const Wrapper = styled.div`
  position: relative;
`;

const TextInput = styled.input`
  width: ${(p) => p.width}px;
  padding-left: var(--padding-left);
  padding-bottom: var(--padding-bottom);

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

const PositionedIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;

  color: ${COLORS.gray700};

  pointer-events: none;
`;

export default IconInput;
