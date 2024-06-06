chrome.storage.local.get("isBlocking", (data) => {
  if (data.isBlocking) {
    document.body.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-size: 24px;">
        Focus more
      </div>
    `;
  }
});
