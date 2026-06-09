import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES_BY_SIZE = {
  small: {
    lineThickness: 1,
    fontSize: 14,
    paddingLeft: 24,
    paddingBlock: 4,
    iconSize: 16,
    iconStrokeWidth: 1,
  },
  large: {
    lineThickness: 2,
    fontSize: 18,
    paddingLeft: 36,
    paddingBlock: 6,
    iconSize: 24,
    iconStrokeWidth: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES_BY_SIZE[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <PositionedIcon
        id={icon}
        size={styles.iconSize}
        strokeWidth={styles.iconStrokeWidth}
      />
      <TextInput
        type="text"
        width={width}
        style={{
          "--line-thickness": styles.lineThickness + "px",
          "--font-size": styles.fontSize / 16 + "rem",
          "--padding-left": styles.paddingLeft + "px",
          "--padding-block": styles.paddingBlock + "px",
        }}
        {...delegated}
      />
    </Wrapper>
  );
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
