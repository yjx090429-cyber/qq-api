// QQ 音乐 API 服务入口
const path = require('path');

// 设置环境变量让 API 监听所有地址
process.env.HOST = process.env.HOST || '0.0.0.0';
process.env.PORT = process.env.PORT || '3200';

// 启动 API（包会自己起 HTTP 服务）
require('@yakult-green-tea/qq-music-api/dist/src/app.js');
