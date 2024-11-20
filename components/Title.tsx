import styled from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  margin,
  MarginProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';

const Title = styled.h1<
  FontSizeProps & ColorProps & FontWeightProps & TextAlignProps & MarginProps
>`
  margin: 10px 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  ${compose(fontSize, fontWeight, color, textAlign, margin)}
`;

export default Title;
