import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

import {useTheme} from '../context';

export const Poison = memo((props: React.SVGProps<SVGSVGElement>) => {
  const {mode}: {mode: 'light' | 'dark'} = useTheme();
  const fill = mode === 'light' ? '#33F' : '#fff';

  return (
    // @ts-ignore
    <Svg width={23} height={36} viewBox="0 0 23 36" fill="none" {...props}>
      <Path
        d="M19.295 9.408l-3.83-2.09v-1.46h.606a.607.607 0 00.607-.608V1.607A.607.607 0 0016.072 1H6.357a.607.607 0 00-.607.607V5.25a.607.607 0 00.607.607h.607v1.461l-3.83 2.09a5.463 5.463 0 00-2.848 4.797V30.75A4.255 4.255 0 004.536 35h13.357a4.255 4.255 0 004.25-4.25V14.205a5.463 5.463 0 00-2.848-4.797zm-3.83-2.09h-.608.607v0zm-8.5-5.104h8.5v2.429h-8.5V2.214zm-3.25 8.26l3.83-2.09a1.212 1.212 0 00.633-1.066v-1.46h6.072v1.46a1.214 1.214 0 00.633 1.066l3.83 2.09a4.249 4.249 0 012.215 3.73v.153H1.5v-.152a4.249 4.249 0 012.215-3.731zm17.213 18.455H1.5V15.57h19.428V28.93zm-3.035 4.857H4.536A3.04 3.04 0 011.5 30.75v-.607h19.428v.607a3.04 3.04 0 01-3.035 3.036zm-11.83-8.102l1.717 1.718a.607.607 0 00.858 0l2.576-2.576 2.576 2.576a.607.607 0 00.859 0l1.717-1.718a.607.607 0 000-.858L13.79 22.25l2.576-2.576a.607.607 0 000-.859l-1.717-1.717a.607.607 0 00-.859 0l-2.576 2.576-2.576-2.576a.607.607 0 00-.858 0l-1.718 1.717a.607.607 0 000 .859l2.576 2.576-2.576 2.576a.607.607 0 000 .858zm3.863-3.005a.608.608 0 000-.858L7.35 19.245l.859-.859 2.576 2.576a.625.625 0 00.858 0l2.577-2.576.858.859-2.576 2.576a.607.607 0 000 .858l2.576 2.576-.858.859-2.577-2.576a.607.607 0 00-.858 0l-2.576 2.576-.859-.86 2.576-2.575z"
        fill={fill}
        stroke={fill}
        strokeWidth={0.25}
      />
    </Svg>
  );
});
