import { defineConfig } from 'umi';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

export default defineConfig({
  mock: false,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},

  /** 使用Dayjs替换Antd的Moment，注意不要开启mfsu */
  chainWebpack: (config) => {
    config.plugin('antd-dayjs-webpack-plugin').use(AntdDayjsWebpackPlugin);
    // 如果是antdv3，使用下面的配置
    // config.plugin('antd-dayjs-webpack-plugin').use(AntdDayjsWebpackPlugin, [{ preset: 'antdv3' }]);
  },
});
