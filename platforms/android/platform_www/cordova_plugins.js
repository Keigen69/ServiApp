cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "mx.ferreyra.callnumber.CallNumber",
        "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
        "pluginId": "mx.ferreyra.callnumber",
        "clobbers": [
            "call"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "mx.ferreyra.callnumber": "0.0.2",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-ionic-webview": "1.1.11",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-whitelist": "1.3.1",
    "ionic-plugin-keyboard": "2.2.1"
};
// BOTTOM OF METADATA
});