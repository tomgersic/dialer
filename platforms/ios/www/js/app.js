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

    /* This method will render a list of users from current salesforce org */
    var showUsersList = function(forceClient) {

        fetchRecords(forceClient, function(data) {
            var users = data.records;

            //console.log(data.records);

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