// js/ads.js

document.addEventListener("DOMContentLoaded", () => {
    const adContainer = document.getElementById("ad-container");
  
    // Відео з YouTube (в форматі embed)
    const videos = [
      "https://www.youtube.com/embed/bALXg6Pv53E",
      "https://www.youtube.com/embed/3xqm--MYGV4",
      "https://www.youtube.com/embed/1SLguJRqm1g"
    ];
  
    // Картинки з посиланнями
    const imageAds = [
      {
        imageUrl: "/assets/ads/ad1.jpg",
        link: "https://www.englishdom.com/dynamicus/blog-post/000/002/242/1619513204_content_700x455.jpg"
      },
      {
        imageUrl: "/assets/ads/ad2.gif",
        link: "https://github.com/MolibDen25"
      }
    ];
  
    // Власні рекламні блоки
    const customAds = [
      // Реклама замовлення
      `
      <div class="text-center">
        <p>Тут може бути ваша реклама</p>
        <a href="mailto:molibden2504@gmail.com?subject=Хочу замовити рекламу" class="btn btn-primary btn-sm">Замовити рекламу</a>
      </div>
      `,
      // Підтримка автора
      `
      <div class="text-center">
        <p>Підтримайте автора</p>
        <a href="https://send.monobank.ua" class="btn btn-outline-success btn-sm">Monobank</a>
        <a href="https://patreon.com" class="btn btn-outline-danger btn-sm">Patreon</a>
      </div>
      `,
      // Інші роботи автора
      `
      <div class="text-center">
        <p>Підписуйтеся на інші роботи автора</p>
        <div class="d-flex flex-wrap justify-content-center gap-2">
          <a href="https://youtube.com/@xodo-25" target="_blank"><img src="/assets/ads/yt1.jpg" width="32"></a>
          <a href="https://youtube.com/@MusikODO" target="_blank"><img src="/assets/ads/yt2.jpg" width="32"></a>
          <a href="https://youtube.com/@Moli_25" target="_blank"><img src="/assets/ads/yt3.jpg" width="32"></a>
          <a href="https://youtube.com/@NightCoreFreeMusic" target="_blank"><img src="/assets/ads/yt4.jpg" width="32"></a>
          <a href="https://youtube.com/@OrderedMusic" target="_blank"><img src="/assets/ads/yt5.jpg" width="32"></a>
          <a href="https://youtube.com/@AMVMusikODO" target="_blank"><img src="/assets/ads/yt6.jpg" width="32"></a>
          <a href="https://youtube.com/@OstapenkoDO" target="_blank"><img src="/assets/ads/yt7.jpg" width="32"></a>
          <a href="https://youtube.com/@MolibDen_25" target="_blank"><img src="/assets/ads/yt8.jpg" width="32"></a>
        </div>
      </div>
      `
    ];
  
    const ads = [
      ...videos.map(video => ({ type: "video", content: video })),
      ...imageAds.map(ad => ({ type: "image", content: ad })),
      ...customAds.map(html => ({ type: "custom", content: html }))
    ];
  
    const randomAd = ads[Math.floor(Math.random() * ads.length)];
  
    if (!adContainer) return;
  
    if (randomAd.type === "video") {
      adContainer.innerHTML = `
        <iframe 
          width="100%" 
          height="200" 
          src="${randomAd.content}" 
          title="Реклама" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      `;
    } else if (randomAd.type === "image") {
      adContainer.innerHTML = `
        <a href="${randomAd.content.link}" target="_blank">
          <img src="${randomAd.content.imageUrl}" alt="Реклама" class="img-fluid">
        </a>
      `;
    } else if (randomAd.type === "custom") {
      adContainer.innerHTML = randomAd.content;
    }
  });
  