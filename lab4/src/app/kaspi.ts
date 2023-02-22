export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  link: string;
  rating: number;
  category: string;
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
    category: 'phone'
  },
  {
    id: 2,
    name: 'MacBook Air 2022',
    price: 1319.97,
    description: 'Обновленная в 2022 году линейка MacBook Air компании Apple, как и ранее, объединяет ультрабуки в тонком (11 мм) и легком (1.24 кг) алюминиевом корпусе. ',
    image: '../assets/img/2.jpg',
    rating:  17167,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/?c=750000000#!/item',
    category: 'laptop'
  },
  {
    id: 3,
    name: 'TV LG',
    price: 3023.90,
    description: '8K 196sm diagonal',
    image: '../assets/img/3.jpg',
    rating: 61536,
    link: 'https://kaspi.kz/shop/p/lg-77c1rla-196-sm-belyi-103038965/?c=750000000#!/item',
    category: 'tv'
  },
  {
    id: 4,
    name: 'Samsung TV',
    price: 3028.97,
    description: 'Qled 8K 216sm diagonal',
    image: '../assets/img/4.jpg',
    rating:  292358,
    link: 'https://kaspi.kz/shop/p/samsung-neo-qe85qn90aauxce-216-sm-chernyi-103334007/?c=750000000#!/item',
    category: 'tv'
  },

  {
    id: 5,
    name: 'Airpods 3',
    price: 213,
    description: 'Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания. ',
    image: '../assets/img/5.jpg',
    rating:  18145,
    link: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item',
    category: 'accessories'
  },
  {
    id: 6,
    name: 'GeForce RTX 4090 Phantom',
    price: 4015.15,
    description: 'The NVIDIA® GeForce RTX™ 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics.',
    image: '../assets/img/6.jpg',
    rating:  86634,
    link: 'https://kaspi.kz/shop/p/gainward-geforce-rtx-4090-phantom-ned4090019sb-1020p-24-gb-106873080/?c=750000000#!/item',
    category: 'pc-details'
  },
  {
    id: 7,
    name: 'Logitech G Pro X Superlight',
    price: 16.09,
    description: 'Мышь беспроводная Logitech PRO X SUPERLIGHT с розовым цветовым решением корпуса отлично подойдет для динамичного гейминга и обеспечит уверенный контроль над курсором во время интернет-баталий.',
    image: '../assets/img/7.jpg',
    rating: 130950,
    link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-rozovyi-105681243/?c=750000000#!/item',
    category: 'pc-details'
  },
  {
    id: 8,
    name: 'Iphone 14 pro',
    price: 1999.86,
    description: 'The iPhone 14 Pro comes with a 6.1-inch ProMotion OLED display with 1-120Hz adaptive refresh rates, Dolby Vision.',
    image: '../assets/img/8.jpg',
    rating:  130950,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item',
    category: 'phone'
  },
  {
    id: 9,
    name: 'Case for iPhone 11',
    price: 28.70,
    description: 'OTTERBOX COMMUTER SERIES Case for iPhone 11 - MINT WAY (SURF SPRAY/AQUIFER)',
    image: '../assets/img/9.jpg',
    rating: 2741,
    link: 'https://kaspi.kz/shop/p/golden-concept-croco-embossed-leather-dlja-iphone-11-pro-sinii-100358249/?c=750000000#!/item',
    category: 'accessories'
  },
  {
    id: 10,
    name: 'Monitor',
    price: 213.00,
    description: 'LG 24MP400-B 24” Full HD (1920 x 1080) IPS Display with 3-Side Virtually Borderless Design, AMD FreeSync and OnScreen Control – Black',
    image: '../assets/img/10.jpg',
    rating:  4581,
    link: 'https://kaspi.kz/shop/p/sanc-m2942qvh-seryi-108213360/?c=750000000#!/item',
    category: 'pc-details'
  },

];
