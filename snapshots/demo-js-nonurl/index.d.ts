/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

export { default as IconClassSvg } from './IconClassSvg';
export { default as IconInlineStyle } from './IconInlineStyle';
export { default as IconNormal } from './IconNormal';
export { default as IconStyle } from './IconStyle';

interface Props extends SvgProps {
  name: 'classSvg' | 'inlineStyle' | 'normal' | 'style';
  size?: number;
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
