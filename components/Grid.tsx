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

export type GridProps = GridGapProps &
  SpaceProps &
  StyledGridProps &
  LayoutProps &
  FlexboxProps &
  BordersProps & {
    gap?: string | string[] | number | number[];
  };

const Grid = styled.div<GridProps>`
  display: grid;
  align-items: center;
  justify-content: flex-end;

  ${({ gap }) => gap && css`gap: ${gap};`}

  ${compose(gridGap, grid, space, layout, flexbox, borders)};
`;

Grid.defaultProps = {};

export default Grid;
