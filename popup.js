document.getElementById('fetch-title').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    document.getElementById('title').innerText = tab.title;
  });
