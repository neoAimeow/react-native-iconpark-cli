/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface Props extends SvgProps {
  size?: number;
}

declare const IconNormal: FunctionComponent<Props>;

export default IconNormal;
