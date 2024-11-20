import styled from 'styled-components';
import {
  compose,
  grid,
  GridProps,
  layout,
  LayoutProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
} from 'styled-system';

const List = styled.ul<GridProps & LayoutProps & PaddingProps & MarginProps>`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  grid-gap: 0.75rem;

  ${compose(grid, layout, padding, margin)}
`;

export default List;
