/**
 * Display an alert with an error message, description
 *
 * @param  {string} textToShow  Error message text
 * @param  {string} errorToShow Error to show
 */
function displayAnError(textToShow, errorToShow) {
    "use strict";

    alert(textToShow + '\n' + errorToShow);
}

/**
 * Retrieve a value of a parameter from the given URL string
 *
 * @param  {string} url           Url string
 * @param  {string} parameterName Name of the parameter
 *
 * @return {string}               Value of the parameter
 */
function getUrlParameterValue(url, parameterName) {
    "use strict";

    var urlParameters  = url.substr(url.indexOf("#") + 1),
        parameterValue = "",
        index,
        temp;

    urlParameters = urlParameters.split("&");

    for (index = 0; index < urlParameters.length; index += 1) {
        temp = urlParameters[index].split("=");

        if (temp[0] === parameterName) {
            return temp[1];
        }
    }

    return parameterValue;
}

/**
 * Chrome tab update listener handler. Return a function which is used as a listener itself by chrome.tabs.obUpdated
 *
 * @param  {string} authenticationTabId Id of the tab which is waiting for grant of permissions for the application
 *
 * @return {function}                   Listener for chrome.tabs.onUpdated
 */
function listenerHandler(authenticationTabId) {
    return function tabUpdateListener(tabId, changeInfo) {
        var vkAccessToken,
            vkAccessTokenExpiredFlag;

        if (tabId === authenticationTabId && changeInfo.url !== undefined && changeInfo.status === "loading") {

            if (changeInfo.url.indexOf('oauth.vk.com/blank.html') > -1) {
                authenticationTabId = null;
                chrome.tabs.onUpdated.removeListener(tabUpdateListener);

                vkAccessToken = getUrlParameterValue(changeInfo.url, 'access_token');

                if (vkAccessToken === undefined || vkAccessToken.length === undefined) {
                    displayAnError('vk auth response problem', 'access_token length = 0 or vkAccessToken == undefined');
                    return;
                }

                vkAccessTokenExpiredFlag = Number(getUrlParameterValue(changeInfo.url, 'expires_in'));

                if (vkAccessTokenExpiredFlag !== 0) {
                    displayAnError('vk auth response problem', 'vkAccessTokenExpiredFlag != 0' + vkAccessToken);
                    return;
                }

                chrome.storage.local.set({'vkaccess_token': vkAccessToken}, function () {
                    chrome.tabs.remove(tabId, function(){})
                });
            }
        }
    };
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//    console.log(sender.tab ?
//        "from a content script:" + sender.tab.url :
//        "from the extension");

    if (request.action == "vk_notification_auth") {
        var vkClientId           = '3696318',
            vkRequestedScopes    = 'wall,offline',
            vkAuthenticationUrl  = 'https://oauth.vk.com/authorize?client_id=' + vkClientId + '&scope=' + vkRequestedScopes + '&redirect_uri=http%3A%2F%2Foauth.vk.com%2Fblank.html&display=page&response_type=token';

        chrome.tabs.create({url: vkAuthenticationUrl, selected: true}, function (tab) {
            chrome.tabs.onUpdated.addListener(listenerHandler(tab.id));
        });

        sendResponse({content: "OK"});
    }
});

/**
 * Handle main functionality of 'onlick' chrome context menu item method
 */
//function getClickHandler() {
//
//}

/**
 * Handler of chrome context menu creation process -creates a new item in the context menu
 */
//chrome.contextMenus.create({
//    "title": "Оповещения VK",
//    "type": "normal",
//    "contexts": ["image"],
//    "onclick": getClickHandler()
//});

