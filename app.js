const BDT_RATE = 120;
let currentTheme = localStorage.getItem("theme") || "light";

if(currentTheme === "dark"){
  document.body.classList.add("dark");
}

const products = [
  {
    category: "electronics",
    sub: "gaming",
    title: "Gaming Headset",
    price: 49.99,
    image: "(PUT IMAGE URL HERE)",
    link: "(PUT YOUR AMAZON AFFILIATE LINK HERE)"
  },
  {
    category: "books",
    sub: "manga",
    title: "Popular Manga Volume 1",
    price: 99.97 ,
    image: "https://m.media-amazon.com/images/I/81+R+a2MIQL._SL1500_.jpg",
    link: "https://www.amazon.com/Gachiakuta-9-Book-Complete-Collection-Book/dp/B0DKVXCXF5?crid=25GS112ES3HCB&dib=eyJ2IjoiMSJ9.b3o8tZfIp2vhPDHLgChtT9B4C7JX_JAd41oIFzrBeasWzU8GRuox_wd5nW5Z-XTP7yld_jl-DlvGb8msF9x2TcbW1efItJkWRH2VVodP8SVMmyFe6OVP4NsqHNDC5Lb9CBP6n3DP5ewHtpcES8rwtVJN9XRFWRPnRVSLAFusHN4oALqVi19rlDv2cW8ro9Z2Kuq0lxhD3WS5MPzzuyvnGxO5hanx51cPGMyEF5e7UQU.pB6nyypYSAf5XXpmjz83yj8YVcOYK3RZqjxLxxYXa0g&dib_tag=se&keywords=manga+gachiakuta+set&qid=1771856327&sprefix=manga+gachi%2Caps%2C355&sr=8-1&linkCode=ll2&tag=trendcartbd-20&linkId=1da5fe09ad65ed694e2217a8da0b71b3&language=en_US&ref_=as_li_ss_tl"
  },

   {
    category: "books",
    sub: "manga",
    title: "Popular Manga Volume 2",
    price: 245.00 ,
    image: "https://m.media-amazon.com/images/I/813xQsPvyRL._SL1500_.jpg",
    link: "https://www.amazon.com/Leveling-Manga-Collection-Books-Chugong/dp/1637995164?crid=1FTETXUULDNBI&dib=eyJ2IjoiMSJ9.X0BOOuAzK7WeORDt3jih945NuiUC_TW3OBZLvSECoDMoFerZ3Vq9dOCIO8_zRF9NiRKQCO8Jdx-rxPw9qYb2mzTx6WlzQnqf-yJPWHrVWx6isb3BSjAEyX0KBoDeX8Wtq3JC0XOAydC0QOT7VaHVs17Wz5CRnMG377IAAeGe7n-MOawRujdQ0mhNBc9C5gkv_AvVuY9lu_wuKT-oQOBi1Cs960JlY-pKcyoIE6jeXH4.LiSIWWCop1HEO2IwzFowBX-zWE0eGESUT_mvIMPrZxw&dib_tag=se&keywords=manga+solo+leveling+box+set&qid=1771856535&sprefix=manga+solo%2Caps%2C350&sr=8-1&linkCode=ll2&tag=trendcartbd-20&linkId=2ea5a632e15634d1e197cfc62b78228e&language=en_US&ref_=as_li_ss_tl"
  },

   {
    category: "books",
    sub: "manga",
    title: "Popular Manga Volume 3",
    price: 497.55  ,
    image: "https://m.media-amazon.com/images/I/A1rf2eKhb5L._SL1500_.jpg",
    link: "https://www.amazon.com/Berserk-Deluxe-Hardcover-Collection-Books/dp/1616599588?crid=1OX3RRF94UGR4&dib=eyJ2IjoiMSJ9.UJlbON9YVF36x6ocuCu2_rLvNwrQGT2COHRXXpxyekOO7Jsyr9fHPub_sQX8OAFxwpnLIXizy7yUZ1rrH5wGyLorX3r74o2Ahn_G_C5fZ8QtQmyDFneUIjnAZH2j6-g8NCwxoGRwGH-kC7bAuoeHjQlWUjMhAhaVhyq8UXESPTYtDJl8w4zKw7iFYBo7Na6hjDeRAcvLvcoJeBD_yys9pV2mRRXc7pKPEUZpfKbH0dY.lVYLX36jMqH3U70labH2Y6fvfjudZxQqyCro-GJ56HE&dib_tag=se&keywords=berserk+manga+box+set&qid=1771859197&s=books&sprefix=berser%2Cstripbooks-intl-ship%2C433&sr=1-2&linkCode=ll2&tag=trendcartbd-20&linkId=f3d26c8d0eefa967b982c699b3179655&language=en_US&ref_=as_li_ss_tl"
  },
       
   {
    category: "books",
    sub: "manga",
    title: "Popular Manga Volume 4",
    price:  299.00 ,
    image: "https://m.media-amazon.com/images/I/81+lAK01ciL._SL1500_.jpg",
    link: "https://www.amazon.com/Vagabond-VIZBIG-Complete-Collection-Takehiko/dp/B084RK3D53?crid=14KU37D2VSBC&dib=eyJ2IjoiMSJ9.2xY7eKHwW9LSGF07yn7S1z0k6flUBG7yBjUMBQ6Ou52QF73GNndsfSvdhILdG2OABj24Z6znELnnOt6a1pSYuhZE3r0hZfAFw7hT4mtyq5NWO4q8AMr0BXmsze7XETAjLalOspdXgaw8ZGNtfUtBFI0PQo8Ea-9qltRIP2iUmo-Y4MzTtmRT5vfT6QCPkbzSlGe3z5mqAp3DCjd9m9Qho0sA_o6RXqxQHFMi0TZ341U.O6rGOtIPJVDUuG_Nz9zriMi9FwUpr6LnWjnOdwZDGcU&dib_tag=se&keywords=vagabond+box+set&qid=1771859293&s=books&sprefix=vgabond%2Cstripbooks-intl-ship%2C609&sr=1-1&linkCode=ll2&tag=trendcartbd-20&linkId=e9bb10ed956c78a365496fc69897c0c1&language=en_US&ref_=as_li_ss_tl"
  },
        
   {
    category: "books",
    sub: "manga",
    title: "Popular Manga Volume 5",
    price:  116.89,
    image: "https://m.media-amazon.com/images/I/81X+0RW2tQL._SL1280_.jpg",
    link: "https://www.amazon.com/Goodnight-Punpun-Collection-Books-Asano/dp/9526538463?crid=1V8X2ROLJST5F&dib=eyJ2IjoiMSJ9.CqGFbxhy6N2DgznfoSARcdUksgWw6gwemjR9vJIj06G7K9DcDVS5k_SsFYW9WeLTrEg-dGH1_T256t_5fDC2Kr7GMUAdAp0eboPTC7XWN97Yg6swZMR6JSod6gz3Zux7xVS0C-3LCp7cHccvULwahA.z8Z2BgLCyGRBDRw2WeS7UbZyb6VgZsbp_R72ophK3CM&dib_tag=se&keywords=goodnight+punpun+full+book&qid=1771859378&sprefix=goodnight+punpun+full%2Caps%2C689&sr=8-1&linkCode=ll2&tag=trendcartbd-20&linkId=179c205f70900c17f91dd7f4c9480424&language=en_US&ref_=as_li_ss_tl"
  },
  
   {
    category: "books",
    sub: "manga",
    title: "Popular Manga Volume 6",
    price: 42.50 ,
    image: "https://m.media-amazon.com/images/I/81Wo3b3sNZL._SL1500_.jpg",
    link: "https://www.amazon.com/Blue-Lock-Season-Part-Manga/dp/B0CZQ5GD57?content-id=amzn1.sym.7d2d3bbd-26a2-4075-ac43-74eb944dc665%3Aamzn1.sym.7d2d3bbd-26a2-4075-ac43-74eb944dc665&crid=31SFO8AIAM1DO&cv_ct_cx=the+climber+full+set+manga&keywords=the+climber+full+set+manga&pd_rd_i=B0CZQ5GD57&pd_rd_r=a7d4335c-eb24-4a56-bfb1-9bf450d3de89&pd_rd_w=ruF9G&pd_rd_wg=oMFpO&pf_rd_p=7d2d3bbd-26a2-4075-ac43-74eb944dc665&pf_rd_r=095F7F7NXB3YQZZVDM94&qid=1771859499&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=the+climber+full+set+manga%2Caps%2C338&sr=1-3-4a0b18c3-7aa7-46cf-a15e-b807b62cb425-spons&aref=zae1aNrt6R&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWNfYnRm&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=edd1e64907ccb980bbac603d724b8a50&language=en_US&ref_=as_li_ss_tl"
  },
  
   {
    category: "books",
    sub: "manga",
    title: "Popular Manga Volume 7",
    price: 23.99 ,
    image: "https://m.media-amazon.com/images/I/81VkApOiIdL._SL1500_.jpg",
    link: "https://www.amazon.com/Homunculus-Omnibus-Vol-Hideo-Yamamoto/dp/1685797296?pd_rd_w=AtvaF&content-id=amzn1.sym.80d4c51c-5e2d-4cf4-a6f8-fde9512cf6a4&pf_rd_p=80d4c51c-5e2d-4cf4-a6f8-fde9512cf6a4&pf_rd_r=G8ADXA0XDD49B3EBWKWR&pd_rd_wg=9tVOc&pd_rd_r=c09fa83b-2d12-4139-9fc5-8a4295f8b90a&pd_rd_i=1685797296&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=26c50cfd40d138b18b0c84985be62d28&language=en_US&ref_=as_li_ss_tl"
  },
  
   {
    category: "books",
    sub: "webnovel",
    title: "Popular webnovel Volume 1",
    price:  16.00,
    image: "https://m.media-amazon.com/images/I/81BKBqWOY6L._SL1500_.jpg",
    link: "https://www.amazon.com/Lord-Mysteries-Vol-Clown-Part/dp/B0DQKLC79Z?crid=29RO9T0EHYUAL&dib=eyJ2IjoiMSJ9.zQnpdGX23Wb0kenuAT3lcuc71_xTZ6sfXe3xVwjOpN3q9011wRrddGQNAVLDv351ccjHsv-iXlODGNYc5W0pAu8-alyjnuYFIeiuiGDPmb5gfgCUcmHGtvf0tTq9Y8tzkP2Vrq69anOi7HKENXEDfeTw6g3ZMStzmcyMNgkaAB2ZeGCZGfXJvZ2XInApdZy1CM2yAXbrsse1YCCpphkspHc-5J_MVsg7-xxDhhVoowY.XGC7NWjcQ5lJ2aHEAaGnjgRtDad4XqzJmZduIBtR3tQ&dib_tag=se&keywords=light+novel&qid=1771859745&s=books&sprefix=l%2Cstripbooks-intl-ship%2C333&sr=1-2&linkCode=ll2&tag=trendcartbd-20&linkId=46c7a73326ca3cc92017e4956a5d7e54&language=en_US&ref_=as_li_ss_tl"
  },
  
   {
    category: "books",
    sub: "webnovel",
    title: "Popular webnovel Volume 2",
    price:  12.80,
    image: "https://m.media-amazon.com/images/I/71iwyy-U0WL._SL1500_.jpg",
    link: "https://www.amazon.com/Omniscient-Readers-Viewpoint-novel-Vol/dp/B0DK8D2642?crid=29RO9T0EHYUAL&dib=eyJ2IjoiMSJ9.ItMRwWmpULj_cyu2t6bT3E-VrDNL8bsGX3rGpGjc86fq9011wRrddGQNAVLDv351Ug2-F2UCw2TrPgli3VZx_ToZps4WBYHJWxLCTVU0Y-v5LH9R1Gw4FXA8DV42V7QpXogsMPr4P0pE54EgEpCrSZSJC7ZcqfJLo3TKyeFsYZVdrrkBLm-uYG66CJ9nFBNqnBgTS0XqiBX84NFwKPI8IXc-5J_MVsg7-xxDhhVoowY.eUQ9TzUI0UtI1u84pmpiK-fKVXKkOxkYQ6SJpS3uA9I&dib_tag=se&keywords=light+novel&qid=1771859835&s=books&sprefix=l%2Cstripbooks-intl-ship%2C333&sr=1-5&linkCode=ll2&tag=trendcartbd-20&linkId=980c9a380705923773e2b0d73228be51&language=en_US&ref_=as_li_ss_tl"
  }, 
  
   {
    category: "books",
    sub: "webnovel",
    title: "Popular webnovel Volume 3",
    price:  12.80,
    image: "https://m.media-amazon.com/images/I/81cNfgJEI-L._SL1500_.jpg",
    link: "https://www.amazon.com/Re-Zero-Starting-Another-World/dp/0316315303?crid=29RO9T0EHYUAL&dib=eyJ2IjoiMSJ9.ItMRwWmpULj_cyu2t6bT3E-VrDNL8bsGX3rGpGjc86fq9011wRrddGQNAVLDv351Ug2-F2UCw2TrPgli3VZx_ToZps4WBYHJWxLCTVU0Y-v5LH9R1Gw4FXA8DV42V7QpXogsMPr4P0pE54EgEpCrSZSJC7ZcqfJLo3TKyeFsYZVdrrkBLm-uYG66CJ9nFBNqnBgTS0XqiBX84NFwKPI8IXc-5J_MVsg7-xxDhhVoowY.eUQ9TzUI0UtI1u84pmpiK-fKVXKkOxkYQ6SJpS3uA9I&dib_tag=se&keywords=light+novel&qid=1771859835&s=books&sprefix=l%2Cstripbooks-intl-ship%2C333&sr=1-6&linkCode=ll2&tag=trendcartbd-20&linkId=112cf0781f8d61c01a4c65564391c9f3&language=en_US&ref_=as_li_ss_tl"
  },
  
   {
    category: "books",
    sub: "webnovel",
    title: "Popular webnovel Volume 4",
    price: 12.00,
    image: "https://m.media-amazon.com/images/I/91X6rx1HX5L._SL1500_.jpg",
    link: "https://www.amazon.com/dp/1975319273?_encoding=UTF8&pd_rd_w=tichu&pd_rd_wg=zFLxc&pd_rd_r=cc22d364-1c30-47c5-91c5-853446d72cae&content-id=amzn1.sym.476b1b7d-c787-4147-8a3c-fdef209103a1&linkCode=ll2&tag=trendcartbd-20&linkId=68d8d2f8226adba3a097b4366e779046&language=en_US&ref_=as_li_ss_tl"
  },
        
   {
    category: "books",
    sub: "webnovel",
    title: "Popular webnovel Volume 5",
    price: 5.99,
    image: "https://m.media-amazon.com/images/I/515fsT6ty4L._SL1000_.jpg",
    link: "https://www.amazon.com/dp/B0B7MJH9TK?_encoding=UTF8&pd_rd_w=OrEI9&content-id=amzn1.sym.68a48b3d-8323-44f6-bbc2-414df317110f&pf_rd_p=68a48b3d-8323-44f6-bbc2-414df317110f&pf_rd_r=B16PC3HPQH2CB08PB0NQ&pd_rd_wg=0herZ&pd_rd_r=2b0193dd-4e80-431f-9a02-cc04235e158a&linkCode=ll2&tag=trendcartbd-20&linkId=6802235e728730f72915419d82d7a0ec&language=en_US&ref_=as_li_ss_tl"
  },
  
 
   {
    category: "books",
    sub: "webnovel",
    title: "Popular webnovel Volume 6",
    price: 142.70 ,
    image: "https://m.media-amazon.com/images/I/811uqUkXl1L._SL1400_.jpg",
    link: "https://www.amazon.com/dp/197475829X?psc=1&pd_rd_i=197475829X&pd_rd_w=Y6w5c&content-id=amzn1.sym.8c2f9165-8e93-42a1-8313-73d3809141a2&pf_rd_p=8c2f9165-8e93-42a1-8313-73d3809141a2&pf_rd_r=DRV6ZMGDBCAX5SFJPRK8&pd_rd_wg=ZBBNn&pd_rd_r=255c756d-9dac-4d0a-8bae-2d112a2e7394&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&linkCode=ll2&tag=trendcartbd-20&linkId=57b06eb5b92ff6f7bac0611aa7ede8bd&language=en_US&ref_=as_li_ss_tl"
  },

   {
    category: "books",
    sub: "webnovel",
    title: "Popular webnovel Volume 7",
    price:9.59 ,
    image: "https://m.media-amazon.com/images/I/81Y3J1ghwrL._SL1500_.jpg",
    link: "https://www.amazon.com/Gokurakugai-Vol-1-Yuto-Sano/dp/197474356X?pd_rd_w=ueLEV&content-id=amzn1.sym.bb4a0aac-c2b4-4b4b-a0c8-9aa89b28dce3&pf_rd_p=bb4a0aac-c2b4-4b4b-a0c8-9aa89b28dce3&pf_rd_r=MPC1C19MCVWS92SY2CTS&pd_rd_wg=8YPen&pd_rd_r=92a4d163-b458-4489-ac06-4b277e5ababd&pd_rd_i=197474356X&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=addffde71201673353cef5e9a431a5a7&language=en_US&ref_=as_li_ss_tl"
  },

 {
    category: "books",
    sub: "Educational drawings",
    title: "Figure drawing book",
    price:35.00,
    image: "https://m.media-amazon.com/images/I/71Nvh-+9+kL._SL1000_.jpg",
    link: "https://www.amazon.com/Figure-Drawing-Invention-Michael-Hampton/dp/0615272819?pd_rd_w=iqJA0&content-id=amzn1.sym.c33ad739-91a9-476e-b522-fd0cf7ffda5c&pf_rd_p=c33ad739-91a9-476e-b522-fd0cf7ffda5c&pf_rd_r=JH289TSQKG1XAVTTRSAB&pd_rd_wg=cFlBU&pd_rd_r=ff82d9b2-ccb5-4bf8-b180-fab8f31761fc&pd_rd_i=0615272819&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=1ae8cb96a05dd00d72be7ccca14d1cde&language=en_US&ref_=as_li_ss_tl"
  },
  
  {
    category: "clothing",
    sub: "women",
    title: "Bangles",
    price: 12.99,
    image: "https://m.media-amazon.com/images/I/61zmeUSGmXL._AC_SX625_.jpg",
    link: "https://www.amazon.com/Fesciory-Leather-Bracelets-Multi-Layer-Bracelet/dp/B0BD5563WD?dib=eyJ2IjoiMSJ9.5wb9EtnRKRtNcr518aFUwOzI2V7Isl7yf_bivDHvek593THla9oShDI3bjpsPIvR3E9pDWQQYCWHq-o0PQy_ZOT2ebm9vq8-bNcD4Ng6fBoQ9xj0LKFbF-xW91sxuJuRF_970cbirqBFjP-lw2U0Ti01qfsgHG0tWLOHitU1KiOqOeBxXpmxyWCopi2f4L0mh3Q1yH_zAy1MAya9--gBqTtPNxCg1t7LOcD_1tDPX9XCjtYjs1o6HQnZOJ8vhg0R_FdnRFj1lDeBNGQwht1MuzpDQ4SIZjH8p-OMx4SLdlk.cPlqy9X6gZopoVDXi3273AYmFf9dYXlmMjKTHMCATO0&dib_tag=se&qid=1771861822&refinements=p_36%3A-2000%2Cp_n_g-1004232833091%3A2343351011&rnid=2343347011&s=fashion-womens-intl-ship&sr=1-5&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=575e8e6029daf230a156f4ed044c7961&language=en_US&ref_=as_li_ss_tl"
  },
  
  {
    category: "clothing",
    sub: "women",
    title: "Bangles",
    price: 9.99,
    image: "https://m.media-amazon.com/images/I/71LyXNYLHNL._AC_SY500_.jpg",
    link: "https://www.amazon.com/QIUTIMIY-Leather-Bracelets-Bracelet-Layered/dp/B0DY7Z3KVP?pd_rd_w=EVdEG&content-id=amzn1.sym.3d5af8a3-cce9-42ea-9ba5-183bb8c2673b&pf_rd_p=3d5af8a3-cce9-42ea-9ba5-183bb8c2673b&pf_rd_r=6MFYCS30WHYXAY6T39KY&pd_rd_wg=q3gmA&pd_rd_r=bc8faee6-a3b7-4b3d-877c-1393fa54d637&pd_rd_i=B0DY7XJQZ3&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=44ca6386d1015cba3874f152fff2adb7&language=en_US&ref_=as_li_ss_tl"
  },

];

function renderProducts(category, sub=null){
  const grid = document.getElementById(category+"Grid");
  grid.innerHTML = "";

  products
  .filter(p => p.category === category)
  .filter(p => sub ? p.sub === sub : true)
  .forEach(p => {

    const bdt = Math.round(p.price * BDT_RATE);

    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.title}</h3>
        <p>৳${bdt}  ($${p.price})</p>
        <a class="buy-btn" href="${p.link}" target="_blank">
        Buy on Amazon
        </a>
      </div>
    `;
  });
}

function showCategory(cat){
  document.querySelectorAll(".category-section")
  .forEach(sec => sec.classList.add("hidden"));

  document.getElementById(cat+"Section")
  .classList.remove("hidden");

  renderProducts(cat);
}

function filterSub(cat, sub){
  renderProducts(cat, sub);
}

/* SEARCH */
document.getElementById("searchBtn").addEventListener("click",()=>{
  const query = document.getElementById("searchInput").value.trim();
  if(!query) return;
  window.open(`https://www.amazon.com/s?k=${query.replace(/\s+/g,"+")}&tag=(PUT YOUR AFFILIATE TAG HERE)`);
});

/* SETTINGS */
document.getElementById("settingsBtn").addEventListener("click",()=>{
  document.getElementById("settingsPanel").classList.toggle("hidden");
});

/* DARK MODE */
document.getElementById("toggleTheme").addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark":"light"
  );
});

/* START */
showCategory("electronics");
