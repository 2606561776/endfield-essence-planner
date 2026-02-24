(function () {
  var _hmt = window._hmt || [];
  window._hmt = _hmt;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer.push(arguments);
    };
  window.gtag("js", new Date());
  window.gtag("config", "G-FQ81EJB28L");

  window.clarity =
    window.clarity ||
    function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };

  var analyticsBooted = false;
  var injectScript = function (src, attrs) {
    var script = document.createElement("script");
    script.src = src;
    if ("fetchPriority" in script) {
      script.fetchPriority = "low";
    }
    if (attrs && attrs.async) {
      script.async = true;
    }
    if (attrs && attrs.defer) {
      script.defer = true;
    }
    var target = document.head || document.body || document.documentElement;
    if (!target) return;
    target.appendChild(script);
  };

  var loadThirdPartyAnalytics = function () {
    if (analyticsBooted) return;
    analyticsBooted = true;
    injectScript("https://www.googletagmanager.com/gtag/js?id=G-FQ81EJB28L", { async: true });
    injectScript("https://hm.baidu.com/hm.js?675464d4b6500379e28adbfeb2ce0b40", { async: true });
    injectScript("https://www.clarity.ms/tag/vb1z842wno", { async: true });
  };

  var scheduleThirdPartyAnalytics = function () {
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(
        function () {
          loadThirdPartyAnalytics();
        },
        { timeout: 4000 }
      );
      return;
    }
    setTimeout(function () {
      loadThirdPartyAnalytics();
    }, 1200);
  };

  if (document.readyState === "complete") {
    scheduleThirdPartyAnalytics();
  } else {
    window.addEventListener(
      "load",
      function () {
        scheduleThirdPartyAnalytics();
      },
      { once: true }
    );
  }

  window.__loadAnalyticsNow = loadThirdPartyAnalytics;
})();
