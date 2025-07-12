// js/ads.js

document.addEventListener("DOMContentLoaded", () => {
    const adContainer = document.getElementById("ad-container");
  
    const videos = [
      "https://youtu.be/bALXg6Pv53E",
      "https://youtu.be/3xqm--MYGV4",
      "https://youtu.be/1SLguJRqm1g"
    ];
  
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  
    if (adContainer) {
      adContainer.innerHTML = `
        <iframe 
          width="100%" 
          height="200" 
          src="${randomVideo}" 
          title="Реклама" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      `;
    }
  });
  