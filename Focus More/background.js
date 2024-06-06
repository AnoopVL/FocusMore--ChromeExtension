let isBlocking = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ isBlocking: false });
  updateRules(false);
});

chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get("isBlocking", (data) => {
    isBlocking = !data.isBlocking;
    chrome.storage.local.set({ isBlocking: isBlocking });
    updateBadge(isBlocking);
    updateRules(isBlocking);
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.updateRules) {
    chrome.storage.local.get("isBlocking", (data) => {
      updateRules(data.isBlocking);
    });
  }
});

function updateBadge(isBlocking) {
  if (isBlocking) {
    chrome.action.setBadgeText({ text: "ON" });
    chrome.action.setBadgeBackgroundColor({ color: "#4688F1" });
  } else {
    chrome.action.setBadgeText({ text: "" });
  }
}

function updateRules(isBlocking) {
  const rules = [
    {
      id: 1,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "*://*.twitter.com/*",
        resourceTypes: ["main_frame"],
      },
    },
    {
      id: 2,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "*://*.instagram.com/*",
        resourceTypes: ["main_frame"],
      },
    },
    {
      id: 3,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: "*://*.linkedin.com/*",
        resourceTypes: ["main_frame"],
      },
    },
  ];

  if (isBlocking) {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: rules,
      removeRuleIds: [1, 2, 3],
    });
  } else {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [],
      removeRuleIds: [1, 2, 3],
    });
  }
}

// let isBlocking = false;

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.local.set({ isBlocking: false });
//   updateRules(false);
// });

// chrome.action.onClicked.addListener(() => {
//   chrome.storage.local.get("isBlocking", (data) => {
//     isBlocking = !data.isBlocking;
//     chrome.storage.local.set({ isBlocking: isBlocking });
//     updateBadge(isBlocking);
//     updateRules(isBlocking);
//   });
// });

// function updateBadge(isBlocking) {
//   if (isBlocking) {
//     chrome.action.setBadgeText({ text: "ON" });
//     chrome.action.setBadgeBackgroundColor({ color: "#4688F1" });
//   } else {
//     chrome.action.setBadgeText({ text: "" });
//   }
// }

// function updateRules(isBlocking) {
//   const rule = {
//     id: 1,
//     priority: 1,
//     action: { type: "block" },
//     condition: {
//       urlFilter: "*://*.twitter.com/*|*://*.instagram.com/*|*://*.linkedin.com/*",
//       resourceTypes: ["main_frame"]
//     }
//   };

//   if (isBlocking) {
//     chrome.declarativeNetRequest.updateDynamicRules({
//       addRules: [rule],
//       removeRuleIds: [1]
//     });
//   } else {
//     chrome.declarativeNetRequest.updateDynamicRules({
//       addRules: [],
//       removeRuleIds: [1]
//     });
//   }
// }
