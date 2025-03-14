//-- Custom user.js Overrides --//

/* DNS over HTTPS */
//user_pref("network.trr.mode", 3); // Always use custom DoH
user_pref("network.trr.mode", 5); // Never use DoH
//user_pref("network.trr.uri", "https://sky.rethinkdns.com/1:-BMgAAAFAMAABABAIAAAKABA"); 

/* Firefox Homepage */
//user_pref("browser.startup.page", 1); // Show 'homepage' on startup
//user_pref("browser.startup.homepage", "about:home");
//user_pref("browser.newtabpage.enabled", true);
//user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
//user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

/* Bookmarks */
//user_pref("browser.toolbars.bookmarks.visibility", "always");

/* Credentials */
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("signon.rememberSignons", false);

/* URL Bar */
//user_pref("keyword.enabled", true); // Url bar searching
user_pref("browser.urlbar.suggest.history", false); // 5010
user_pref("browser.urlbar.suggest.bookmark", false); // 5010
user_pref("browser.urlbar.suggest.openpage", false); // 5010
//user_pref("browser.urlbar.suggest.topsites", false); // 5010
user_pref("browser.urlbar.suggest.engines", false); // 0815
user_pref("browser.urlbar.trimURLs", false);

/* Fingerprinting */ // Prefer usability over anonyminity, Will compensate w/ CanvasBlocker's canvas & audio randomizing
user_pref("privacy.resistFingerprinting", false); // 4506
user_pref("privacy.resistFingerprinting.letterboxing", false); // 4504
user_pref("webgl.disabled", false); // 4520
user_pref("webgl.force-enabled", true);
//user_pref("network.http.referer.XOriginPolicy", 0); // 5510
//user_pref("network.http.referer.XOriginTrimmingPolicy", 0); // 1602

/* Session Restore */
user_pref("privacy.clearOnShutdown.history", false); // 2811
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", false); // 2811
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", false); // 2811

/* Remove Popups */
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");

/* Scrollbar */
user_pref("widget.non-native-theme.scrollbar.size.override", 16);

/* PiP */
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);

/* Pocket */
//user_pref("extensions.pocket.enabled", false);

/* Tab list */
//user_pref("browser.tabs.tabmanager.enabled", false);

/* Stupid linux middle click paste */
user_pref("clipboard.autocopy", false);
user_pref("middlemouse.paste", false);

/* Zen Browser */
user_pref("zen.urlbar.behavior", "normal");
user_pref("zen.view.hide-window-controls", false);
user_pref("zen.view.show-newtab-button-top", false);
user_pref("zen.pinned-tab-manager.restore-pinned-tabs-to-pinned-url", true);
user_pref("zen.theme.gradient.show-custom-colors", true);
user_pref("zen.theme.gradient", false);
