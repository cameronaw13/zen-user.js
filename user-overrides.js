//-- Custom user.js Overrides --//

/* DNS over HTTPS */
//user_pref("network.trr.mode", 3); // Always use custom DoH // 0710
user_pref("network.trr.mode", 5); // Never use DoH // 0710
//user_pref("network.trr.uri", "https://sky.rethinkdns.com/1:-BMgAAAFAMAABABAIAAAKABA");  // 0712

/* Credentials */
user_pref("extensions.formautofill.addresses.enabled", false); // 5017
user_pref("extensions.formautofill.creditCards.enabled", false); // 5017
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("signon.rememberSignons", false); // 5003

/* URL Bar */
user_pref("browser.urlbar.suggest.history", false); // 5010
user_pref("browser.urlbar.suggest.bookmark", false); // 5010
user_pref("browser.urlbar.suggest.openpage", false); // 5010
//user_pref("browser.urlbar.suggest.topsites", false); // 5010 //disabled due to zen urlbar bug
user_pref("browser.urlbar.suggest.engines", false); // 0815
user_pref("browser.urlbar.trimURLs", false);

/* WebGL */
user_pref("webgl.force-enabled", true);

/* Session Restore */
user_pref("privacy.clearOnShutdown.history", false); // 2811
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", false); // 2811
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", false); // 2811

/* Remove Popups */
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown"); // 5018

//-- Browser Preferences --//

/* Scrollbar */
user_pref("widget.non-native-theme.scrollbar.size.override", 16);

/* PiP */
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);

/* Stupid linux middle click paste */
user_pref("clipboard.autocopy", false);
user_pref("middlemouse.paste", false);

/* Disable back & forward touchpad gestures */
user_pref("browser.gesture.swipe.left", "");
user_pref("browser.gesture.swipe.right", "");

/* Zen Browser */
user_pref("zen.urlbar.behavior", "normal");
user_pref("zen.view.hide-window-controls", false);
user_pref("zen.view.show-newtab-button-top", false);
user_pref("zen.pinned-tab-manager.restore-pinned-tabs-to-pinned-url", true);
user_pref("zen.theme.gradient.show-custom-colors", true);
user_pref("zen.theme.gradient", false);
