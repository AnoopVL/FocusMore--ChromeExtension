document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");

  chrome.storage.local.get("isBlocking", (data) => {
    updateButton(data.isBlocking);
  });

  toggleButton.addEventListener("click", () => {
    chrome.storage.local.get("isBlocking", (data) => {
      const newBlockingState = !data.isBlocking;
      chrome.storage.local.set({ isBlocking: newBlockingState });
      updateButton(newBlockingState);
      chrome.action.setBadgeText({ text: newBlockingState ? "ON" : "" });
      chrome.action.setBadgeBackgroundColor({ color: "#4688F1" });
      chrome.runtime.sendMessage({ updateRules: true });
    });
  });

  function updateButton(isBlocking) {
    toggleButton.textContent = isBlocking
      ? "Disable Blocking"
      : "Enable Blocking";
  }
});

// document.addEventListener('DOMContentLoaded', () => {
//   const toggleButton = document.getElementById('toggleButton');

//   chrome.storage.local.get('isBlocking', (data) => {
//     updateButton(data.isBlocking);
//   });

//   toggleButton.addEventListener('click', () => {
//     chrome.storage.local.get('isBlocking', (data) => {
//       const newBlockingState = !data.isBlocking;
//       chrome.storage.local.set({ isBlocking: newBlockingState });
//       updateButton(newBlockingState);
//       chrome.action.setBadgeText({ text: newBlockingState ? "ON" : "" });
//       chrome.action.setBadgeBackgroundColor({ color: "#4688F1" });
//       chrome.runtime.sendMessage({ updateRules: true });
//     });
//   });

//   function updateButton(isBlocking) {
//     toggleButton.textContent = isBlocking ? 'Disable Blocking' : 'Enable Blocking';
//   }
// });
