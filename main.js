
const input = document.querySelector('.main-text');


input.addEventListener('paste', (e) => {
  
  e.preventDefault();
  
  const text = e.clipboardData.getData('text');
  
  input.textContent = text;
  
  openURL();

});

input.addEventListener('keyup', (e) => {
  
  if (e.key === 'Enter') {
    
    e.preventDefault();
    
    openURL();
    
  }
    
});

input.addEventListener('click', async () => {
  
  const text = await readClipboard();
  
  if (text.trim() === '') return;
  
  input.textContent = text;
  
  openURL();
  
});


function openURL() {
  
  let url = 'https://www.youtube.com/playlist?list=';
  
  const channelId = input.textContent.trim();
  
  const playlistId = channelId.slice(0, 1) + 'U' + channelId.slice(2);
  
  url += playlistId;
  
  window.location.href = url;
  
}



// read clipboard
async function readClipboard() {
  
  const text = await navigator.clipboard.readText();

  return text;

}

