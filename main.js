
const input = document.querySelector('.main-text');


input.addEventListener('paste', openURL);

input.addEventListener('keyup', ({key}) => {
  
  if (key === 'Enter') openURL();
    
});


function openURL() {
  
  let url = 'https://www.youtube.com/playlist?list=';
  
  const channelId = input.textContent.trim();
  
  const playlistId = channelId.slice(0, 1) + 'U' + channelId.slice(2);
  
  url += playlistId;
  
  window.location.href = url;
  
}

