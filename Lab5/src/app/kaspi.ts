export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    link: string;
    rating: number;
    category: number; //smartphones, pc, tv, accessories
    likes: number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Iphone 13',
      price: 1159.99,
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
      image: '../assets/img/1.jpg',
      rating: 185023,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
      category: 1,
      likes: 0
    },
    {
      id: 2,
      name: 'MacBook Air 2022',
      price: 1319.97,
      description: 'Обновленная в 2022 году линейка MacBook Air компании Apple, как и ранее, объединяет ультрабуки в тонком (11 мм) и легком (1.24 кг) алюминиевом корпусе. ',
      image: '../assets/img/2.jpg',
      rating:  17167,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/?c=750000000#!/item',
      category: 2,
      likes: 0
    },
    {
      id: 3,
      name: 'TV LG',
      price: 3023.90,
      description: '8K 196sm diagonal',
      image: '../assets/img/3.jpg',
      rating: 61536,
      link: 'https://kaspi.kz/shop/p/lg-77c1rla-196-sm-belyi-103038965/?c=750000000#!/item',
      category: 3,
      likes: 0
    },
    {
      id: 4,
      name: 'Samsung TV',
      price: 3028.97,
      description: 'Qled 8K 216sm diagonal',
      image: '../assets/img/4.jpg',
      rating:  292358,
      link: 'https://kaspi.kz/shop/p/samsung-neo-qe85qn90aauxce-216-sm-chernyi-103334007/?c=750000000#!/item',
      category: 3,
      likes: 0
    },

    {
      id: 5,
      name: 'Airpods 3',
      price: 213,
      description: 'Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания. ',
      image: '../assets/img/5.jpg',
      rating:  18145,
      link: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item',
      category: 4,
      likes: 0

    },
    {
      id: 6,
      name: 'GeForce RTX 4090 Phantom',
      price: 4015.15,
      description: 'The NVIDIA® GeForce RTX™ 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics.',
      image: '../assets/img/6.jpg',
      rating:  86634,
      link: 'https://kaspi.kz/shop/p/gainward-geforce-rtx-4090-phantom-ned4090019sb-1020p-24-gb-106873080/?c=750000000#!/item',
      category: 2,
      likes: 0
    },
    {
      id: 7,
      name: 'Logitech G Pro X Superlight',
      price: 16.09,
      description: 'Мышь беспроводная Logitech PRO X SUPERLIGHT с розовым цветовым решением корпуса отлично подойдет для динамичного гейминга и обеспечит уверенный контроль над курсором во время интернет-баталий.',
      image: '../assets/img/7.jpg',
      rating: 130950,
      link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-rozovyi-105681243/?c=750000000#!/item',
      category: 2,
      likes: 0
    },
    {
      id: 8,
      name: 'Iphone 14 pro',
      price: 1999.86,
      description: 'The iPhone 14 Pro comes with a 6.1-inch ProMotion OLED display with 1-120Hz adaptive refresh rates, Dolby Vision.',
      image: '../assets/img/8.jpg',
      rating:  130950,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item',
      category: 1,
      likes: 0
    },
    {
      id: 9,
      name: 'Case for iPhone 11',
      price: 28.70,
      description: 'OTTERBOX COMMUTER SERIES Case for iPhone 11 - MINT WAY (SURF SPRAY/AQUIFER)',
      image: '../assets/img/9.jpg',
      rating: 2741,
      link: 'https://kaspi.kz/shop/p/golden-concept-croco-embossed-leather-dlja-iphone-11-pro-sinii-100358249/?c=750000000#!/item',
      category: 4,
      likes: 0
    },
    {
      id: 10,
      name: 'Monitor',
      price: 213.00,
      description: 'LG 24MP400-B 24” Full HD (1920 x 1080) IPS Display with 3-Side Virtually Borderless Design, AMD FreeSync and OnScreen Control – Black',
      image: '../assets/img/10.jpg',
      rating:  4581,
      link: 'https://kaspi.kz/shop/p/sanc-m2942qvh-seryi-108213360/?c=750000000#!/item',
      category: 2,
      likes: 0
    },
    {
      id: 11,
      name: 'Samsung Galaxy S22',
      price: 900.00,
      description: 'Samsung Galaxy S22 просто великолепен.  Утонченные лицевые панели гармонично сочетаются с изысканным корпусом. Роскошный вид дополняет лаконичная система линейных камер.',
      image: '../assets/img/11.jpg',
      rating:  12407,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8mNjbx0XkEX9RU9viYhgMea6ypehAotcazGTosX8fg5qUylkkPCDscaAktmEALw_wcB#!/item',
      category: 1,
      likes: 0
    },
    {
      id: 12,
      name: 'Samsung Galaxy Z Fold 3',
      price: 2049.00,
      description: 'Measured diagonally, Galaxy Z Fold3 5G’s Cover Screen size is 6.2" in a full rectangle and 6.1" accounting for the rounded corners. The actual viewable area is smaller due to the rounded corners and camera hole.',
      image: '../assets/img/12.jpg',
      rating:  63130,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold-3-12-512gb-zelenyi-102033320/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8mNjbx0XkEX9RU9viYhgMea6ypehAotcazGTosX8fg5qUylkkPCDscaAktmEALw_wcB#!/item',
      category: 1,
      likes: 0
    },
    {
      id: 13,
      name: 'Xiaomi 12S Ultra',
      price: 1498.99,
      description: 'The Xiaomi 12S Ultra comes with 6.73-inch AMOLED display with 120Hz refresh rate and Qualcomm Snapdragon 8+ Gen 1 processor.',
      image: '../assets/img/13.jpg',
      rating:  4581,
      link: 'https://kaspi.kz/shop/p/xiaomi-12s-ultra-12-gb-512-gb-zelenyi-106955261/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8mNjbx0XkEX9RU9viYhgMea6ypehAotcazGTosX8fg5qUylkkPCDscaAktmEALw_wcB#!/item',
      category: 1,
      likes: 0
    },
    {
      id: 14,
      name: 'Xiaomi TV P1 55',
      price: 809.99,
      description: 'Инновационный трехсторонний безрамочный дизайн обеспечивает более высокое соотношение размера экрана и корпуса, а также углы обзора 178° для более реалистичного изображения и приятного просмотра.',
      image: '../assets/img/14.jpg',
      rating:  300,
      link: 'https://kaspi.kz/shop/p/xiaomi-tv-p1-55-l55m6-6arg-140-sm-chernyi-102702029/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8mNjbx0XkEX9RU9viYhgMea6ypehAotcazGTosX8fg5qUylkkPCDscaAktmEALw_wcB#!/item',
      category: 3,
      likes: 0
    },
    {
      id: 15,
      name: 'Sony XR65A90JCEP',
      price: 5113.00,
      description: 'диагональ: 65 дюйм, разрешение: 3840x2160, поддержка HD: 4K HDR',
      image: '../assets/img/15.jpg',
      rating:  58040,
      link: 'https://kaspi.kz/shop/p/sony-xr65a90jcep-165-sm-chernyi-103012959/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8mNjbx0XkEX9RU9viYhgMea6ypehAotcazGTosX8fg5qUylkkPCDscaAktmEALw_wcB#!/item',
      category: 3,
      likes: 0
    },
    {
      id: 16,
      name: ' Tesla 40S605BFS',
      price: 313.00,
      description: 'этот телевизор с сертифицированной ОС Android TV 9 и множеством удивительных возможностей! Практически неограниченные возможности.',
      image: '../assets/img/16.jpg',
      rating:  35986,
      link: 'https://kaspi.kz/shop/p/tesla-40s605bfs-102-sm-chernyi-100957739/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8mNjbx0XkEX9RU9viYhgMea6ypehAotcazGTosX8fg5qUylkkPCDscaAktmEALw_wcB#!/item',
      category: 3,
      likes: 0
    },
    {
      id: 17,
      name: 'Apple Watch Series 8',
      price: 533.00,
      description: 'Apple Watch Series 8 has an innovative new sensor that tracks your temperature while you sleep, so you can see changes over time.',
      image: '../assets/img/17.jpg',
      rating:  35986,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8mNjbx0XkEX9RU9viYhgMea6ypehAotcazGTosX8fg5qUylkkPCDscaAktmEALw_wcB#!/item',
      category: 4,
      likes: 0
    },
    {
      id: 18,
      name: 'Apple AirPods Max',
      price: 836.00,
      description: 'Apple AirPods Max сможет полностью изменить ваше представление о полноразмерных наушниках. Данная модель разработана с применением первоклассных материалов и передовых технологий.',
      image: '../assets/img/18.jpg',
      rating:  1231,
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8mNjbx0XkEX9RU9viYhgMea6ypehAotcazGTosX8fg5qUylkkPCDscaAktmEALw_wcB#!/item',
      category: 4,
      likes: 0
    },
    {
      id: 19,
      name: 'Vega Limited 844083',
      price: 8054.00,
      description: 'процессор: Intel Core i9 13900, размер оперативной памяти: 64 Гб,объем SSD: 2000 Гб, видеопроцессор: NVidia GeForce RTX RTX 4090',
      image: '../assets/img/19.jpg',
      rating:  6156,
      link: 'https://kaspi.kz/shop/p/vega-limited-844083-chernyi-108778429/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8mNjbx0XkEX9RU9viYhgMea6ypehAotcazGTosX8fg5qUylkkPCDscaAktmEALw_wcB#!/item',
      category: 2,
      likes: 0
    },
    {
      id: 20,
      name: 'NuPhy Air75',
      price: 203.00,
      description: 'NuPhy Air75 75% ultra-slim wireless mechanical keyboard works with Windows, Mac iOS, Android, using Gateron low profile switches. Connect up to 4 devices.',
      image: '../assets/img/20.jpg',
      rating:  70041,
      link: 'https://kaspi.kz/shop/p/nuphy-air75-korichnevyi-108704424/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8mNjbx0XkEX9RU9viYhgMea6ypehAotcazGTosX8fg5qUylkkPCDscaAktmEALw_wcB#!/item',
      category: 4,
      likes: 0
    },
  
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */