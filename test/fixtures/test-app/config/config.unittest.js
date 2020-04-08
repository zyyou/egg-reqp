'use strict';

module.exports = (appInfo) => {
  const config = {};

  config.keys = 'keys';

  // 日志配置
  config.logger = {
    // consoleLevel: 'DEBUG',
  };

  // 安全配置
  config.security = {
    csrf: {
      // 忽略csrf检查
      enable: false,
    },
  };

  return config;
};
