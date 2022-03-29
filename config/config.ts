import { defineConfig } from 'alita';

// UMI_REQUEST_PREFIX PUBLIC_PATH 环境变量
export default defineConfig({
  appType: 'h5',
  // mainPath: 'index',
  aconsole: {
    console: {},
    inspx: {},
  },
  request: false,
  dva: {
    // immer: true,
    // skipModelValidate: true,
  },

  mobileLayout: false
});
