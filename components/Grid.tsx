import React from 'react';
import styled, { css } from 'styled-components';
import {
  borders,
  BordersProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  gridGap,
  GridGapProps,
  GridProps as StyledGridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

// Extend the GridProps to support both gridGap (deprecated) and gap (modern)
export type GridProps = GridGapProps &
  SpaceProps &
  StyledGridProps &
  LayoutProps &
  FlexboxProps &
  BordersProps & {
    gap?: string | string[] | number | number[]; // Add support for modern gap property
  };

const Grid = styled.div<GridProps>`
  display: grid;
  align-items: center;
  justify-content: flex-end;

  grid-template-columns:
    ${({ children }) =>
      children &&
      css`repeat(${React.Children.toArray(children).length}, auto);`}
  
  /* Support both gridGap (legacy) and gap (modern) */
  ${({ gap }) => gap && css`gap: ${gap};`}
  
  ${compose(gridGap, grid, space, layout, flexbox, borders)};
`;

Grid.defaultProps = {};

export default Grid;
