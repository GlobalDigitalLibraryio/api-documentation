/**
 * Copyright (c) 2017-present, GDL.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const environment = {
  development: {
    isProduction: false,
  },
  production: {
    isProduction: true,
  },
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.API_DOCUMENTATION_HOST || 'local.digitallibrary.io',
  port: process.env.API_DOCUMENTATION_PORT || '3000',
  gdlApiGatewayUrl: process.env.GDL_API_URL || 'http://api-gateway.gdl-local:8001',
  apiDocPath: new RegExp('api-docs'),

  app: {
    title: 'GDL API Documentation',
  },

}, environment);
