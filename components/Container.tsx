import styled from 'styled-components';
import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  borders,
  BordersProps,
  color,
  ColorProps,
  compose,
  display,
  DisplayProps,
  flexDirection,
  FlexDirectionProps,
  grid,
  GridProps,
  justifyContent,
  JustifyContentProps,
  justifyItems,
  JustifyItemsProps,
  layout,
  LayoutProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  position,
  PositionProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';

export type ContainerProps = PositionProps &
  LayoutProps &
  AlignContentProps &
  JustifyContentProps &
  FlexDirectionProps &
  PaddingProps &
  MarginProps &
  TextAlignProps &
  AlignItemsProps &
  GridProps &
  JustifyItemsProps &
  ColorProps &
  BordersProps &
  DisplayProps;

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${compose(
    position,
    alignContent,
    justifyContent,
    justifyItems,
    grid,
    layout,
    flexDirection,
    padding,
    borders,
    margin,
    textAlign,
    alignItems,
    color,
    display,
  )};
`;

export default Container;
