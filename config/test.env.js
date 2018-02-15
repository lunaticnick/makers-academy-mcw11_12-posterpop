'use strict'
require('dotenv').config();
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  GOOGLE_CLOUD_VISION_API_KEY: JSON.stringify(process.env.GOOGLE_CLOUD_VISION_API_KEY),
  FIREBASE_API_KEY: JSON.stringify(process.env.TEST_FIREBASE_API_KEY),
  FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.TEST_FIREBASE_AUTH_DOMAIN),
  FIREBASE_DATABASE_URL: JSON.stringify(process.env.TEST_FIREBASE_DATABASE_URL),
  FIREBASE_PROJECT_ID: JSON.stringify(process.env.TEST_FIREBASE_PROJECT_ID),
  FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.TEST_FIREBASE_STORAGE_BUCKET),
  FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(process.env.TEST_FIREBASE_MESSAGING_SENDER_ID)
})
