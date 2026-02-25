const BDT_RATE = 120;
let currentTheme = localStorage.getItem("theme") || "light";

if(currentTheme === "dark"){
  document.body.classList.add("dark");
}

const products = [
  {
    category: "electronics",
    sub: "gaming",
    title: "NUBWO Wireless Gaming Headset with Mic for Ps5 Ps4 PC, Zero Interference, 100-Hour Battery All-Day Play, 23ms Sync​ for Fortnite & Call of Duty/FPS Gamers, Triple Mode All Devices Compatible - Orange",
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/61cRrWcW-pL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/NUBWO-Wireless-Gaming-Headset-Microphone-PS5/dp/B08TBF4S42?_encoding=UTF8&pd_rd_w=82mLD&content-id=amzn1.sym.61d4ee60-9341-4d7a-912d-bc661951aa32&pf_rd_p=61d4ee60-9341-4d7a-912d-bc661951aa32&pf_rd_r=XZKPWV700JK7ZKH2A5WN&pd_rd_wg=sMylL&pd_rd_r=c8c1d0ad-b60e-4cc8-9b40-238cbf05c3e1&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=889b3211f7b109c4a188e475eb8c15de&language=en_US&ref_=as_li_ss_tl"
  },
 {
    category: "electronics",
    sub: "gaming",
    title: "acer Nitro V Gaming Laptop | Intel Core i7-13620H Processor | NVIDIA GeForce RTX 4050 Laptop GPU | 15.6inch FHD IPS 165Hz Display | 16GB DDR5 | 1TB Gen 4 SSD | Wi-Fi 6 | Backlit KB | ANV15-52-76NK",
    price:899.99  ,
    image: "https://m.media-amazon.com/images/I/71qcxp9fsxL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/i7-13620H-Processor-GeForce-Display-ANV15-52-76NK/dp/B0F6PLQ93N?crid=31QMUF5IX137E&dib=eyJ2IjoiMSJ9.NNJSIVMZBu-NsA5YY9BrCqY5ekVK_97Mh_I1r3t27bf173jK6Ago3B8qDTcjnZwp8gThixJkE5I7QsVNjdJ-gqW-IGAwf7493WgvC4lB2ZLsxMHifpi2GnAWXV_UnPfhvYuOite6QuA0ah3nq_-nVaSEZEYe1k8Zy3lQKktQwJ9HqkGqDBwyTwcsR1x2PbNq.x7w-LIayAZ34CiR5cPyJ7a5Kdx8ZwC-hS76r17Idif8&dib_tag=se&keywords=gaming+pc&qid=1772029268&s=computers-intl-ship&sprefix=gaming+%2Ccomputers-intl-ship%2C353&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=0307f4dc4f3e0819e56702d1b17344dd&language=en_US&ref_=as_li_ss_tl"
  }, 
       
  {
    category: "electronics",
    sub: "gaming",
    title: "KAMRUI Hyper H2 Mini PC with Intel Core 14450HX (10C/16T, up to 4.8GHz), 16GB RAM 512GB NVMe SSD, Triple 4K, HDMI, DP, USB-C, Ethernet, Mini Desktop Computer for Office, Business, Gaming",
    price: 469.99 ,
    image: "https://m.media-amazon.com/images/I/61MkUYRjkzL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B0G488CW54?th=1&linkCode=ll2&tag=trendcartbd-20&linkId=f62b35bb2094a61a4528c4c945db79bc&language=en_US&ref_=as_li_ss_tl"
  },

   
  {
    category: "electronics",
    sub: "gaming",
    title: "amFilm Auto-Alignment OneTouch for Nintendo Switch 2 Screen Protector [7.9''] 2025 Tempered Glass, Accessories, 30 seconds Installation, Bubble Free, Anti-Scratch, Touch Sensitive, Ultra-Clear [2Pack]",
    price: 8.99,
    image: "https://m.media-amazon.com/images/I/61eLt9bO17L._AC_SL1500_.jpg",
    link: "https://www.amazon.com/Auto-Alignment-Protector-Accessories-Installation-Anti-Scratch-Ultra-Clear/dp/B0DRCKDWD1?dib=eyJ2IjoiMSJ9.Vl1Es-mSIFY5OQg8fWP67HL2CXQhIV-6ZopcnLfujNKJxKb7wCiyYr7OSrXqTQIykBLqAUB9R2xMgGaLGxE-WPgu9v183Ejg3qpp2hFjLjQwpxzCwXjoQ6zy7P6kLLPYuPitGXd9hthPlGoM8t3M2XiSUAmcRwgRn5BOZm9fNd69mfBX7D7nm8XpeTfwjedWNfN7wBuG4E0q5EYKeVzl3ZDzRx9S784IauDbwMFaYAw.NhsxmxC4ZPWdZGDlxo6qI55YXhPn9eI8K0GnqBDkr08&dib_tag=se&qid=1772031604&s=videogames-intl-ship&sr=1-6&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=faeaef1c88f9296122f7dcfed42953f8&language=en_US&ref_=as_li_ss_tl"
  },

   
  {
    category: "electronics",
    sub: "gaming",
    title: "MARSDOCK 45W Charger for Nintendo Switch - 15V 2.6A AC Adapter Fast Charging with 5FT USB C Cord - Compatible with Switch Lite, OLED, Steam Deck - Support TV Mode",
    price: 16.99,
    image: "https://m.media-amazon.com/images/I/6170JKKerxL._SL1500_.jpg",
    link: "https://www.amazon.com/Charger-Nintendo-MARSDOCK-Charging-Compatible/dp/B0C7CLHFX7?dib=eyJ2IjoiMSJ9.Vl1Es-mSIFY5OQg8fWP67HL2CXQhIV-6ZopcnLfujNKJxKb7wCiyYr7OSrXqTQIykBLqAUB9R2xMgGaLGxE-WPgu9v183Ejg3qpp2hFjLjQwpxzCwXjoQ6zy7P6kLLPYuPitGXd9hthPlGoM8t3M2XiSUAmcRwgRn5BOZm9fNd69mfBX7D7nm8XpeTfwjedWNfN7wBuG4E0q5EYKeVzl3ZDzRx9S784IauDbwMFaYAw.NhsxmxC4ZPWdZGDlxo6qI55YXhPn9eI8K0GnqBDkr08&dib_tag=se&qid=1772031807&s=videogames-intl-ship&sr=1-14&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=77ce17c0d9c5af89919e0a71db948dc1&language=en_US&ref_=as_li_ss_tl"
  },

   
  {
    category: "electronics",
    sub: "gaming",
    title: "One Cable No Driver Laptop Screen Extender,14inch FHD IPS Triple Portable Monitor, Single USB-C Plug & Play Compatible with 13inch-16.5inch Windows & MacBook (M1/M2/M3)",
    price: 289.00 ,
    image: "https://m.media-amazon.com/images/I/71jZO2f+kPL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/ZokoTop-Screen-Extender-Portable-Compatible/dp/B0GG9PDW9D?dib=eyJ2IjoiMSJ9.vXjaZ5LQ60nRmS_W_8Noo6xf8NYxmCRguo36lvVEwpPD5fZ6JCh8OmCfQx_qFSatKyfRpzgCeMxBOaYQOZuDc_YJ6-4OgUlJPj7IPUlGDrPJeHEiO2fpY_fBJNv2YQsrEVkgLfhroFiaCctOIXBgMCfp4l-U6Tv9XjZNS5_uOaT8jWBXVpRosZBwzeorBlsDeHB1TreFRPMDGLroqajo1RnLt6Lt8aa6okPHHUly5o9IofOm97-F3Sw_wd37sUGIXw4jvPGE4gI-rxkOaWsVRCfwH4CVI2mVRCX8aMT-AZA.BAHfb3MhiJXr5mVIZ-w4VwlDjumN2sznSn5pBSMNf28&dib_tag=se&qid=1772031991&s=computers-intl-ship&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=4d45b646c1ee995ebac84f26c67427bd&language=en_US&ref_=as_li_ss_tl"
  },

   
  {
    category: "electronics",
    sub: "desining",
    title: "Metapen Pencil A8 for Apple iPad 2018-2025, (2X Faster Charge), Tilt Sensitivity, Pixel Precision, Stylus Pen for iPad 11/10/9/8/7/6th Gen, Pro 12.9/11/13-inch M4, Air 3/4/5/M2/M3, Mini 5/6th, Blue",
    price: 26.99 ,
    image: "https://m.media-amazon.com/images/I/51EzMdAK0uL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/Metapen-2018-2024-Precise-Sensitivity-13-inch/dp/B0C4L9C9TQ?dib=eyJ2IjoiMSJ9.F3rzoR5YypvL7mSW-vP-W3japlxczdvee4UQ1xUaMnRB6EeoeqUdygTf2olwkU_DxoZODCT-He3iBNAuFvnhlaauX_BdEjRBQsiPMHZGaQcgfJX1FgQmwk-ilALuVZVLA_2I1rEXLxTUTsSoBAi6Y5w6nqDQU6HCm8NhUranf9JwOksQmd-FStYl2s5ueR_zCfXfyrFV-QKxI0pVcAfaVUFtrGpwHFVfTNSN-cCyjoA8jA_vav2Ao8SJ0pnPXFD09rovt1gay29LX-Y7tT4sbb3cAWvAf453L55CmgRFNxo.0cSpTYdFr0M4swywjYIa0qIzwRRMarZmaJ0Hkm4UYcw&dib_tag=se&qid=1772032350&s=computers-intl-ship&sr=1-5&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=ed271687cb1c2d7c275c1cb6ec212a3d&language=en_US&ref_=as_li_ss_tl"
  },

   
  {
    category: "electronics",
    sub: "desining",
    title: "Hamile for iPad 11th 10th Generation Case with Keyboard - 7 Colors Backlit Wireless Detachable Folio Keyboard Cover with Pencil Holder for iPad 11-inch A16 2025 10th Gen 10.9 Inch 2022 (Pink)",
    price: 21.97,
    image: "https://m.media-amazon.com/images/I/61c+MlYZ9qL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/Hamile-iPad-10th-Generation-Keyboard/dp/B0C375272K?dib=eyJ2IjoiMSJ9.F3rzoR5YypvL7mSW-vP-W3japlxczdvee4UQ1xUaMnRB6EeoeqUdygTf2olwkU_DxoZODCT-He3iBNAuFvnhlaauX_BdEjRBQsiPMHZGaQcgfJX1FgQmwk-ilALuVZVLA_2I1rEXLxTUTsSoBAi6Y5w6nqDQU6HCm8NhUranf9JwOksQmd-FStYl2s5ueR_zCfXfyrFV-QKxI0pVcAfaVUFtrGpwHFVfTNSN-cCyjoA8jA_vav2Ao8SJ0pnPXFD09rovt1gay29LX-Y7tT4sbb3cAWvAf453L55CmgRFNxo.0cSpTYdFr0M4swywjYIa0qIzwRRMarZmaJ0Hkm4UYcw&dib_tag=se&qid=1772032803&s=computers-intl-ship&sr=1-20&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=e26ba1d6d82d3ee15163dc6fa0b8b32d&language=en_US&ref_=as_li_ss_tl"
  },

   
   
 {
    category: "electronics",
    sub: "desining",
    title: "Replacement Tips for Apple Pencil 2nd Generation/ 1st Generation Tips, iPencil Nibs Accessories for iPad Pro Pencil 2/1 Gen(4 Pack)",
    price:5.99,
    image: "https://m.media-amazon.com/images/I/51ljJxXlKVL._AC_SL1001_.jpg",
    link: "https://www.amazon.com/Replacement-Apple-Pencil-Generation-Accessories/dp/B0CJ2JH1KF?dib=eyJ2IjoiMSJ9.F3rzoR5YypvL7mSW-vP-W3japlxczdvee4UQ1xUaMnRB6EeoeqUdygTf2olwkU_DxoZODCT-He3iBNAuFvnhlaauX_BdEjRBQsiPMHZGaQcgfJX1FgQmwk-ilALuVZVLA_2I1rEXLxTUTsSoBAi6Y5w6nqDQU6HCm8NhUranf9JwOksQmd-FStYl2s5ueR_zCfXfyrFV-QKxI0pVcAfaVUFtrGpwHFVfTNSN-cCyjoA8jA_vav2Ao8SJ0pnPXFD09rovt1gay29LX-Y7tT4sbb3cAWvAf453L55CmgRFNxo.0cSpTYdFr0M4swywjYIa0qIzwRRMarZmaJ0Hkm4UYcw&dib_tag=se&qid=1772032803&s=computers-intl-ship&sr=1-26&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=ca9ce14072001415096e16abd60aeeff&language=en_US&ref_=as_li_ss_tl"
  },

    {
    category: "electronics",
    sub: "gaming",
    title: "PS5/Slim/Pro Stand for Disc & Digital Console, PS5 Cooling & Charging Station with RGB Lights, PS5 Controller Charger Built-in 3 Level & AUTO Adjustable Fan, PS5/Slim/Pro Accessories Comes 3 USB Ports",
    price: 35.14,
    image: "https://m.media-amazon.com/images/I/71IGxhZk29L._SL1500_.jpg",
    link: "https://www.amazon.com/Rysker-Lighting-Controller-Faceplates-Protector/dp/B0CLV1YDYS?qid=1772023492&s=electronics&sr=1-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGZfYnJvd3Nl&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=caccd39bce7704ac429871d67c0a66ce&language=en_US&ref_=as_li_ss_tl"
  },
  
    {
    category: "electronics",
    sub: "gaming",
    title: "OIVO PS5 Controller Charger with Fast Charging AC Adapter, PS5 Controller Charging Station Stand for PlayStation 5, Docking Station Replacement for PS 5 Accessories Kits",
    price: 17.99,
    image: "https://m.media-amazon.com/images/I/71GpgNkje8L._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B08LZGPPBH?pd_rd_i=B08LZGPPBH&pd_rd_w=wjzlG&content-id=amzn1.sym.386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_p=386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_r=99231NZ6JJ2532MYWM8K&pd_rd_wg=nimsG&pd_rd_r=5af5b46e-0cde-4c9f-8f2c-7b49752c99d3&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=667614d526260ffdb46b7955633926aa&language=en_US&ref_=as_li_ss_tl"
  },
  
    {
    category: "electronics",
    sub: "kitchen",
    title: "Ninja Kitchen System | 8-Cup Food Processor Bowl & 72 oz. Blender All-in-One | With (2) 16 oz. To-Go Cups | For Smoothies, Ice Crushing, Dough & More | 1500 Watt | Black | BL770",
    price: 171.99 ,
    image: "https://m.media-amazon.com/images/I/81ME5sqz5TL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/Ninja-Kitchen-BL770-Processor-Smoothies/dp/B00939I7EK?crid=1I7ZODV2U8J1X&dib=eyJ2IjoiMSJ9.OR4dH2Y2mB-e0QB5hy4plXqI9aK1CoM6J_vfH4vmh5xf8px3Kmi29k_KNIhnm98W2Bi8Snx_fs660iMzv5aNyEMs4ZPpk4SsDKme8WA3if2sX9ldnG5_16qQ8xs7ROvu6dsqWhO_fTSaacDHyrcovBlCTsM1nr_5A1S16He4oENvgZEIctAlw3mki-KML1Ibxcak-AYrb2e4dduVq3tRBCyZR4uLQIoxZFntG7eZkzc.cGGYtkVL5pr5xQDIb5rq7q9KPF3KXcbB2b8IaXXhcHQ&dib_tag=se&keywords=kitchen%2Belectronics&qid=1772023804&sprefix=kitchen%2Belec%2Caps%2C354&sr=8-4&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=89c966e0a9b22689dd8694608d5431c3&language=en_US&ref_=as_li_ss_tl"
  },
  
    {
    category: "electronics",
    sub: "kitchen",
    title: "Knife Set, Astercook 21 Pieces Knife Sets for Kitchen with Block, Dishwasher Safe Kitchen Knife Set with Built-in Sharpener, German Stainless Steel Black Knife Block Set",
    price: 49.99 ,
    image: "https://m.media-amazon.com/images/I/61Ed5NPvpDL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/Astercook-Kitchen-Dishwasher-Sharpener-Stainless/dp/B0BW91HX7D?pd_rd_w=8Xumz&content-id=amzn1.sym.bb4a0aac-c2b4-4b4b-a0c8-9aa89b28dce3&pf_rd_p=bb4a0aac-c2b4-4b4b-a0c8-9aa89b28dce3&pf_rd_r=8KBPZHAESCNM3M0ZB6T4&pd_rd_wg=6ITvC&pd_rd_r=c00058a1-5b55-49ef-bbfd-721ba8c0ab87&pd_rd_i=B0BW91HX7D&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=7e0702ce421e56583cb27a3046a00a24&language=en_US&ref_=as_li_ss_tl"
  },
  
    {
    category: "electronics",
    sub: "kitchen",
    title: "YUSWKO Red Milk Frother Handheld with 3 Heads, Coffee Whisk Foam Mixer with USB Rechargeable 3 Speeds, Electric Mini Hand Hand Frother for Latte, Cappuccino, Hot Chocolate, Egg",
    price: 25.99,
    image: "https://m.media-amazon.com/images/I/61GdUrYYtJL._AC_SX679_.jpg",
    link: "https://www.amazon.com/Stainless-Rechargeable-Adjustable-Chocolate-Cappuccino/dp/B08VD4RX6Y?content-id=amzn1.sym.11f03cd7-d882-4fed-ae42-aff13d15d142%3Aamzn1.sym.11f03cd7-d882-4fed-ae42-aff13d15d142&crid=1I7ZODV2U8J1X&cv_ct_cx=kitchen%2Belectronics&keywords=kitchen%2Belectronics&pd_rd_i=B08VD4RX6Y&pd_rd_r=796c32b7-6986-46ed-ba68-7b431d5fb7eb&pd_rd_w=YvayB&pd_rd_wg=ZRq0H&pf_rd_p=11f03cd7-d882-4fed-ae42-aff13d15d142&pf_rd_r=GZSB41A617WZCZ6NKQ7F&qid=1772024083&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=kitchen%2Belec%2Caps%2C354&sr=1-3-6e60e730-e094-43e9-99e8-1a4854cd27ff-spons&aref=lYMdDe34sF&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=95c3da7267eec2739d87188f846b3f26&language=en_US&ref_=as_li_ss_tl"
  },
  
    {
    category: "electronics",
    sub: "kitchen",
    title: "Qcen Juicer Machine, 500W Centrifugal Juicer Extractor with Wide Mouth 3” Feed Chute for Fruit Vegetable, Easy to Clean, Stainless Steel, BPA-free (Black)",
    price: 41.99,
    image: "https://m.media-amazon.com/images/I/71nonehjNMS._AC_SL1500_.jpg",
    link: "https://www.amazon.com/Centrifugal-Extractor-Vegetable-Stainless-QCen/dp/B08HM1CRDW?content-id=amzn1.sym.11f03cd7-d882-4fed-ae42-aff13d15d142%3Aamzn1.sym.11f03cd7-d882-4fed-ae42-aff13d15d142&crid=1I7ZODV2U8J1X&cv_ct_cx=kitchen%2Belectronics&keywords=kitchen%2Belectronics&pd_rd_i=B08HM1CRDW&pd_rd_r=796c32b7-6986-46ed-ba68-7b431d5fb7eb&pd_rd_w=YvayB&pd_rd_wg=ZRq0H&pf_rd_p=11f03cd7-d882-4fed-ae42-aff13d15d142&pf_rd_r=GZSB41A617WZCZ6NKQ7F&qid=1772024083&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=kitchen%2Belec%2Caps%2C354&sr=1-2-6e60e730-e094-43e9-99e8-1a4854cd27ff-spons&aref=ppkpvlVi6f&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=eda2a66eae5accfa302242c13782121d&language=en_US&ref_=as_li_ss_tl"
  },
  
    {
    category: "electronics",
    sub: "kitchen",
    title: "Electric Salt and Pepper Grinder Set Automatic Battery Pepper Mill Shakers Adjustable Coarseness Upgraded Larger Capacity with Led Home and Kitchen Appliances Birthday Gifts for Women Mom",
    price: 22.99 ,
    image: "https://m.media-amazon.com/images/I/71NpF4JP7HL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/Electric-Automatic-Adjustable-Coarseness-Upgraded/dp/B0DJSQQ1ZW?crid=1I7ZODV2U8J1X&dib=eyJ2IjoiMSJ9.8BMc85SBGRuxtGxbwooXvTl-wStIyLw4biDt1TSjgnZf8px3Kmi29k_KNIhnm98WovVesIQ3_fClCM4KFLyw5x6Hl7fW_-iPRi0E41-fcNLhXBqQIs-nfPnN5PBW3OqahYBTTmyBgLlHboAZm_-yG03o6yNuLn7Q69KhiC7I3iaV25XHhZcqfxZvURm621HBs6uw2p8_cs1iIOcRcGTWEJLngKzkAh0MGQ8qXLvG3C0.cNFwmxOAnvR_phFaeMuMtzSPH4QvlpmN_01AtdmjdTA&dib_tag=se&keywords=kitchen%2Belectronics&qid=1772024083&sprefix=kitchen%2Belec%2Caps%2C354&sr=8-15&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=f838fba317738b5695521cb74e0e94c6&language=en_US&ref_=as_li_ss_tl"
  },
  
    {
    category: "electronics",
    sub: "recreation",
    title: "Berserk Complete 1997 TV Series Marc Diraison (Actor), Naohito Takahashi (Director)  Format: Blu-ray",
    price: 48.24 ,
    image: "https://m.media-amazon.com/images/I/81bUe78VGCL._SL1500_.jpg",
    link: "https://www.amazon.com/Berserk-Complete-1997-TV-Blu-ray/dp/B0CSF4TTNS?brr=1&dib=eyJ2IjoiMSJ9.HjsAsaewS5eg7K6F3TmEAi66RG6bk2mWv9CIk7dGtaWTkgY5-GVY7SsLACTMNTfOtXIRTmH9kYou4G2G7YXJ4hY1B3RNvKzQOyOa7kuaNHK7s0PQlBxsZ9unu4Ixlz9rrdit9r2VAHv96HYYAn218k8Tn2R1h9TO2N_lpXy2aNqpSViLTVDYkdS0fNS557SyKjc0vtzaV5cOzvvdzRxB-I27_9mLLpd0nwgfm743JWg.IdtNT9VH5S6kEo6sLEqYIQGXcWKzlMqBsjyNb7G6UYM&dib_tag=se&qid=1772024686&rd=1&s=movies-tv&sr=1-4&linkCode=ll2&tag=trendcartbd-20&linkId=148641885001a2f75637f47b78f1824d&language=en_US&ref_=as_li_ss_tl"
  },
  
    {
    category: "electronics",
    sub: "recreation",
    title: "Grave of the Fireflies Steelbook",
    price: 13.83 ,
    image: "https://m.media-amazon.com/images/I/81ON8DARSpL._SL1500_.jpg",
    link: "https://www.amazon.com/Grave-Fireflies-Limited-Steelbook-Blu-ray/dp/B0F4X7K3Q3?brr=1&dib=eyJ2IjoiMSJ9.HjsAsaewS5eg7K6F3TmEAi66RG6bk2mWv9CIk7dGtaWTkgY5-GVY7SsLACTMNTfOtXIRTmH9kYou4G2G7YXJ4hY1B3RNvKzQOyOa7kuaNHK7s0PQlBxsZ9unu4Ixlz9rrdit9r2VAHv96HYYAn218k8Tn2R1h9TO2N_lpXy2aNqpSViLTVDYkdS0fNS557SyKjc0vtzaV5cOzvvdzRxB-I27_9mLLpd0nwgfm743JWg.IdtNT9VH5S6kEo6sLEqYIQGXcWKzlMqBsjyNb7G6UYM&dib_tag=se&qid=1772024686&rd=1&s=movies-tv&sr=1-5&linkCode=ll2&tag=trendcartbd-20&linkId=ec7607bd582e1b3badb418049a50ea17&language=en_US&ref_=as_li_ss_tl"
  },
  
  {
    category: "books",
    sub: "manga",
    title: "Gachiakuta Series 9-Book Complete Collection Set (Book #1 to #9) - Action-Packed, Dark Fantasy, and High-Stakes Adventure",
    price: 99.97 ,
    image: "https://m.media-amazon.com/images/I/81+R+a2MIQL._SL1500_.jpg",
    link: "https://www.amazon.com/Gachiakuta-9-Book-Complete-Collection-Book/dp/B0DKVXCXF5?crid=25GS112ES3HCB&dib=eyJ2IjoiMSJ9.b3o8tZfIp2vhPDHLgChtT9B4C7JX_JAd41oIFzrBeasWzU8GRuox_wd5nW5Z-XTP7yld_jl-DlvGb8msF9x2TcbW1efItJkWRH2VVodP8SVMmyFe6OVP4NsqHNDC5Lb9CBP6n3DP5ewHtpcES8rwtVJN9XRFWRPnRVSLAFusHN4oALqVi19rlDv2cW8ro9Z2Kuq0lxhD3WS5MPzzuyvnGxO5hanx51cPGMyEF5e7UQU.pB6nyypYSAf5XXpmjz83yj8YVcOYK3RZqjxLxxYXa0g&dib_tag=se&keywords=manga+gachiakuta+set&qid=1771856327&sprefix=manga+gachi%2Caps%2C355&sr=8-1&linkCode=ll2&tag=trendcartbd-20&linkId=1da5fe09ad65ed694e2217a8da0b71b3&language=en_US&ref_=as_li_ss_tl"
  },

   {
    category: "books",
    sub: "manga",
    title: "Solo Leveling Manga Series 14 Collection Books Set Vol 1-14 by Chugong",
    price: 245.00 ,
    image: "https://m.media-amazon.com/images/I/813xQsPvyRL._SL1500_.jpg",
    link: "https://www.amazon.com/Leveling-Manga-Collection-Books-Chugong/dp/1637995164?crid=1FTETXUULDNBI&dib=eyJ2IjoiMSJ9.X0BOOuAzK7WeORDt3jih945NuiUC_TW3OBZLvSECoDMoFerZ3Vq9dOCIO8_zRF9NiRKQCO8Jdx-rxPw9qYb2mzTx6WlzQnqf-yJPWHrVWx6isb3BSjAEyX0KBoDeX8Wtq3JC0XOAydC0QOT7VaHVs17Wz5CRnMG377IAAeGe7n-MOawRujdQ0mhNBc9C5gkv_AvVuY9lu_wuKT-oQOBi1Cs960JlY-pKcyoIE6jeXH4.LiSIWWCop1HEO2IwzFowBX-zWE0eGESUT_mvIMPrZxw&dib_tag=se&keywords=manga+solo+leveling+box+set&qid=1771856535&sprefix=manga+solo%2Caps%2C350&sr=8-1&linkCode=ll2&tag=trendcartbd-20&linkId=2ea5a632e15634d1e197cfc62b78228e&language=en_US&ref_=as_li_ss_tl"
  },

   {
    category: "books",
    sub: "manga",
    title: "Berserk Deluxe Hardcover Collection, Books 1-13 ",
    price: 497.55  ,
    image: "https://m.media-amazon.com/images/I/A1rf2eKhb5L._SL1500_.jpg",
    link: "https://www.amazon.com/Berserk-Deluxe-Hardcover-Collection-Books/dp/1616599588?crid=1OX3RRF94UGR4&dib=eyJ2IjoiMSJ9.UJlbON9YVF36x6ocuCu2_rLvNwrQGT2COHRXXpxyekOO7Jsyr9fHPub_sQX8OAFxwpnLIXizy7yUZ1rrH5wGyLorX3r74o2Ahn_G_C5fZ8QtQmyDFneUIjnAZH2j6-g8NCwxoGRwGH-kC7bAuoeHjQlWUjMhAhaVhyq8UXESPTYtDJl8w4zKw7iFYBo7Na6hjDeRAcvLvcoJeBD_yys9pV2mRRXc7pKPEUZpfKbH0dY.lVYLX36jMqH3U70labH2Y6fvfjudZxQqyCro-GJ56HE&dib_tag=se&keywords=berserk+manga+box+set&qid=1771859197&s=books&sprefix=berser%2Cstripbooks-intl-ship%2C433&sr=1-2&linkCode=ll2&tag=trendcartbd-20&linkId=f3d26c8d0eefa967b982c699b3179655&language=en_US&ref_=as_li_ss_tl"
  },
       
   {
    category: "books",
    sub: "manga",
    title: "Vagabond (VIZBIG Edition) Complete 12 Books Collection Manga Set (Vol 1-12) by Takehiko Inoue ",
    price:  299.00 ,
    image: "https://m.media-amazon.com/images/I/81+lAK01ciL._SL1500_.jpg",
    link: "https://www.amazon.com/Vagabond-VIZBIG-Complete-Collection-Takehiko/dp/B084RK3D53?crid=14KU37D2VSBC&dib=eyJ2IjoiMSJ9.2xY7eKHwW9LSGF07yn7S1z0k6flUBG7yBjUMBQ6Ou52QF73GNndsfSvdhILdG2OABj24Z6znELnnOt6a1pSYuhZE3r0hZfAFw7hT4mtyq5NWO4q8AMr0BXmsze7XETAjLalOspdXgaw8ZGNtfUtBFI0PQo8Ea-9qltRIP2iUmo-Y4MzTtmRT5vfT6QCPkbzSlGe3z5mqAp3DCjd9m9Qho0sA_o6RXqxQHFMi0TZ341U.O6rGOtIPJVDUuG_Nz9zriMi9FwUpr6LnWjnOdwZDGcU&dib_tag=se&keywords=vagabond+box+set&qid=1771859293&s=books&sprefix=vgabond%2Cstripbooks-intl-ship%2C609&sr=1-1&linkCode=ll2&tag=trendcartbd-20&linkId=e9bb10ed956c78a365496fc69897c0c1&language=en_US&ref_=as_li_ss_tl"
  },
        
   {
    category: "books",
    sub: "manga",
    title: "Goodnight Punpun Volume 1-7 Collection 7 Books Set By Inio Asano",
    price:  116.89,
    image: "https://m.media-amazon.com/images/I/81X+0RW2tQL._SL1280_.jpg",
    link: "https://www.amazon.com/Goodnight-Punpun-Collection-Books-Asano/dp/9526538463?crid=1V8X2ROLJST5F&dib=eyJ2IjoiMSJ9.CqGFbxhy6N2DgznfoSARcdUksgWw6gwemjR9vJIj06G7K9DcDVS5k_SsFYW9WeLTrEg-dGH1_T256t_5fDC2Kr7GMUAdAp0eboPTC7XWN97Yg6swZMR6JSod6gz3Zux7xVS0C-3LCp7cHccvULwahA.z8Z2BgLCyGRBDRw2WeS7UbZyb6VgZsbp_R72ophK3CM&dib_tag=se&keywords=goodnight+punpun+full+book&qid=1771859378&sprefix=goodnight+punpun+full%2Caps%2C689&sr=8-1&linkCode=ll2&tag=trendcartbd-20&linkId=179c205f70900c17f91dd7f4c9480424&language=en_US&ref_=as_li_ss_tl"
  },
  
   {
    category: "books",
    sub: "manga",
    title: "Blue Lock Season 1 Part 1 Manga Box Set (Blue Lock Manga Box Set)",
    price: 42.50 ,
    image: "https://m.media-amazon.com/images/I/81Wo3b3sNZL._SL1500_.jpg",
    link: "https://www.amazon.com/Blue-Lock-Season-Part-Manga/dp/B0CZQ5GD57?content-id=amzn1.sym.7d2d3bbd-26a2-4075-ac43-74eb944dc665%3Aamzn1.sym.7d2d3bbd-26a2-4075-ac43-74eb944dc665&crid=31SFO8AIAM1DO&cv_ct_cx=the+climber+full+set+manga&keywords=the+climber+full+set+manga&pd_rd_i=B0CZQ5GD57&pd_rd_r=a7d4335c-eb24-4a56-bfb1-9bf450d3de89&pd_rd_w=ruF9G&pd_rd_wg=oMFpO&pf_rd_p=7d2d3bbd-26a2-4075-ac43-74eb944dc665&pf_rd_r=095F7F7NXB3YQZZVDM94&qid=1771859499&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=the+climber+full+set+manga%2Caps%2C338&sr=1-3-4a0b18c3-7aa7-46cf-a15e-b807b62cb425-spons&aref=zae1aNrt6R&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWNfYnRm&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=edd1e64907ccb980bbac603d724b8a50&language=en_US&ref_=as_li_ss_tl"
  },
  
   {
    category: "books",
    sub: "manga",
    title: "Homunculus (Omnibus) Vol. 1-2",
    price: 23.99 ,
    image: "https://m.media-amazon.com/images/I/81VkApOiIdL._SL1500_.jpg",
    link: "https://www.amazon.com/Homunculus-Omnibus-Vol-Hideo-Yamamoto/dp/1685797296?pd_rd_w=AtvaF&content-id=amzn1.sym.80d4c51c-5e2d-4cf4-a6f8-fde9512cf6a4&pf_rd_p=80d4c51c-5e2d-4cf4-a6f8-fde9512cf6a4&pf_rd_r=G8ADXA0XDD49B3EBWKWR&pd_rd_wg=9tVOc&pd_rd_r=c09fa83b-2d12-4139-9fc5-8a4295f8b90a&pd_rd_i=1685797296&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=26c50cfd40d138b18b0c84985be62d28&language=en_US&ref_=as_li_ss_tl"
  },
     
 {
    category: "books",
    sub: "manga",
    title: "Hell's Paradise: Jigokuraku Complete Box Set: Includes volumes 1-13 with premium ",
    price:142.70 ,
    image: "https://m.media-amazon.com/images/I/811uqUkXl1L._SL1400_.jpg",
    link: "https://www.amazon.com/dp/197475829X?psc=1&pd_rd_i=197475829X&pd_rd_w=EGL7F&content-id=amzn1.sym.8c2f9165-8e93-42a1-8313-73d3809141a2&pf_rd_p=8c2f9165-8e93-42a1-8313-73d3809141a2&pf_rd_r=QNW06JNPQTRGRGZ8YT99&pd_rd_wg=Q9nap&pd_rd_r=6e91ed6f-e6b3-4792-b325-2d8831bf0183&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&linkCode=ll2&tag=trendcartbd-20&linkId=561999706fb259cd82c6284e8b3cae6e&language=en_US&ref_=as_li_ss_tl"
  },
                 
 {
    category: "books",
    sub: "manga",
    title: "Sakamoto Days, Vol. 20 ",
    price:9.59 ,
    image: "https://m.media-amazon.com/images/I/81MUXNWUooL._SL1500_.jpg",
    link: "https://www.amazon.com/Sakamoto-Days-Vol-Yuto-Suzuki/dp/1974762300?pd_rd_w=zpO9B&content-id=amzn1.sym.1db06c01-2868-43e5-b772-15226cedca7d&pf_rd_p=1db06c01-2868-43e5-b772-15226cedca7d&pf_rd_r=9FQM05AV8PM10M0MM4GT&pd_rd_wg=wRXFh&pd_rd_r=ed399ca7-9cf5-4690-8f42-a46615fb4318&pd_rd_i=1974762300&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=221fd28ee9732359bc86329e034b66c6&language=en_US&ref_=as_li_ss_tl"
  },
                   
 {
    category: "books",
    sub: "manga",
    title: "Zom 100: Bucket List of the Dead, Vol. 1",
    price:8.75 ,
    image: "https://m.media-amazon.com/images/I/81a7O+gbBAL._SL1500_.jpg",
    link: "https://www.amazon.com/dp/197472056X?_encoding=UTF8&pd_rd_w=MJUmc&content-id=amzn1.sym.476b1b7d-c787-4147-8a3c-fdef209103a1&pf_rd_p=476b1b7d-c787-4147-8a3c-fdef209103a1&pf_rd_r=XDA57521V0ZKA9M7AQF9&pd_rd_wg=eKrrn&pd_rd_r=a8e26a78-9d63-48c4-bbe7-ab0c2ca051ad&linkCode=ll2&tag=trendcartbd-20&linkId=e434ada4c37e3f79142c0b704d002e9f&language=en_US&ref_=as_li_ss_tl"
  },
  
 {
    category: "books",
    sub: "manga",
    title: "Zom 100: Bucket List of the Dead, Vol. 2",
    price:11.99 ,
    image: "https://m.media-amazon.com/images/I/81+eNnhHEJL._SL1500_.jpg",
    link: "https://www.amazon.com/Zom-100-Bucket-List-Dead/dp/1974720667?pd_rd_w=cfNpJ&content-id=amzn1.sym.dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_p=dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_r=NY7NX2NXY8S1N1EJVD1Q&pd_rd_wg=vOfdD&pd_rd_r=084cb41b-2f4e-43ec-9453-8dd70ba1f925&pd_rd_i=1974720667&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=8087c4990930600885ed3ab0a6fc4a92&language=en_US&ref_=as_li_ss_tl"
  },
  
 {
    category: "books",
    sub: "manga",
    title: "Zom 100: Bucket List of the Dead, Vol. 3",
    price:10.39 ,
    image: "https://m.media-amazon.com/images/I/815ZNiBkvGS._SL1500_.jpg",
    link: "https://www.amazon.com/Zom-100-Bucket-List-Dead/dp/1974720675?pd_rd_w=Y1v3m&content-id=amzn1.sym.dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_p=dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_r=4CY4ZZPRZJYJCJMRB4MR&pd_rd_wg=a2l2c&pd_rd_r=0ce968f2-869f-492e-ab7b-6e85f895fc97&pd_rd_i=1974720675&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=bf6fc4f65e884abe88932c3296e322b8&language=en_US&ref_=as_li_ss_tl"
  },
           
 {
    category: "books",
    sub: "manga",
    title: "Zom 100: Bucket List of the Dead, Vol. 4",
    price:10.39 ,
    image: "https://m.media-amazon.com/images/I/81ffQA4N3PL._SL1500_.jpg",
    link: "https://www.amazon.com/Zom-100-Bucket-List-Dead/dp/197472297X?pd_rd_w=OfkSE&content-id=amzn1.sym.dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_p=dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_r=GAJT8CEC5NRT5Z8G3D26&pd_rd_wg=v6UbB&pd_rd_r=716f6a1c-416e-445d-a582-0cd75e10a1aa&pd_rd_i=197472297X&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=13806724ff0e7f7d384fba2033925b18&language=en_US&ref_=as_li_ss_tl"
  },
       
 {
    category: "books",
    sub: "manga",
    title: "Tokyo Ghoul Complete Box Set: Includes vols. 1-14 with premium",
    price:119.99,
    image: "https://m.media-amazon.com/images/I/71r8O-UtuML._SL1500_.jpg ",
    link: "https://www.amazon.com/Tokyo-Ghoul-Complete-Box-Set/dp/1974703185?pd_rd_w=KToJj&content-id=amzn1.sym.dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_p=dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_r=JTNQEZK8C1V8ZR6VABDW&pd_rd_wg=w1hcK&pd_rd_r=69294824-ec45-47b6-bb3b-352156798dd9&pd_rd_i=1974703185&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=649f36786302358f5b18e871eed5675e&language=en_US&ref_=as_li_ss_tl"
  },
       
 {
    category: "books",
    sub: "manga",
    title: "Death Note Complete Box Set",
    price:91.99 ,
    image: "https://m.media-amazon.com/images/I/71teEs2FRpL._SL1500_.jpg",
    link: "https://www.amazon.com/Death-Note-Box-Vol-s-1-13/dp/142152581X?pd_rd_w=6CosH&content-id=amzn1.sym.dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_p=dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_r=B42YZP8XSC16ZQ79E3GQ&pd_rd_wg=Z8Tdq&pd_rd_r=585ab833-09bd-4376-89d0-75e711836c5f&pd_rd_i=142152581X&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=71dd579d2fb39aab6a890e6fe229214d&language=en_US&ref_=as_li_ss_tl"
  },
          
 {
    category: "books",
    sub: "manga",
    title: "Cyberpunk: Edgerunners MADNESS Volume 1",
    price:11.99 ,
    image: "https://m.media-amazon.com/images/I/91EeegGz3gL._SL1500_.jpg",
    link: "https://www.amazon.com/dp/1506752926?psc=1&pd_rd_i=1506752926&pd_rd_w=Cr7a5&content-id=amzn1.sym.8c2f9165-8e93-42a1-8313-73d3809141a2&pf_rd_p=8c2f9165-8e93-42a1-8313-73d3809141a2&pf_rd_r=MKJW5BM4AW02E5PJ7Y18&pd_rd_wg=TNl8S&pd_rd_r=e5ac2196-4eca-44c0-8b20-4a35c8f48024&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&linkCode=ll2&tag=trendcartbd-20&linkId=4e9318bc40477db983a9b5ae3a66b9cb&language=en_US&ref_=as_li_ss_tl"
  },
       
 {
    category: "books",
    sub: "fiction",
    title: "Elden Ring: Official Art Book Volume III: Shadow of the Erdtree",
    price:55.79 ,
    image: "https://m.media-amazon.com/images/I/81zCQObN+dL._SL1500_.jpg",
    link: "https://www.amazon.com/Elden-Ring-Official-Shadow-Erdtree/dp/177294405X?pd_rd_w=1EN0p&content-id=amzn1.sym.1db06c01-2868-43e5-b772-15226cedca7d&pf_rd_p=1db06c01-2868-43e5-b772-15226cedca7d&pf_rd_r=H6PXFHAF20XH8H5AP3DV&pd_rd_wg=6fUme&pd_rd_r=65e1aad8-1c1a-42e2-8d07-a592a7a3e73c&pd_rd_i=177294405X&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=1762da0d480f073b146a3a1c00110b7e&language=en_US&ref_=as_li_ss_tl"
  },
   
 {
    category: "books",
    sub: "fiction",
    title: "Dark Souls II: Design Works",
    price:40.79,
    image: "https://m.media-amazon.com/images/I/71bWcKfZN1L._SL1500_.jpg",
    link: "https://www.amazon.com/Dark-Souls-II-Design-Works/dp/1927925568?pd_rd_w=SVAtB&content-id=amzn1.sym.bb4a0aac-c2b4-4b4b-a0c8-9aa89b28dce3&pf_rd_p=bb4a0aac-c2b4-4b4b-a0c8-9aa89b28dce3&pf_rd_r=NAY0VC7VZBSSJM8JKKX9&pd_rd_wg=u2PTC&pd_rd_r=905bdf6a-b03e-483a-9303-52681d55f708&pd_rd_i=1927925568&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=260d9c8f6dd6557e9a96d1e2a2b69a06&language=en_US&ref_=as_li_ss_tl"
  },
         
 {
    category: "books",
    sub: "manga",
    title: "NieR: Automata World Guide Volume 1 ",
    price:24.17 ,
    image: "https://m.media-amazon.com/images/I/91rtLh5HTBL._SL1500_.jpg",
    link: "https://www.amazon.com/dp/150671031X?_encoding=UTF8&pd_rd_w=vQmTg&content-id=amzn1.sym.476b1b7d-c787-4147-8a3c-fdef209103a1&pf_rd_p=476b1b7d-c787-4147-8a3c-fdef209103a1&pf_rd_r=0PZZWPDFFNS49Z1RX57A&pd_rd_wg=IrCp6&pd_rd_r=4f3dc4b4-b382-429c-b6a6-9feb213ed3bd&linkCode=ll2&tag=trendcartbd-20&linkId=3fad03451fc08d9ef554ac5daf9c1a57&language=en_US&ref_=as_li_ss_tl"
  },
      
 {
    category: "books",
    sub: "fiction",
    title: "Wild Dark Shore: Reese's Book Club Pick (A Novel) Audible Logo",
    price:17.70,
    image: "https://m.media-amazon.com/images/I/91Xi1csX5-L._SL1500_.jpg",
    link: "https://www.amazon.com/Wild-Dark-Shore-A-Novel/dp/B0D4B16D3T?crid=28V35KVS5NC4J&dib=eyJ2IjoiMSJ9.ov09u-zBKv7NIM2mvkKltizsoBhRXi43zIrDOrfirGR8PCr3W7b-SciR7bd5iq_8Wn_tG4pCCLt82sImvmeGR2pJKF1MtGFMCKlwhbtNAsLwKBWcYt4tJ2BofDE6qDUy9dkEI9IpQ4cTBr4C8GM-LgDXF8VtNQzDG2nskFdB4JWEMU94HSRZcaH-KCD7eTc9B7W6HGLmJgaa3Kya7DHUy-YlktEJx8CZItyXlqnvmtM.GyeYcuk5P3dRIrscT1ZpZcFRR90aysDVOMTkRGswNg8&dib_tag=se&keywords=dark+fiction&qid=1771949477&s=books&sprefix=dark+fiction%2Cstripbooks-intl-ship%2C359&sr=1-7&linkCode=ll2&tag=trendcartbd-20&linkId=9088f70451d46d6e9e5170e1eb5cc992&language=en_US&ref_=as_li_ss_tl"
  },
   
 {
    category: "books",
    sub: "fiction",
    title: "Migrations ",
    price:9.96,
    image: "https://m.media-amazon.com/images/I/81MSRkzn72L._SL1500_.jpg",
    link: "https://www.amazon.com/dp/B083QP78X6?_encoding=UTF8&plink=eGVK7b11QwC2jLLE&pd_rd_w=URrSZ&content-id=amzn1.sym.cb6a8264-f09c-4007-81e7-72f278fc1a13&pf_rd_p=cb6a8264-f09c-4007-81e7-72f278fc1a13&pf_rd_r=QP7W53HZ8CB0F3ZNAZ09&pd_rd_wg=oQZdO&pd_rd_r=96729fa2-e095-4573-9cb2-c7b163a2c205&linkCode=ll2&tag=trendcartbd-20&linkId=daf48475198a90975350a90f5588de42&language=en_US&ref_=as_li_ss_tl"
  },
   
   {
    category: "books",
    sub: "webnovel",
    title: "Lord of Mysteries, Vol. 1: The Clown, Part I (Volume 1) ",
    price:  16.00,
    image: "https://m.media-amazon.com/images/I/81BKBqWOY6L._SL1500_.jpg",
    link: "https://www.amazon.com/Lord-Mysteries-Vol-Clown-Part/dp/B0DQKLC79Z?crid=29RO9T0EHYUAL&dib=eyJ2IjoiMSJ9.zQnpdGX23Wb0kenuAT3lcuc71_xTZ6sfXe3xVwjOpN3q9011wRrddGQNAVLDv351ccjHsv-iXlODGNYc5W0pAu8-alyjnuYFIeiuiGDPmb5gfgCUcmHGtvf0tTq9Y8tzkP2Vrq69anOi7HKENXEDfeTw6g3ZMStzmcyMNgkaAB2ZeGCZGfXJvZ2XInApdZy1CM2yAXbrsse1YCCpphkspHc-5J_MVsg7-xxDhhVoowY.XGC7NWjcQ5lJ2aHEAaGnjgRtDad4XqzJmZduIBtR3tQ&dib_tag=se&keywords=light+novel&qid=1771859745&s=books&sprefix=l%2Cstripbooks-intl-ship%2C333&sr=1-2&linkCode=ll2&tag=trendcartbd-20&linkId=46c7a73326ca3cc92017e4956a5d7e54&language=en_US&ref_=as_li_ss_tl"
  },
  
   {
    category: "books",
    sub: "webnovel",
    title: "Omniscient Reader's Viewpoint (novel), Vol. 1",
    price:  12.80,
    image: "https://m.media-amazon.com/images/I/71iwyy-U0WL._SL1500_.jpg",
    link: "https://www.amazon.com/Omniscient-Readers-Viewpoint-novel-Vol/dp/B0DK8D2642?crid=29RO9T0EHYUAL&dib=eyJ2IjoiMSJ9.ItMRwWmpULj_cyu2t6bT3E-VrDNL8bsGX3rGpGjc86fq9011wRrddGQNAVLDv351Ug2-F2UCw2TrPgli3VZx_ToZps4WBYHJWxLCTVU0Y-v5LH9R1Gw4FXA8DV42V7QpXogsMPr4P0pE54EgEpCrSZSJC7ZcqfJLo3TKyeFsYZVdrrkBLm-uYG66CJ9nFBNqnBgTS0XqiBX84NFwKPI8IXc-5J_MVsg7-xxDhhVoowY.eUQ9TzUI0UtI1u84pmpiK-fKVXKkOxkYQ6SJpS3uA9I&dib_tag=se&keywords=light+novel&qid=1771859835&s=books&sprefix=l%2Cstripbooks-intl-ship%2C333&sr=1-5&linkCode=ll2&tag=trendcartbd-20&linkId=980c9a380705923773e2b0d73228be51&language=en_US&ref_=as_li_ss_tl"
  }, 
  
   {
    category: "books",
    sub: "webnovel",
    title: "Re:Zero: Starting Life in Another World, Vol. 1",
    price:  12.80,
    image: "https://m.media-amazon.com/images/I/81cNfgJEI-L._SL1500_.jpg",
    link: "https://www.amazon.com/Re-Zero-Starting-Another-World/dp/0316315303?crid=29RO9T0EHYUAL&dib=eyJ2IjoiMSJ9.ItMRwWmpULj_cyu2t6bT3E-VrDNL8bsGX3rGpGjc86fq9011wRrddGQNAVLDv351Ug2-F2UCw2TrPgli3VZx_ToZps4WBYHJWxLCTVU0Y-v5LH9R1Gw4FXA8DV42V7QpXogsMPr4P0pE54EgEpCrSZSJC7ZcqfJLo3TKyeFsYZVdrrkBLm-uYG66CJ9nFBNqnBgTS0XqiBX84NFwKPI8IXc-5J_MVsg7-xxDhhVoowY.eUQ9TzUI0UtI1u84pmpiK-fKVXKkOxkYQ6SJpS3uA9I&dib_tag=se&keywords=light+novel&qid=1771859835&s=books&sprefix=l%2Cstripbooks-intl-ship%2C333&sr=1-6&linkCode=ll2&tag=trendcartbd-20&linkId=112cf0781f8d61c01a4c65564391c9f3&language=en_US&ref_=as_li_ss_tl"
  },
  
   {
    category: "books",
    sub: "webnovel",
    title: "Solo Leveling, Vol. 1 (novel) (Volume 1)",
    price: 12.00,
    image: "https://m.media-amazon.com/images/I/91X6rx1HX5L._SL1500_.jpg",
    link: "https://www.amazon.com/dp/1975319273?_encoding=UTF8&pd_rd_w=tichu&pd_rd_wg=zFLxc&pd_rd_r=cc22d364-1c30-47c5-91c5-853446d72cae&content-id=amzn1.sym.476b1b7d-c787-4147-8a3c-fdef209103a1&linkCode=ll2&tag=trendcartbd-20&linkId=68d8d2f8226adba3a097b4366e779046&language=en_US&ref_=as_li_ss_tl"
  },
        
   {
    category: "books",
    sub: "webnovel",
    title: "Shadow Slave: Book1 Kindle Edition",
    price: 5.99,
    image: "https://m.media-amazon.com/images/I/515fsT6ty4L._SL1000_.jpg",
    link: "https://www.amazon.com/dp/B0B7MJH9TK?_encoding=UTF8&pd_rd_w=OrEI9&content-id=amzn1.sym.68a48b3d-8323-44f6-bbc2-414df317110f&pf_rd_p=68a48b3d-8323-44f6-bbc2-414df317110f&pf_rd_r=B16PC3HPQH2CB08PB0NQ&pd_rd_wg=0herZ&pd_rd_r=2b0193dd-4e80-431f-9a02-cc04235e158a&linkCode=ll2&tag=trendcartbd-20&linkId=6802235e728730f72915419d82d7a0ec&language=en_US&ref_=as_li_ss_tl"
  },
  
   {
    category: "books",
    sub: "webnovel",
    title: "Gokurakugai, Vol. 1",
    price:9.59 ,
    image: "https://m.media-amazon.com/images/I/81Y3J1ghwrL._SL1500_.jpg",
    link: "https://www.amazon.com/Gokurakugai-Vol-1-Yuto-Sano/dp/197474356X?pd_rd_w=ueLEV&content-id=amzn1.sym.bb4a0aac-c2b4-4b4b-a0c8-9aa89b28dce3&pf_rd_p=bb4a0aac-c2b4-4b4b-a0c8-9aa89b28dce3&pf_rd_r=MPC1C19MCVWS92SY2CTS&pd_rd_wg=8YPen&pd_rd_r=92a4d163-b458-4489-ac06-4b277e5ababd&pd_rd_i=197474356X&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=addffde71201673353cef5e9a431a5a7&language=en_US&ref_=as_li_ss_tl"
  },

 {
    category: "books",
    sub: "educational",
    title: "Figure Drawing: Design and Invention",
    price:35.00,
    image: "https://m.media-amazon.com/images/I/71Nvh-+9+kL._SL1000_.jpg",
    link: "https://www.amazon.com/Figure-Drawing-Invention-Michael-Hampton/dp/0615272819?pd_rd_w=iqJA0&content-id=amzn1.sym.c33ad739-91a9-476e-b522-fd0cf7ffda5c&pf_rd_p=c33ad739-91a9-476e-b522-fd0cf7ffda5c&pf_rd_r=JH289TSQKG1XAVTTRSAB&pd_rd_wg=cFlBU&pd_rd_r=ff82d9b2-ccb5-4bf8-b180-fab8f31761fc&pd_rd_i=0615272819&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=1ae8cb96a05dd00d72be7ccca14d1cde&language=en_US&ref_=as_li_ss_tl"
  },
        
 {
    category: "books",
    sub: "educational",
    title: "Teaching with AI: A Practical Guide to a New Era of Human Learning",
    price:24.15,
    image: "https://m.media-amazon.com/images/I/71dgU6mf1jL._SL1500_.jpg",
    link: "https://www.amazon.com/Teaching-AI-Practical-Guide-Learning/dp/B0D1LMC3S2?crid=37S4K6SO93FCG&dib=eyJ2IjoiMSJ9.m2AH8dNjC01XdzmkLGVjxehSzBVFRMHHiyvKoA0sBumFTwFaitj0uw7epqcr78vvJAm4qgtoqhVlqOuktv1plG64PUzfvXiT9FSuRzqifmx00CeG-AG-g2-pVttz4ko3LNsc2xEUtWRhoNjMhl0TSxTGj4KkPbOwCXNiuUeYIsTHmwXuJfSKWGeDg9CLBMGdtPP9QPw6O1zVQL7f0l1naT_38MTpKZGlMZ3FyvyeLhI.67putZAeUZXuF8GNaG28VQAYjdwn0Ij2N10CYCNS-Do&dib_tag=se&keywords=education+books&qid=1771946769&s=books&sprefix=education%2Cstripbooks-intl-ship%2C346&sr=1-6&linkCode=ll2&tag=trendcartbd-20&linkId=31dcf284c785b35949f10b7c63a20783&language=en_US&ref_=as_li_ss_tl"
  },
   
 {
    category: "books",
    sub: "manga",
    title: "20th Century Boys: The Perfect Edition, Vol. 1",
    price:18.39,
    image: "https://m.media-amazon.com/images/I/91w+aQVuEyL._SL1500_.jpg",
    link: "https://www.amazon.com/20th-Century-Boys-Perfect-Vol/dp/1421599619?pd_rd_w=e70k8&content-id=amzn1.sym.1db06c01-2868-43e5-b772-15226cedca7d&pf_rd_p=1db06c01-2868-43e5-b772-15226cedca7d&pf_rd_r=T3NEWNBFWVVRS2Y1GXHM&pd_rd_wg=8wRwK&pd_rd_r=deae4b39-889d-42b8-bb6e-cb535d7c34c2&pd_rd_i=1421599619&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=0e0c3f39e8dc908d4fe63281b2ab26de&language=en_US&ref_=as_li_ss_tl"
  },
   
 {
    category: "books",
    sub: "manga",
    title: "BLAME! Movie Edition: The Electrofishers' Escape ",
    price:12.95,
    image: "https://m.media-amazon.com/images/I/81ndMXu9NlL._SL1500_.jpg",
    link: "https://www.amazon.com/dp/1947194542?_encoding=UTF8&pd_rd_w=Ehxmg&content-id=amzn1.sym.476b1b7d-c787-4147-8a3c-fdef209103a1&pf_rd_p=476b1b7d-c787-4147-8a3c-fdef209103a1&pf_rd_r=65G0G5PEN0PWC2E3VTTB&pd_rd_wg=b3y5w&pd_rd_r=78122663-203c-4bdd-b483-7643384d9ab9&linkCode=ll2&tag=trendcartbd-20&linkId=9e9207d9f424663193276e084c5f327c&language=en_US&ref_=as_li_ss_tl"
  },
  
 {
    category: "books",
    sub: "educational",
    title: "Architecture: Form, Space, and Order 5th Edition",
    price:34.11,
    image: "https://m.media-amazon.com/images/I/81O5ssvpOJL._SL1500_.jpg",
    link: "https://www.amazon.com/Architecture-Form-Space-Order/dp/1119853370?crid=EWWRH0ELXW26&dib=eyJ2IjoiMSJ9.VxCJDweCDIHoEwUlwbeWCwANB_9D3SOs-bT3Z59gscBoW6uagf6VKnFhyxQdpSTaecN6A-tLuksD7IDuUaDj_WEOmK0yjud7i9x2NjWJqM_vV6TnuOEnmfJZ0fPADSWtUptsKoeTxOTNTx2VK__KwaNrmy8yTlcLA9m5YaQ0Pyp-jnM1v_3Xl9FHdzjgo80gWw60R_Kc15apyoAfN3PQXG0e6qp88hq9u9uTxIoPfNo.81CIbCyj7i7TVwXHXM0gD99Pazbvw4ICM8AfhN09zgA&dib_tag=se&keywords=architecture+books&qid=1771950234&s=books&sprefix=architecture%2Cstripbooks-intl-ship%2C350&sr=1-5&linkCode=ll2&tag=trendcartbd-20&linkId=8e5a005a8a75480fbf38bdcfcc55b5a5&language=en_US&ref_=as_li_ss_tl"
  },
    
 {
    category: "books",
    sub: "educational",
    title: "Don't Believe Everything You Think (Expanded Edition): Why Your Thinking Is The Beginning & End Of Suffering (Books By Joseph Nguyen)",
    price:8.97,
    image: "https://m.media-amazon.com/images/I/41rmBYPMsUL._SY445_SX342_FMwebp_.jpg",
    link: "https://www.amazon.com/Dont-Believe-Everything-Think-Expanded/dp/B0D47VYQMY?_encoding=UTF8&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-8&pf_rd_r=VW41PDBG0JNWNTRR5S43&pf_rd_p=2a74faf9-89c0-4d28-b9a0-5146fc6374a8&pf_rd_t=&pf_rd_i=549028&linkCode=ll2&tag=trendcartbd-20&linkId=14fa1f5cf4d12e47f6f912cbf53dba92&language=en_US&ref_=as_li_ss_tl"
  },
  
 {
    category: "books",
    sub: "educational",
    title: "Always Remember: The Boy, the Mole, the Fox, the Horse and the Storm",
    price:18.37,
    image: "https://m.media-amazon.com/images/I/91fSsf24MyL._SL1500_.jpg",
    link: "https://www.amazon.com/Always-Remember-Mole-Horse-Storm/dp/0593994825?_encoding=UTF8&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-8&pf_rd_r=VW41PDBG0JNWNTRR5S43&pf_rd_p=2a74faf9-89c0-4d28-b9a0-5146fc6374a8&pf_rd_t=&pf_rd_i=549028&linkCode=ll2&tag=trendcartbd-20&linkId=847e325cced3c3156fe0aa9e7f85c021&language=en_US&ref_=as_li_ss_tl"
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
    
{
    category: "clothing",
    sub: "men",
    title: "willochra 1-9 Adjustable Sunglasses Moonglass-Nd Filter Lenses Adjustable Tint Rounded Polarized Eyewear for Men",
    price: 26.99,
    image: "https://m.media-amazon.com/images/I/51T0Rx9sCyL._AC_SX679_.jpg",
    link: "https://www.amazon.com/willochra-Adjustable-Sunglasses-Moonglass-Nd-Polarized/dp/B0F3TNTG6C?content-id=amzn1.sym.11f03cd7-d882-4fed-ae42-aff13d15d142%3Aamzn1.sym.11f03cd7-d882-4fed-ae42-aff13d15d142&crid=2C0XEY49GVWWR&cv_ct_cx=Adjustable%2BPolarized%2BSunglass&keywords=Adjustable%2BPolarized%2BSunglass&pd_rd_i=B0F3TNTG6C&pd_rd_r=b81f0071-64e7-40ac-9dfe-7750dba9a162&pd_rd_w=2xsYk&pd_rd_wg=eY7YI&pf_rd_p=11f03cd7-d882-4fed-ae42-aff13d15d142&pf_rd_r=GM4GV6RCHPK24T51B4YD&qid=1771950761&s=books&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=adjustable%2Bpolarized%2Bsunglass%2Cstripbooks-intl-ship%2C531&sr=1-3-6e60e730-e094-43e9-99e8-1a4854cd27ff-spons&aref=2pRzbqsaDJ&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=35b61356cbc53511bc68c1bc20f6f888&language=en_US&ref_=as_li_ss_tl"
  },
    
{
    category: "clothing",
    sub: "men",
    title: "1-9 Adjustable Tint Sunglasses - Polarized ND Lens, UV400 Round Frame for Men & Women(Hard Case)",
    price: 25.88,
    image: "https://m.media-amazon.com/images/I/51rek2od+AL._AC_SX679_.jpg",
    link: "https://www.amazon.com/BroBlackDog-Adjustable-Sunglasses-Polarized-Moonglass/dp/B0FMY588MS?content-id=amzn1.sym.11f03cd7-d882-4fed-ae42-aff13d15d142%3Aamzn1.sym.11f03cd7-d882-4fed-ae42-aff13d15d142&crid=2C0XEY49GVWWR&cv_ct_cx=Adjustable+Polarized+Sunglass&keywords=Adjustable+Polarized+Sunglass&pd_rd_i=B0FMY588MS&pd_rd_r=2e906318-032d-40dd-8ad9-71927f8c1b11&pd_rd_w=mStIt&pd_rd_wg=FiZB8&pf_rd_p=11f03cd7-d882-4fed-ae42-aff13d15d142&pf_rd_r=9PW2BTYH2KS6DH62ZYZE&qid=1771950881&s=books&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=adjustable+polarized+sunglass%2Cstripbooks-intl-ship%2C531&sr=1-1-6e60e730-e094-43e9-99e8-1a4854cd27ff-spons&aref=8hSIECfGqK&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=c3fdadd7751e89a39bc56e5fa2202c79&language=en_US&ref_=as_li_ss_tl"
  },
  
{
    category: "clothing",
    sub: "men",
    title: "PJ PAUL JONES Men's Polo Shirts Short Sleeve Textured Cable Knit Shirts Casual Stretchy Golf Polo Stylish Old Money Tops",
    price: 19.99 ,
    image: "https://m.media-amazon.com/images/I/71hEllZo6zL._AC_SX679_.jpg",
    link: "https://www.amazon.com/PJ-PAUL-JONES-Textured-Lightweight/dp/B0FY6DHXFS?content-id=amzn1.sym.11f03cd7-d882-4fed-ae42-aff13d15d142%3Aamzn1.sym.11f03cd7-d882-4fed-ae42-aff13d15d142&crid=3R57NGJ1GC2DA&cv_ct_cx=T-Shirt%2Bpolo&keywords=T-Shirt%2Bpolo&pd_rd_i=B0FY6DHXFS&pd_rd_r=0c8fd220-7c74-4cd9-a145-a097c1d558fb&pd_rd_w=RjuPR&pd_rd_wg=SAcxA&pf_rd_p=11f03cd7-d882-4fed-ae42-aff13d15d142&pf_rd_r=5X63HKAMQYYFHJ65RGV3&qid=1771951241&s=books&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=t-shirt%2Bpolo%2Cstripbooks-intl-ship%2C652&sr=1-2-6e60e730-e094-43e9-99e8-1a4854cd27ff-spons&aref=5zdHv3pwyS&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=d321854e5c534367e8137ccfda7b0050&language=en_US&ref_=as_li_ss_tl"
  },
    
{
    category: "clothing",
    sub: "men",
    title: "HOTake Men's Casual Cotton Linen Pants Relaxed Fit Flat Front Expandable Waist Trousers",
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/51UdpFdoFxL._AC_SY741_.jpg",
    link: "https://www.amazon.com/HOTake-Clothes-Casual-Straight-Trousers/dp/B0FK5DGDK8?crid=3FKWV288DT268&dib=eyJ2IjoiMSJ9.EAdf6xJesE-65TJKzNcPcVjoQJ_LWOR8i4CuTnoANgGOxaFx6nnc3S4jmBHZ9Vb6QUwHjLGRIBIQkphHO4NgLEEWWW6wyjCsqKlQ-jm2zJ-ecmFbse_V85qtp3Mi84Gs-lDejBDEYasTw5Z_JlQ50wgWcVsV1xoG8P0jPKQrUmOdFYXfZp_ahiQIN4MJsf325fARdyKYRvsYRdHdu6nON1cZntIc_5gsRx7vfdFrxEdDSrMENOi3ZSvHj1WFpSdDfqc_lvE04mha3IVPWbhqY6uHUVV_PmurSanUIZgLOlo.rzDiuCwKdig0hfAhfZDo9apVf9_VMdB2v6ThkkXNEA4&dib_tag=se&keywords=old%2Bmoney%2Bclothes%2Bmen&qid=1771951387&sprefix=old%2Bmoney%2Caps%2C543&sr=8-45&th=1&psc=1&linkCode=ll2&tag=trendcartbd-20&linkId=1c5020e25857315225f8ea2b65cb719e&language=en_US&ref_=as_li_ss_tl"
  }
    

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
