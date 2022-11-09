declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare module 'antd-dayjs-webpack-plugin';

/** antd中moment声明替换 */
declare module 'moment' {
  import type { Dayjs } from 'dayjs';
  namespace moment {
    type Moment = Dayjs;
  }

  export = moment;
}
