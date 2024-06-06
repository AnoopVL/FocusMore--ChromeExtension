# Focus More Chrome Extension

**Focus More** is a Chrome extension designed to help you focus by blocking access to distracting websites like Twitter, Instagram, and LinkedIn. With a simple toggle button, you can enable or disable the blocking feature as needed.

## Features

- Block access to Twitter, Instagram, and LinkedIn.
- Toggle blocking on and off with a single click.
- Displays the current blocking status with a badge on the extension icon.

## Installation

1. Clone or download the repository to your local machine.

   ```bash
   git clone https://github.com/AnoopVL/FocusMore--ChromeExtension.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable **Developer mode** by toggling the switch in the top right corner.

4. Click on **Load unpacked** and select the directory where you cloned/downloaded the extension.

## Files

- `background.js`: Handles the installation, state management, and blocking rules of the extension.
- `content.js`: Modifies the content of blocked websites to display a "Focus more" message.
- `popup.html`: The HTML file for the extension's popup interface.
- `popup.js`: Handles the functionality of the toggle button in the popup.
- `manifest.json`: The manifest file that contains the extension's metadata.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.

2. Click the **Toggle Blocking** button to enable or disable website blocking. The button text and the badge on the extension icon will update to reflect the current blocking status.

## ScreenShots

![ss1](<ss-FocusMore(1).png>)
s
![ss2](<ss-FocusMore(2).png>)
