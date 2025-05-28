/* tslint:disable */
/* eslint-disable */

import React, { type FunctionComponent } from "react";
import { ViewProps } from 'react-native';

// biome-ignore lint/style/useImportType: <explanation>
// biome-ignore lint/correctness/noUnusedImports: <explanation>
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import { SvgProps } from 'react-native-svg';
import IconAlipay from './IconAlipay';
import IconUser from './IconUser';
import IconSetup from './IconSetup';
export { default as IconAlipay } from './IconAlipay';
export { default as IconUser } from './IconUser';
export { default as IconSetup } from './IconSetup';

export type IconNames = 'alipay' | 'user' | 'setup';

interface Props extends SvgProps {
  name: IconNames;
  size?: number;
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'alipay':
      return <IconAlipay key="1" {...rest} />;
    case 'user':
      return <IconUser key="2" {...rest} />;
    case 'setup':
      return <IconSetup key="3" {...rest} />;
  }

  return null;
};

export default IconFont;
