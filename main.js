
const input = document.querySelector('.main-text');


input.addEventListener('click', async () => {
  
  let text = await readClipboard();
  
  text = text.trim();
  
  if (text === '') return;
    
  openURL(text);
  
});


function openURL(channelId) {
    
  let url = 'https://www.youtube.com/playlist?list=';
    
  const playlistId = channelId.slice(0, 1) + 'U' + channelId.slice(2);
  
  url += playlistId;
  
  window.location.href = url;
  
}


// read clipboard
async function readClipboard() {
  
  const text = await navigator.clipboard.readText();

  return text;

}

