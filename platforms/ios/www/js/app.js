(function () {

    "use strict";

    var readyValue = {};
    readyValue.polymerReady = false;
    readyValue.deviceReady = false;

    /* Wait until cordova is ready to initiate the use of cordova plugins and app launch */
    document.addEventListener("polymer-ready", function() {
        //authenticateUser(showUsersList);
        if(initReady('polymer')) {
            var forceclient = document.querySelector('forceclient-service'); //.authenticateUser(showUsersList);
            forceclient.authenticateUser(showUsersList);
        }
    }, false);

    document.addEventListener("deviceready", function() {
        //authenticateUser(showUsersList);
        if(initReady('device')) {
            var forceclient = document.querySelector('forceclient-service'); //.authenticateUser(showUsersList);
            forceclient.authenticateUser(showUsersList);
        }
    }, false);

    var initReady = function(isReady) {
        if(isReady == 'polymer') {
            readyValue.polymerReady = true;
        } else if(isReady == 'device') {
            readyValue.deviceReady = true;
        }

        alert(readyValue);

        if(readyValue.polymerReady && readyValue.deviceReady) {
            alert('true');
            return true;
        } else {
            alert('false');
            return false;
        }
    }

    /* Method to authenticate user with Salesforce Mobile SDK's OAuth Plugin */
    var authenticateUser = function(successHandler, errorHandler) {

        // Get salesforce mobile sdk OAuth plugin
        var oauthPlugin = cordova.require("com.salesforce.plugin.oauth");

        // Call getAuthCredentials to get the initial session credentials
        oauthPlugin.getAuthCredentials(
            // Callback method when authentication succeeds.
            function (creds) {
                // Create forcetk client instance for rest API calls
                var forceClient = new forcetk.Client();
                forceClient.setSessionToken(creds.accessToken, "v31.0", creds.instanceUrl);

                // Call success handler and handover the forcetkClient
                successHandler(forceClient);
            },
            function (error) {
                alert('Failed to authenticate user: ' + error);
            }
        );
    }

    /* This method will render a list of users from current salesforce org */
    var showUsersList = function(forceClient) {

        fetchRecords(forceClient, function(data) {
            var users = data.records;

            console.log(data.records);

            var listItemsHtml = '';
            for (var i=0; i < users.length; i++) {
                listItemsHtml += ('<li class="table-view-cell"><div class="media-body">' + users[i].Name + '</div></li>');
            }

            //console.log(listItemsHtml);
            //document.querySelector('#users').innerHTML = listItemsHtml;
        })
    }

    /* This method will fetch a list of user records from salesforce. 
    Just change the soql query to fetch another sobject. */
    var fetchRecords = function (forceClient, successHandler) {
        var soql = 'SELECT Id, Name FROM User LIMIT 10';
        forceClient.query(soql, successHandler, function(error) {
            alert('Failed to fetch users: ' + error);
        });
    };

})();