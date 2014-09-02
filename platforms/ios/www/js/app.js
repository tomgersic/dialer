(function () {

    "use strict";

    var readyValue = {};
    readyValue.polymerReady = false;
    readyValue.deviceReady = false;

    /* Wait until polymer is ready to initiate the use of cordova plugins and app launch */
    document.addEventListener("polymer-ready", function() {
        if(initReady('polymer')) {
            var forceclient = document.querySelector('forceclient-service'); //.authenticateUser(showUsersList);

            forceclient.authenticateUser(showUsersList);
        }
    }, false);

    /* Wait until cordova is ready to initiate the use of cordova plugins and app launch */
    document.addEventListener("deviceready", function() {
        if(initReady('device')) {
            var forceclient = document.querySelector('forceclient-service'); //.authenticateUser(showUsersList);
            forceclient.authenticateUser(showUsersList);
        }
    }, false);

    /* check that both polymer and cordova are ready */
    var initReady = function(isReady) {
        if(isReady == 'polymer') {
            readyValue.polymerReady = true;
        } else if(isReady == 'device') {
            readyValue.deviceReady = true;
        }
        if(readyValue.polymerReady && readyValue.deviceReady) {
            return true;
        } else {
            return false;
        }
    }


})();