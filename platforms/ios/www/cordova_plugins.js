cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.oauth.js",
        "id": "com.salesforce.plugin.oauth"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.sdkinfo.js",
        "id": "com.salesforce.plugin.sdkinfo"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.smartstore.js",
        "id": "com.salesforce.plugin.smartstore",
        "clobbers": [
            "navigator.smartstore"
        ]
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.sfaccountmanager.js",
        "id": "com.salesforce.plugin.sfaccountmanager"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.util.bootstrap.js",
        "id": "com.salesforce.util.bootstrap"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.util.event.js",
        "id": "com.salesforce.util.event"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.util.exec.js",
        "id": "com.salesforce.util.exec"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.util.logger.js",
        "id": "com.salesforce.util.logger"
    },
    {
        "file": "plugins/com.salesforce/www/com.salesforce.util.push.js",
        "id": "com.salesforce.util.push"
    },
    {
        "file": "plugins/org.apache.cordova.console/www/console-via-logger.js",
        "id": "org.apache.cordova.console.console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/logger.js",
        "id": "org.apache.cordova.console.logger",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.PushPlugin/www/PushNotification.js",
        "id": "com.phonegap.plugins.PushPlugin.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.salesforce": "2.3.0",
    "org.apache.cordova.console": "0.2.10",
    "org.apache.cordova.device": "0.2.11",
    "com.phonegap.plugins.PushPlugin": "2.2.1"
}
// BOTTOM OF METADATA
});