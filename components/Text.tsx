import styled from 'styled-components';
import {
  color,
  compose,
  display,
  DisplayProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  layout,
  LayoutProps,
  margin,
  MarginProps,
  textAlign,
  TextAlignProps,
  typography,
  TypographyProps,
} from 'styled-system';

const Text = styled.p<
  TextAlignProps &
    MarginProps &
    FontSizeProps &
    FontWeightProps &
    DisplayProps &
    TypographyProps &
    LayoutProps
>`
  font-size: 1.125rem;
  margin: 0.75rem 0;
  color: rgba(0, 0, 0, 0.7);
  white-space: pre-wrap;
  line-height: 160%;
  letter-spacing: 0.02em;

  ${compose(
    color,
    textAlign,
    margin,
    fontSize,
    fontWeight,
    display,
    typography,
    layout,
  )}
`;

export default Text;
