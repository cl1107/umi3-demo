import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/test', component: '@/pages/test' },
  ],
  fastRefresh: {},
  antd: false,
  dynamicImport: {}, //开启后就不行了
  //以下两个配置都没用
  // theme: {
  //   'root-entry-name': 'variable',
  // },
  // lessLoader: {
  //   modifyVars: {
  //     'root-entry-name': 'variable',
  //   },
  // },
});
