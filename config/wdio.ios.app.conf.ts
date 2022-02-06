import { join } from 'path';
import config from './wdio.shared.local.appium.conf';

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/et.app.*.spec.ts',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'iOS',
        maxInstances: 1,
        autoAcceptAlerts: true,
        // For W3C the appium capabilities need to have an extension prefix
        // This is `appium:` for all Appium Capabilities which can be found here
        // http://appium.io/docs/en/writing-running-appium/caps/
        deviceName: 'iPhone 12',
        platformVersion: '14.5',
        orientation: 'PORTRAIT',
        automationName: 'XCUITest',
        // The path to the app
        app: join(process.cwd(), './apps/eToro.app'),
        // 'appium:app': join(process.cwd(), './apps/iOS-Simulator-NativeDemoApp-0.4.0.app.zip'),
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: false,
        newCommandTimeout: 240,
    },
];

exports.config = config;
