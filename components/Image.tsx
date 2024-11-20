import styled from 'styled-components';
import {
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
} from 'styled-system';

const Image = styled.img<FlexboxProps & LayoutProps>`
  ${compose(flexbox, layout)}
`;

export default Image;
