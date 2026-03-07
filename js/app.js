(function () {

  const readBootProtocol = (protocolName) => {
    if (typeof window === "undefined") return undefined;
    const appBoot = window.__APP_BOOT__;
    if (!appBoot || typeof appBoot.readProtocol !== "function") {
      return undefined;
    }
    return appBoot.readProtocol(protocolName);
  };

  const publishBootProtocol = (protocolName, value) => {
    if (typeof window === "undefined") return value;
    const appBoot = window.__APP_BOOT__;
    if (appBoot && typeof appBoot.publishProtocol === "function") {
      appBoot.publishProtocol(protocolName, value);
    }
    return value;
  };

  const renderBootError = (payload) => {
    const renderError = readBootProtocol("renderBootError");
    if (typeof renderError === "function") {
      renderError(payload);
      return;
    }
    const fallback = document.createElement("div");
    fallback.style.cssText = "padding:24px;color:#f36c6c;font-family:Microsoft YaHei UI;";
    fallback.textContent = "页面加载失败，请刷新后重试。";
    document.body.textContent = "";
    document.body.appendChild(fallback);
  };

  const fallbackLoadScript = (src) =>
    new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load: " + src));
      document.body.appendChild(script);
    });

  const loadScript = readBootProtocol("loadScript") || publishBootProtocol("loadScript", fallbackLoadScript);
  const appScriptChain = readBootProtocol("appScriptChain");

  const scripts =
    Array.isArray(appScriptChain) &&
    appScriptChain.length
      ? appScriptChain
      : [];

  if (!scripts.length) {
    if (typeof window !== "undefined" && typeof window.__reportScriptChainMissing === "function") {
      window.__reportScriptChainMissing();
    } else {
      renderBootError({
        title: "页面资源加载失败",
        summary: "脚本加载清单缺失，应用暂时无法启动。",
      });
    }
    return;
  }

  scripts
    .reduce((promise, src) => promise.then(() => loadScript(src)), Promise.resolve())
    .catch((error) => {
      const failedMessage = String((error && error.message) || "");
      const failedScript = failedMessage.replace(/^Failed to load:\s*/i, "");
      if (typeof window !== "undefined" && typeof window.__reportScriptLoadFailure === "function") {
        window.__reportScriptLoadFailure(failedScript);
      } else {
        renderBootError({
          title: "页面资源加载失败",
          summary: "核心脚本未能完整加载，应用暂时无法启动。",
          details: [failedScript ? `失败资源：${failedScript}` : "失败资源：未知"],
        });
      }
    });
})();
