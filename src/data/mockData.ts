import { ProductDetail } from "@/types";

// 用於 Nav / 側邊欄 (主分類 + 子分類)
export interface NavCategory {
  categoryId: string;
  labelZh: string;
  labelEn: string;
  image?: string;
  subCategories: {
    labelZh: string;
    labelEn: string;
    image: string;
  }[];
}

// Nav 與商品側邊欄的「商品分類」資料  每個主分類 + 子分類 + 對應圖片
export const categories: NavCategory[] = [
  {
    categoryId: "food",
    labelZh: "食品",
    labelEn: "food",
    image: "", 
    subCategories: [
      {
        labelZh: "速食 | 調理",
        labelEn: "fastfood", 
        image: "/images/categories/subcat-fastfood.jpg",
      },
      {
        labelZh: "糖果 | 餅乾 | 點心",
        labelEn: "snacks", 
        image: "/images/categories/subcat-snack.jpg",
      },
      {
        labelZh: "飲料",
        labelEn: "beverages", 
        image: "/images/categories/subcat-drink.jpg",
      },
    ],
  },
  {
    categoryId: "women",
    labelZh: "女裝",
    labelEn: "women",
    image: "/images/categories/subcat-clothes.jpg",
    subCategories: [
      {
        labelZh: "外套",
        labelEn: "outerwear", 
        image: "/images/categories/subcat-women-outerwear.jpg",
      },
      {
        labelZh: "襯衫",
        labelEn: "shirts", 
        image: "/images/categories/subcat-women-shirts.jpg",
      },
      {
        labelZh: "褲子",
        labelEn: "pants", 
        image: "/images/categories/subcat-women-pants.jpg",
      },
    ],
  },
  {
    categoryId: "men",
    labelZh: "男裝",
    labelEn: "men",
    image: "/images/categories/subcat-clothes.jpg",
    subCategories: [
      {
        labelZh: "外套",
        labelEn: "outerwear", 
        image: "/images/categories/subcat-men-outerwear.jpg",
      },
      {
        labelZh: "襯衫",
        labelEn: "shirts", 
        image: "/images/categories/subcat-men-shirts.jpg",
      },
      {
        labelZh: "褲子",
        labelEn: "pants", 
        image: "/images/categories/subcat-men-pants.jpg",
      },
    ],
  },
  {
    categoryId: "bedding",
    labelZh: "寢具織品",
    labelEn: "bedding",
    image: "",
    subCategories: [
      {
        labelZh: "枕頭｜枕頭套",
        labelEn: "pillowsandpillowcases", 
        image: "/images/categories/subcat-bedding-pillows.jpg",
      },
      {
        labelZh: "棉被｜被套",
        labelEn: "quiltsandduvetcovers", 
        image: "/images/categories/subcat-bedding-quilts.jpg",
      },
      {
        labelZh: "床包｜保潔墊",
        labelEn: "fittedsheetsandprotectors", 
        image: "/images/categories/subcat-bedding-sheets.jpg",
      },
    ],
  },
  {
    categoryId: "furniture",
    labelZh: "家具",
    labelEn: "furniture",
    image: "",
    subCategories: [
      {
        labelZh: "桌子",
        labelEn: "tables",
        image: "/images/categories/subcat-furniture-tables.jpg",
      },
      {
        labelZh: "椅子",
        labelEn: "chairs",
        image: "/images/categories/subcat-furniture-chairs.jpg",
      },
      {
        labelZh: "懶骨頭沙發",
        labelEn: "beanbagsofas",
        image: "/images/categories/subcat-furniture-beanbag.jpg",
      },
    ],
  },
];

// 商品資料
export const allProducts: Record<string, Record<string, ProductDetail[]>> = {
  food: {
    fastfood: [
      {
        id: "food-fast-001",
        title: "義大利麵醬 經典番茄",
        price: 129,
        image: [
          "/images/productimages/product-food-fast-001.jpg",
          "/images/productimages/product-food-fast-002.jpg",
        ],
        description: "經典義大利番茄醬汁中加入大蒜和起司帶來層次感，最後再加上羅勒。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
              "/images/productimages/product-food-fast-001.jpg",
              "/images/productimages/product-food-fast-002.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "日本" },
          { label: "重量", value: "１５０ｇ（１人份）" },
          { label: "條碼", value: "4550584891001" },
        ],
        categories: [
          { parent: "食品", children: ["速食 | 調理"] },
        ],
        paymentMethods: ["信用卡", "信用卡分期","超商付款"], 
        shippingMethods: ["宅配", "超商取貨", "商店門市自取"],
        /* 推薦商品 */
        relatedProducts: [
          {
            id: "food-fast-002",
            image: "/images/productimages/product-food-fast-003.jpg",
            title: "義大利麵調味包 墨魚汁",
            price: 120,
          },
          {
            id: "food-fast-003",
            image: "/images/productimages/product-food-fast-005.jpg",
            title: "義大利麵調味包 鱈魚子",
            price: 110,
          },
          {
            id: "food-fast-004",
            image: "/images/productimages/product-food-fast-007.jpg",
            title: "義大利麵醬 牛肝菌鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-005",
            image: "/images/productimages/product-food-fast-009.jpg",
            title: "義大利麵醬 紅雪蟹番茄鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-006",
            image: "/images/productimages/product-food-fast-011.jpg",
            title: "１／３日份蔬菜 南瓜湯",
            price: 99,
          },
          {
            id: "food-fast-007",
            image: "/images/productimages/product-food-fast-013.jpg",
            title: "１／３日份蔬菜 番茄湯",
            price: 99,
          },
          {
            id: "food-fast-008",
            image: "/images/productimages/product-food-fast-015.jpg",
            title: "沖泡湯 毛豆玉米濃湯",
            price: 99,
          },
          {
            id: "food-fast-009",
            image: "/images/productimages/product-food-fast-017.jpg",
            title: "沖泡湯 豆腐味噌湯",
            price: 99,
          },
          {
            id: "food-fast-010",
            image: "/images/productimages/product-food-fast-019.jpg",
            title: "沖泡湯 番茄蔬菜湯",
            price: 99,
          },
        ],
        /* 評論 */
        reviews: [
          {
            reviewId: "r-201",
            userId: "u-100",
            rating: 4,
            comment: "加熱方便，配番茄醬很不錯！",
            timestamp: "2025-02-10T10:15:30Z",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        /* 數據分析 */
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "food-fast-002",
        title: "義大利麵調味包 墨魚汁",
        price: 120,
        image: [
          "/images/productimages/product-food-fast-003.jpg",
          "/images/productimages/product-food-fast-004.jpg",
        ],        
        description: "將墨魚的鮮美海味融合大蒜香氣，再加入魚露製作醬汁，只需與麵條拌勻即可享用。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
              "/images/productimages/product-food-fast-003.jpg",
              "/images/productimages/product-food-fast-004.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "日本" },
          { label: "重量", value: "３３ｇ×２入（２人份）" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "食品", children: ["速食 | 調理"] },
        ],
        paymentMethods: ["信用卡", "信用卡分期","超商付款"], 
        shippingMethods: ["宅配", "超商取貨", "商店門市自取"],
        relatedProducts: [
          {
            id: "food-fast-001",
            image: "/images/productimages/product-food-fast-001.jpg",
            title: "義大利麵醬 經典番茄",
            price: 129,
          },
          {
            id: "food-fast-003",
            image: "/images/productimages/product-food-fast-005.jpg",
            title: "義大利麵調味包 鱈魚子",
            price: 110,
          },
          {
            id: "food-fast-004",
            image: "/images/productimages/product-food-fast-007.jpg",
            title: "義大利麵醬 牛肝菌鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-005",
            image: "/images/productimages/product-food-fast-009.jpg",
            title: "義大利麵醬 紅雪蟹番茄鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-006",
            image: "/images/productimages/product-food-fast-011.jpg",
            title: "１／３日份蔬菜 南瓜湯",
            price: 99,
          },
          {
            id: "food-fast-007",
            image: "/images/productimages/product-food-fast-013.jpg",
            title: "１／３日份蔬菜 番茄湯",
            price: 99,
          },
          {
            id: "food-fast-008",
            image: "/images/productimages/product-food-fast-015.jpg",
            title: "沖泡湯 毛豆玉米濃湯",
            price: 99,
          },
          {
            id: "food-fast-009",
            image: "/images/productimages/product-food-fast-017.jpg",
            title: "沖泡湯 豆腐味噌湯",
            price: 99,
          },
          {
            id: "food-fast-010",
            image: "/images/productimages/product-food-fast-019.jpg",
            title: "沖泡湯 番茄蔬菜湯",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "food-fast-003",
        title: "義大利麵調味包 鱈魚子",
        price: 110,
        image: [
          "/images/productimages/product-food-fast-005.jpg",
          "/images/productimages/product-food-fast-006.jpg",
        ],        
        description: "添加鱈魚子並以昆布粉提鮮，只需與麵條拌勻，撒上內附海苔，即可輕鬆品嚐道地風味。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
              "/images/productimages/product-food-fast-005.jpg",
              "/images/productimages/product-food-fast-006.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "日本" },
          { label: "重量", value: "３１．１ｇ×２入（２人份）" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["速食 | 調理"] },
        ],
        relatedProducts: [
          {
            id: "food-fast-001",
            image: "/images/productimages/product-food-fast-001.jpg",
            title: "義大利麵醬 經典番茄",
            price: 129,
          },
          {
            id: "food-fast-002",
            image: "/images/productimages/product-food-fast-003.jpg",
            title: "義大利麵調味包 墨魚汁",
            price: 120,
          },
          {
            id: "food-fast-004",
            image: "/images/productimages/product-food-fast-007.jpg",
            title: "義大利麵醬 牛肝菌鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-005",
            image: "/images/productimages/product-food-fast-009.jpg",
            title: "義大利麵醬 紅雪蟹番茄鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-006",
            image: "/images/productimages/product-food-fast-011.jpg",
            title: "１／３日份蔬菜 南瓜湯",
            price: 99,
          },
          {
            id: "food-fast-007",
            image: "/images/productimages/product-food-fast-013.jpg",
            title: "１／３日份蔬菜 番茄湯",
            price: 99,
          },
          {
            id: "food-fast-008",
            image: "/images/productimages/product-food-fast-015.jpg",
            title: "沖泡湯 毛豆玉米濃湯",
            price: 99,
          },
          {
            id: "food-fast-009",
            image: "/images/productimages/product-food-fast-017.jpg",
            title: "沖泡湯 豆腐味噌湯",
            price: 99,
          },
          {
            id: "food-fast-010",
            image: "/images/productimages/product-food-fast-019.jpg",
            title: "沖泡湯 番茄蔬菜湯",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-fast-004",
        title: "義大利麵醬 牛肝菌鮮奶油",
        price: 110,
        image: [
          "/images/productimages/product-food-fast-007.jpg",
          "/images/productimages/product-food-fast-008.jpg",
        ],        
        description: "充滿牛肝菌香氣的醬汁，搭配炒洋蔥和蘑菇，味道濃郁。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
              "/images/productimages/product-food-fast-007.jpg",
              "/images/productimages/product-food-fast-008.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "日本" },
          { label: "重量", value: "150g" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["速食 | 調理"] },
        ],
        relatedProducts: [
          {
            id: "food-fast-001",
            image: "/images/productimages/product-food-fast-001.jpg",
            title: "義大利麵醬 經典番茄",
            price: 129,
          },
          {
            id: "food-fast-002",
            image: "/images/productimages/product-food-fast-003.jpg",
            title: "義大利麵調味包 墨魚汁",
            price: 120,
          },
          {
            id: "food-fast-003",
            image: "/images/productimages/product-food-fast-005.jpg",
            title: "義大利麵調味包 鱈魚子",
            price: 110,
          },
          {
            id: "food-fast-005",
            image: "/images/productimages/product-food-fast-009.jpg",
            title: "義大利麵醬 紅雪蟹番茄鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-006",
            image: "/images/productimages/product-food-fast-011.jpg",
            title: "１／３日份蔬菜 南瓜湯",
            price: 99,
          },
          {
            id: "food-fast-007",
            image: "/images/productimages/product-food-fast-013.jpg",
            title: "１／３日份蔬菜 番茄湯",
            price: 99,
          },
          {
            id: "food-fast-008",
            image: "/images/productimages/product-food-fast-015.jpg",
            title: "沖泡湯 毛豆玉米濃湯",
            price: 99,
          },
          {
            id: "food-fast-009",
            image: "/images/productimages/product-food-fast-017.jpg",
            title: "沖泡湯 豆腐味噌湯",
            price: 99,
          },
          {
            id: "food-fast-010",
            image: "/images/productimages/product-food-fast-019.jpg",
            title: "沖泡湯 番茄蔬菜湯",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-fast-005",
        title: "義大利麵醬 紅雪蟹番茄鮮奶油",
        price: 110,
        image: [
          "/images/productimages/product-food-fast-009.jpg",
          "/images/productimages/product-food-fast-010.jpg",
        ],        
        description: "鮮美的蟹肉醬汁中加入完熟番茄和鮮奶油，增添順滑濃郁的風味。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
              "/images/productimages/product-food-fast-009.jpg",
              "/images/productimages/product-food-fast-010.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: false,
        isSoldOut: false,
        isHotSale: false,
        productDetails: [
          { label: "產地", value: "日本" },
          { label: "重量", value: "130g" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["速食 | 調理"] },
        ],
        relatedProducts: [
          {
            id: "food-fast-001",
            image: "/images/productimages/product-food-fast-001.jpg",
            title: "義大利麵醬 經典番茄",
            price: 129,
          },
          {
            id: "food-fast-002",
            image: "/images/productimages/product-food-fast-003.jpg",
            title: "義大利麵調味包 墨魚汁",
            price: 120,
          },
          {
            id: "food-fast-003",
            image: "/images/productimages/product-food-fast-005.jpg",
            title: "義大利麵調味包 鱈魚子",
            price: 110,
          },
          {
            id: "food-fast-004",
            image: "/images/productimages/product-food-fast-007.jpg",
            title: "義大利麵醬 牛肝菌鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-006",
            image: "/images/productimages/product-food-fast-011.jpg",
            title: "１／３日份蔬菜 南瓜湯",
            price: 99,
          },
          {
            id: "food-fast-007",
            image: "/images/productimages/product-food-fast-013.jpg",
            title: "１／３日份蔬菜 番茄湯",
            price: 99,
          },
          {
            id: "food-fast-008",
            image: "/images/productimages/product-food-fast-015.jpg",
            title: "沖泡湯 毛豆玉米濃湯",
            price: 99,
          },
          {
            id: "food-fast-009",
            image: "/images/productimages/product-food-fast-017.jpg",
            title: "沖泡湯 豆腐味噌湯",
            price: 99,
          },
          {
            id: "food-fast-010",
            image: "/images/productimages/product-food-fast-019.jpg",
            title: "沖泡湯 番茄蔬菜湯",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-fast-006",
        title: "１／３日份蔬菜 南瓜湯",
        price: 99,
        image: [
          "/images/productimages/product-food-fast-011.jpg",
          "/images/productimages/product-food-fast-012.jpg",
        ],        
        description: "將南瓜的甜味融合鮮奶油，再加入洋蔥、紅腰豆等五種蔬菜，可攝取到每日所需１／３份的蔬菜。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
              "/images/productimages/product-food-fast-011.jpg",
              "/images/productimages/product-food-fast-012.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "２００ｇ" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["速食 | 調理"] },
        ],
        relatedProducts: [
          {
            id: "food-fast-001",
            image: "/images/productimages/product-food-fast-001.jpg",
            title: "義大利麵醬 經典番茄",
            price: 129,
          },
          {
            id: "food-fast-002",
            image: "/images/productimages/product-food-fast-003.jpg",
            title: "義大利麵調味包 墨魚汁",
            price: 120,
          },
          {
            id: "food-fast-003",
            image: "/images/productimages/product-food-fast-005.jpg",
            title: "義大利麵調味包 鱈魚子",
            price: 110,
          },
          {
            id: "food-fast-004",
            image: "/images/productimages/product-food-fast-007.jpg",
            title: "義大利麵醬 牛肝菌鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-005",
            image: "/images/productimages/product-food-fast-009.jpg",
            title: "義大利麵醬 紅雪蟹番茄鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-007",
            image: "/images/productimages/product-food-fast-013.jpg",
            title: "１／３日份蔬菜 番茄湯",
            price: 99,
          },
          {
            id: "food-fast-008",
            image: "/images/productimages/product-food-fast-015.jpg",
            title: "沖泡湯 毛豆玉米濃湯",
            price: 99,
          },
          {
            id: "food-fast-009",
            image: "/images/productimages/product-food-fast-017.jpg",
            title: "沖泡湯 豆腐味噌湯",
            price: 99,
          },
          {
            id: "food-fast-010",
            image: "/images/productimages/product-food-fast-019.jpg",
            title: "沖泡湯 番茄蔬菜湯",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-fast-007",
        title: "１／３日份蔬菜 番茄湯",
        price: 89,
        image: [
          "/images/productimages/product-food-fast-013.jpg",
          "/images/productimages/product-food-fast-014.jpg",
        ],        
        description: "將番茄的酸味融合羅勒、百里香、奧勒岡等香草，再加入馬鈴薯、高麗菜等四種蔬菜，可攝取到每日所需１／３份的蔬菜。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
              "/images/productimages/product-food-fast-013.jpg",
              "/images/productimages/product-food-fast-014.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "２００ｇ（１人份）" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["速食 | 調理"] },
        ],
        relatedProducts: [
          {
            id: "food-fast-001",
            image: "/images/productimages/product-food-fast-001.jpg",
            title: "義大利麵醬 經典番茄",
            price: 129,
          },
          {
            id: "food-fast-002",
            image: "/images/productimages/product-food-fast-003.jpg",
            title: "義大利麵調味包 墨魚汁",
            price: 120,
          },
          {
            id: "food-fast-003",
            image: "/images/productimages/product-food-fast-005.jpg",
            title: "義大利麵調味包 鱈魚子",
            price: 110,
          },
          {
            id: "food-fast-004",
            image: "/images/productimages/product-food-fast-007.jpg",
            title: "義大利麵醬 牛肝菌鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-005",
            image: "/images/productimages/product-food-fast-009.jpg",
            title: "義大利麵醬 紅雪蟹番茄鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-006",
            image: "/images/productimages/product-food-fast-011.jpg",
            title: "１／３日份蔬菜 南瓜湯",
            price: 99,
          },
          {
            id: "food-fast-008",
            image: "/images/productimages/product-food-fast-015.jpg",
            title: "沖泡湯 毛豆玉米濃湯",
            price: 99,
          },
          {
            id: "food-fast-009",
            image: "/images/productimages/product-food-fast-017.jpg",
            title: "沖泡湯 豆腐味噌湯",
            price: 99,
          },
          {
            id: "food-fast-010",
            image: "/images/productimages/product-food-fast-019.jpg",
            title: "沖泡湯 番茄蔬菜湯",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-fast-008",
        title: "沖泡湯 毛豆玉米濃湯",
        price: 99,
        image: [
          "/images/productimages/product-food-fast-015.jpg",
          "/images/productimages/product-food-fast-016.jpg",
        ],        
        description: "玉米研磨成粉做成奶香濃郁的濃湯，綴以毛豆及玉米粒，熱水沖泡就能品嚐配料豐富的杯湯。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
              "/images/productimages/product-food-fast-015.jpg",
              "/images/productimages/product-food-fast-016.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "１００ｇ（２５ｇ×４入）" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["速食 | 調理"] },
        ],
        relatedProducts: [
          {
            id: "food-fast-001",
            image: "/images/productimages/product-food-fast-001.jpg",
            title: "義大利麵醬 經典番茄",
            price: 129,
          },
          {
            id: "food-fast-002",
            image: "/images/productimages/product-food-fast-003.jpg",
            title: "義大利麵調味包 墨魚汁",
            price: 120,
          },
          {
            id: "food-fast-003",
            image: "/images/productimages/product-food-fast-005.jpg",
            title: "義大利麵調味包 鱈魚子",
            price: 110,
          },
          {
            id: "food-fast-004",
            image: "/images/productimages/product-food-fast-007.jpg",
            title: "義大利麵醬 牛肝菌鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-005",
            image: "/images/productimages/product-food-fast-009.jpg",
            title: "義大利麵醬 紅雪蟹番茄鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-006",
            image: "/images/productimages/product-food-fast-011.jpg",
            title: "１／３日份蔬菜 南瓜湯",
            price: 99,
          },
          {
            id: "food-fast-007",
            image: "/images/productimages/product-food-fast-013.jpg",
            title: "１／３日份蔬菜 番茄湯",
            price: 99,
          },
          {
            id: "food-fast-009",
            image: "/images/productimages/product-food-fast-017.jpg",
            title: "沖泡湯 豆腐味噌湯",
            price: 99,
          },
          {
            id: "food-fast-010",
            image: "/images/productimages/product-food-fast-019.jpg",
            title: "沖泡湯 番茄蔬菜湯",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-fast-009",
        title: "沖泡湯 豆腐味噌湯",
        price: 99,
        image: [
          "/images/productimages/product-food-fast-017.jpg",
          "/images/productimages/product-food-fast-018.jpg",
        ],        
        description: "甘甜味噌湯底加入海帶芽與豆腐，以柴魚片提升鮮味層次，熱水沖泡就能品嚐配料豐富的杯湯。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
              "/images/productimages/product-food-fast-017.jpg",
              "/images/productimages/product-food-fast-018.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: false,
        isSoldOut: false,
        isHotSale: false,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "１００ｇ（２５ｇ×４入）" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["速食 | 調理"] },
        ],
        relatedProducts: [
          {
            id: "food-fast-001",
            image: "/images/productimages/product-food-fast-001.jpg",
            title: "義大利麵醬 經典番茄",
            price: 129,
          },
          {
            id: "food-fast-002",
            image: "/images/productimages/product-food-fast-003.jpg",
            title: "義大利麵調味包 墨魚汁",
            price: 120,
          },
          {
            id: "food-fast-003",
            image: "/images/productimages/product-food-fast-005.jpg",
            title: "義大利麵調味包 鱈魚子",
            price: 110,
          },
          {
            id: "food-fast-004",
            image: "/images/productimages/product-food-fast-007.jpg",
            title: "義大利麵醬 牛肝菌鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-005",
            image: "/images/productimages/product-food-fast-009.jpg",
            title: "義大利麵醬 紅雪蟹番茄鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-006",
            image: "/images/productimages/product-food-fast-011.jpg",
            title: "１／３日份蔬菜 南瓜湯",
            price: 99,
          },
          {
            id: "food-fast-007",
            image: "/images/productimages/product-food-fast-013.jpg",
            title: "１／３日份蔬菜 番茄湯",
            price: 99,
          },
          {
            id: "food-fast-008",
            image: "/images/productimages/product-food-fast-015.jpg",
            title: "沖泡湯 毛豆玉米濃湯",
            price: 99,
          },
          {
            id: "food-fast-010",
            image: "/images/productimages/product-food-fast-019.jpg",
            title: "沖泡湯 番茄蔬菜湯",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-fast-010",
        title: "沖泡湯 番茄蔬菜湯",
        price: 99,
        image: [
          "/images/productimages/product-food-fast-019.jpg",
          "/images/productimages/product-food-fast-020.jpg",
        ],        
        description: "番茄湯底加入高麗菜、洋蔥及紅蘿蔔，充分發揮蔬菜酸甜滋味，熱水沖泡就能品嚐配料豐富的杯湯。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
              "/images/productimages/product-food-fast-019.jpg",
              "/images/productimages/product-food-fast-020.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: false,
        isSoldOut: false,
        isHotSale: false,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "１４５．２ｇ（３６．３ｇ×４入）" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["速食 | 調理"] },
        ],
        relatedProducts: [
          {
            id: "food-fast-001",
            image: "/images/productimages/product-food-fast-001.jpg",
            title: "義大利麵醬 經典番茄",
            price: 129,
          },
          {
            id: "food-fast-002",
            image: "/images/productimages/product-food-fast-003.jpg",
            title: "義大利麵調味包 墨魚汁",
            price: 120,
          },
          {
            id: "food-fast-003",
            image: "/images/productimages/product-food-fast-005.jpg",
            title: "義大利麵調味包 鱈魚子",
            price: 110,
          },
          {
            id: "food-fast-004",
            image: "/images/productimages/product-food-fast-007.jpg",
            title: "義大利麵醬 牛肝菌鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-005",
            image: "/images/productimages/product-food-fast-009.jpg",
            title: "義大利麵醬 紅雪蟹番茄鮮奶油",
            price: 110,
          },
          {
            id: "food-fast-006",
            image: "/images/productimages/product-food-fast-011.jpg",
            title: "１／３日份蔬菜 南瓜湯",
            price: 99,
          },
          {
            id: "food-fast-007",
            image: "/images/productimages/product-food-fast-013.jpg",
            title: "１／３日份蔬菜 番茄湯",
            price: 99,
          },
          {
            id: "food-fast-008",
            image: "/images/productimages/product-food-fast-015.jpg",
            title: "沖泡湯 毛豆玉米濃湯",
            price: 99,
          },
          {
            id: "food-fast-009",
            image: "/images/productimages/product-food-fast-017.jpg",
            title: "沖泡湯 豆腐味噌湯",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],
     snacks: [
      {
        id: "food-snack-001",
        title: "柚子果乾",
        price: 199,
        image: [
          "/images/productimages/product-food-snack-001.jpg",
          "/images/productimages/product-food-snack-002.png",
        ],
        description: "文旦柚與白柚皮以特製糖液浸漬後，低溫乾燥將美味濃縮，品嚐細緻果皮纖維與酸香氣息。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-snack-001.jpg",
          "/images/productimages/product-food-snack-002.png",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "80g" },
          { label: "條碼", value: "4550584891001" },
        ],
        categories: [
          { parent: "食品", children: ["糖果 | 餅乾 | 點心"] },
        ],
        relatedProducts: [
          {
            id: "food-snack-002",
            image: "/images/productimages/product-food-snack-003.jpg",
            title: "無添加 金鑽鳳梨果乾",
            price: 179,
          },
          {
            id: "food-snack-003",
            image: "/images/productimages/product-food-snack-005.jpg",
            title: "無添加 紅龍果乾",
            price: 179,
          },
          {
            id: "food-snack-004",
            image: "/images/productimages/product-food-snack-007.jpg",
            title: "無添加 愛文芒果乾",
            price: 199,
          },
          {
            id: "food-snack-005",
            image: "/images/productimages/product-food-snack-009.jpg",
            title: "無選別巧克力年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-006",
            image: "/images/productimages/product-food-snack-011.jpg",
            title: "無選別紅茶年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-007",
            image: "/images/productimages/product-food-snack-013.jpg",
            title: "柳橙風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-008",
            image: "/images/productimages/product-food-snack-015.jpg",
            title: "草莓風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-009",
            image: "/images/productimages/product-food-snack-017.jpg",
            title: "葡萄風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-010",
            image: "/images/productimages/product-food-snack-019.jpg",
            title: "蘋果風味軟糖",
            price: 39,
          },
        ],
        reviews: [
          {
            reviewId: "",
            userId: "",
            rating: 1,
            comment: "",
            timestamp: "",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "food-snack-002",
        title: "無添加 金鑽鳳梨果乾",
        price: 179,
        image: [
          "/images/productimages/product-food-snack-003.jpg",
          "/images/productimages/product-food-snack-004.jpg",
        ],        
        description: "台農17號金鑽鳳梨經低溫乾燥將美味濃縮，無添加糖、色素及其他添加物，品嚐細緻果肉纖維與酸甜滋味。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-snack-003.jpg",
          "/images/productimages/product-food-snack-004.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "100g" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "食品", children: ["糖果 | 餅乾 | 點心"] },
        ],
        relatedProducts: [
          {
            id: "food-snack-001",
            image: "/images/productimages/product-food-snack-001.jpg",
            title: "柚子果乾",
            price: 179,
          },
          {
            id: "food-snack-003",
            image: "/images/productimages/product-food-snack-005.jpg",
            title: "無添加 紅龍果乾",
            price: 179,
          },
          {
            id: "food-snack-004",
            image: "/images/productimages/product-food-snack-007.jpg",
            title: "無添加 愛文芒果乾",
            price: 199,
          },
          {
            id: "food-snack-005",
            image: "/images/productimages/product-food-snack-009.jpg",
            title: "無選別巧克力年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-006",
            image: "/images/productimages/product-food-snack-011.jpg",
            title: "無選別紅茶年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-007",
            image: "/images/productimages/product-food-snack-013.jpg",
            title: "柳橙風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-008",
            image: "/images/productimages/product-food-snack-015.jpg",
            title: "草莓風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-009",
            image: "/images/productimages/product-food-snack-017.jpg",
            title: "葡萄風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-010",
            image: "/images/productimages/product-food-snack-019.jpg",
            title: "蘋果風味軟糖",
            price: 39,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "food-snack-003",
        title: "無添加 紅龍果乾",
        price: 179,
        image: [
          "/images/productimages/product-food-snack-005.jpg",
          "/images/productimages/product-food-snack-006.jpg",
        ],        
        description: "大紅品種紅肉火龍果經低溫乾燥將美味濃縮，無添加糖、色素及其他添加物，品嚐軟糯果肉纖維與清甜風味。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-snack-005.jpg",
          "/images/productimages/product-food-snack-006.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "80g" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["糖果 | 餅乾 | 點心"] },
        ],
        relatedProducts: [
          {
            id: "food-snack-001",
            image: "/images/productimages/product-food-snack-001.jpg",
            title: "柚子果乾",
            price: 179,
          },
          {
            id: "food-snack-002",
            image: "/images/productimages/product-food-snack-003.jpg",
            title: "無添加 金鑽鳳梨果乾",
            price: 179,
          },
          {
            id: "food-snack-004",
            image: "/images/productimages/product-food-snack-007.jpg",
            title: "無添加 愛文芒果乾",
            price: 199,
          },
          {
            id: "food-snack-005",
            image: "/images/productimages/product-food-snack-009.jpg",
            title: "無選別巧克力年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-006",
            image: "/images/productimages/product-food-snack-011.jpg",
            title: "無選別紅茶年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-007",
            image: "/images/productimages/product-food-snack-013.jpg",
            title: "柳橙風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-008",
            image: "/images/productimages/product-food-snack-015.jpg",
            title: "草莓風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-009",
            image: "/images/productimages/product-food-snack-017.jpg",
            title: "葡萄風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-010",
            image: "/images/productimages/product-food-snack-019.jpg",
            title: "蘋果風味軟糖",
            price: 39,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-snack-004",
        title: "無添加 愛文芒果乾",
        price: 199,
        image: [
          "/images/productimages/product-food-snack-007.jpg",
          "/images/productimages/product-food-snack-008.jpg",
        ],        
        description: "愛文芒果經低溫乾燥將美味濃縮，無添加糖、色素及其他添加物，品嚐富嚼勁的果肉口感與濃郁香氣。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-snack-007.jpg",
          "/images/productimages/product-food-snack-008.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "80g" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["糖果 | 餅乾 | 點心"] },
        ],
        relatedProducts: [
          {
            id: "food-snack-001",
            image: "/images/productimages/product-food-snack-001.jpg",
            title: "柚子果乾",
            price: 179,
          },
          {
            id: "food-snack-002",
            image: "/images/productimages/product-food-snack-003.jpg",
            title: "無添加 金鑽鳳梨果乾",
            price: 179,
          },
          {
            id: "food-snack-003",
            image: "/images/productimages/product-food-snack-005.jpg",
            title: "無添加 紅龍果乾",
            price: 179,
          },
          {
            id: "food-snack-005",
            image: "/images/productimages/product-food-snack-009.jpg",
            title: "無選別巧克力年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-006",
            image: "/images/productimages/product-food-snack-011.jpg",
            title: "無選別紅茶年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-007",
            image: "/images/productimages/product-food-snack-013.jpg",
            title: "柳橙風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-008",
            image: "/images/productimages/product-food-snack-015.jpg",
            title: "草莓風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-009",
            image: "/images/productimages/product-food-snack-017.jpg",
            title: "葡萄風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-010",
            image: "/images/productimages/product-food-snack-019.jpg",
            title: "蘋果風味軟糖",
            price: 39,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-snack-005",
        title: "無選別巧克力年輪蛋糕",
        price: 49,
        image: [
          "/images/productimages/product-food-snack-009.jpg",
          "/images/productimages/product-food-snack-010.jpg",
        ],        
        description: "麵糊中拌入醇厚的可可醬，經爐火層層堆疊的烘烤，切成方便食用的大小，保留烤色不均及形狀不規則的部分，為一款樸實美味的日常甜點。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-snack-009.jpg",
          "/images/productimages/product-food-snack-010.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "80g" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["糖果 | 餅乾 | 點心"] },
        ],
        relatedProducts: [
          {
            id: "food-snack-001",
            image: "/images/productimages/product-food-snack-001.jpg",
            title: "柚子果乾",
            price: 179,
          },
          {
            id: "food-snack-002",
            image: "/images/productimages/product-food-snack-003.jpg",
            title: "無添加 金鑽鳳梨果乾",
            price: 179,
          },
          {
            id: "food-snack-003",
            image: "/images/productimages/product-food-snack-005.jpg",
            title: "無添加 紅龍果乾",
            price: 179,
          },
          {
            id: "food-snack-004",
            image: "/images/productimages/product-food-snack-007.jpg",
            title: "無添加 愛文芒果乾",
            price: 199,
          },
          {
            id: "food-snack-006",
            image: "/images/productimages/product-food-snack-011.jpg",
            title: "無選別紅茶年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-007",
            image: "/images/productimages/product-food-snack-013.jpg",
            title: "柳橙風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-008",
            image: "/images/productimages/product-food-snack-015.jpg",
            title: "草莓風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-009",
            image: "/images/productimages/product-food-snack-017.jpg",
            title: "葡萄風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-010",
            image: "/images/productimages/product-food-snack-019.jpg",
            title: "蘋果風味軟糖",
            price: 39,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-snack-006",
        title: "無選別紅茶年輪蛋糕",
        price: 49,
        image: [
          "/images/productimages/product-food-snack-011.jpg",
          "/images/productimages/product-food-snack-012.jpg",
        ],        
        description: "麵糊中拌入精磨的紅茶粉，經爐火層層堆疊的烘烤，切成方便食用的大小，保留烤色不均及形狀不規則的部分，為一款樸實美味的日常甜點。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-snack-011.jpg",
          "/images/productimages/product-food-snack-012.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "80g" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["糖果 | 餅乾 | 點心"] },
        ],
        relatedProducts: [
          {
            id: "food-snack-001",
            image: "/images/productimages/product-food-snack-001.jpg",
            title: "柚子果乾",
            price: 179,
          },
          {
            id: "food-snack-002",
            image: "/images/productimages/product-food-snack-003.jpg",
            title: "無添加 金鑽鳳梨果乾",
            price: 179,
          },
          {
            id: "food-snack-003",
            image: "/images/productimages/product-food-snack-005.jpg",
            title: "無添加 紅龍果乾",
            price: 179,
          },
          {
            id: "food-snack-004",
            image: "/images/productimages/product-food-snack-007.jpg",
            title: "無添加 愛文芒果乾",
            price: 199,
          },
          {
            id: "food-snack-005",
            image: "/images/productimages/product-food-snack-009.jpg",
            title: "無選別巧克力年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-007",
            image: "/images/productimages/product-food-snack-013.jpg",
            title: "柳橙風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-008",
            image: "/images/productimages/product-food-snack-015.jpg",
            title: "草莓風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-009",
            image: "/images/productimages/product-food-snack-017.jpg",
            title: "葡萄風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-010",
            image: "/images/productimages/product-food-snack-019.jpg",
            title: "蘋果風味軟糖",
            price: 39,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-snack-007",
        title: "柳橙風味軟糖",
        price: 39,
        image: [
          "/images/productimages/product-food-snack-013.jpg",
          "/images/productimages/product-food-snack-014.jpg",
        ],        
        description: "添加柳橙果汁與魚鱗膠原蛋白於軟糖中，包裏砂糖、使風味酸甜平衡，同時享受嚼勁口感及柳橙的清爽滋味。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-snack-013.jpg",
          "/images/productimages/product-food-snack-014.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "50g" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["糖果 | 餅乾 | 點心"] },
        ],
        relatedProducts: [
          {
            id: "food-snack-001",
            image: "/images/productimages/product-food-snack-001.jpg",
            title: "柚子果乾",
            price: 179,
          },
          {
            id: "food-snack-002",
            image: "/images/productimages/product-food-snack-003.jpg",
            title: "無添加 金鑽鳳梨果乾",
            price: 179,
          },
          {
            id: "food-snack-003",
            image: "/images/productimages/product-food-snack-005.jpg",
            title: "無添加 紅龍果乾",
            price: 179,
          },
          {
            id: "food-snack-004",
            image: "/images/productimages/product-food-snack-007.jpg",
            title: "無添加 愛文芒果乾",
            price: 199,
          },
          {
            id: "food-snack-005",
            image: "/images/productimages/product-food-snack-009.jpg",
            title: "無選別巧克力年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-006",
            image: "/images/productimages/product-food-snack-011.jpg",
            title: "無選別紅茶年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-008",
            image: "/images/productimages/product-food-snack-015.jpg",
            title: "草莓風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-009",
            image: "/images/productimages/product-food-snack-017.jpg",
            title: "葡萄風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-010",
            image: "/images/productimages/product-food-snack-019.jpg",
            title: "蘋果風味軟糖",
            price: 39,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-snack-008",
        title: "草莓風味軟糖",
        price: 39,
        image: [
          "/images/productimages/product-food-snack-015.jpg",
          "/images/productimages/product-food-snack-016.jpg",
        ],        
        description: "添加草莓果汁與魚鱗膠原蛋白於軟糖中，包裹砂糖，使風味酸甜平衡，同時享受嚼勁口感及草莓的鮮甜滋味。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-snack-015.jpg",
          "/images/productimages/product-food-snack-016.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "50g" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["糖果 | 餅乾 | 點心"] },
        ],
        relatedProducts: [
          {
            id: "food-snack-001",
            image: "/images/productimages/product-food-snack-001.jpg",
            title: "柚子果乾",
            price: 179,
          },
          {
            id: "food-snack-002",
            image: "/images/productimages/product-food-snack-003.jpg",
            title: "無添加 金鑽鳳梨果乾",
            price: 179,
          },
          {
            id: "food-snack-003",
            image: "/images/productimages/product-food-snack-005.jpg",
            title: "無添加 紅龍果乾",
            price: 179,
          },
          {
            id: "food-snack-004",
            image: "/images/productimages/product-food-snack-007.jpg",
            title: "無添加 愛文芒果乾",
            price: 199,
          },
          {
            id: "food-snack-005",
            image: "/images/productimages/product-food-snack-009.jpg",
            title: "無選別巧克力年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-006",
            image: "/images/productimages/product-food-snack-011.jpg",
            title: "無選別紅茶年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-007",
            image: "/images/productimages/product-food-snack-013.jpg",
            title: "柳橙風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-009",
            image: "/images/productimages/product-food-snack-017.jpg",
            title: "葡萄風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-010",
            image: "/images/productimages/product-food-snack-019.jpg",
            title: "蘋果風味軟糖",
            price: 39,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-snack-009",
        title: "葡萄風味軟糖",
        price: 39,
        image: [
          "/images/productimages/product-food-snack-017.jpg",
          "/images/productimages/product-food-snack-018.jpg",
        ],        
        description: "添加葡萄果汁與魚鱗膠原蛋白於軟糖中，包裹砂糖，使風味酸甜平衡，同時享受嚼勁口感及葡萄的甘醇滋味。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-snack-017.jpg",
          "/images/productimages/product-food-snack-018.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: false,
        isSoldOut: false,
        isHotSale: false,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "50g" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["糖果 | 餅乾 | 點心"] },
        ],
        relatedProducts: [
          {
            id: "food-snack-001",
            image: "/images/productimages/product-food-snack-001.jpg",
            title: "柚子果乾",
            price: 179,
          },
          {
            id: "food-snack-002",
            image: "/images/productimages/product-food-snack-003.jpg",
            title: "無添加 金鑽鳳梨果乾",
            price: 179,
          },
          {
            id: "food-snack-003",
            image: "/images/productimages/product-food-snack-005.jpg",
            title: "無添加 紅龍果乾",
            price: 179,
          },
          {
            id: "food-snack-004",
            image: "/images/productimages/product-food-snack-007.jpg",
            title: "無添加 愛文芒果乾",
            price: 199,
          },
          {
            id: "food-snack-005",
            image: "/images/productimages/product-food-snack-009.jpg",
            title: "無選別巧克力年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-006",
            image: "/images/productimages/product-food-snack-011.jpg",
            title: "無選別紅茶年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-007",
            image: "/images/productimages/product-food-snack-013.jpg",
            title: "柳橙風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-008",
            image: "/images/productimages/product-food-snack-015.jpg",
            title: "草莓風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-010",
            image: "/images/productimages/product-food-snack-019.jpg",
            title: "蘋果風味軟糖",
            price: 39,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-snack-010",
        title: "蘋果風味軟糖",
        price: 39,
        image: [
          "/images/productimages/product-food-snack-019.jpg",
          "/images/productimages/product-food-snack-020.jpg",
        ],        
        description: "添加蘋果果汁與魚鱗膠原蛋白於軟糖中，包裹砂糖，使風味酸甜平衡，同時享受嚼勁口感及蘋果的香甜滋味。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-snack-019.jpg",
          "/images/productimages/product-food-snack-020.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: false,
        isSoldOut: false,
        isHotSale: false,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "50g" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["糖果 | 餅乾 | 點心"] },
        ],
        relatedProducts: [
          {
            id: "food-snack-001",
            image: "/images/productimages/product-food-snack-001.jpg",
            title: "柚子果乾",
            price: 179,
          },
          {
            id: "food-snack-002",
            image: "/images/productimages/product-food-snack-003.jpg",
            title: "無添加 金鑽鳳梨果乾",
            price: 179,
          },
          {
            id: "food-snack-003",
            image: "/images/productimages/product-food-snack-005.jpg",
            title: "無添加 紅龍果乾",
            price: 179,
          },
          {
            id: "food-snack-004",
            image: "/images/productimages/product-food-snack-007.jpg",
            title: "無添加 愛文芒果乾",
            price: 199,
          },
          {
            id: "food-snack-005",
            image: "/images/productimages/product-food-snack-009.jpg",
            title: "無選別巧克力年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-006",
            image: "/images/productimages/product-food-snack-011.jpg",
            title: "無選別紅茶年輪蛋糕",
            price: 49,
          },
          {
            id: "food-snack-007",
            image: "/images/productimages/product-food-snack-013.jpg",
            title: "柳橙風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-008",
            image: "/images/productimages/product-food-snack-015.jpg",
            title: "草莓風味軟糖",
            price: 39,
          },
          {
            id: "food-snack-009",
            image: "/images/productimages/product-food-snack-017.jpg",
            title: "葡萄風味軟糖",
            price: 39,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],
    beverages: [
      {
        id: "food-drink-001",
        title: "花草茶 紫蘇茶",
        price: 129,
        image: [
          "/images/productimages/product-food-drink-001.jpg",
          "/images/productimages/product-food-drink-002.png",
        ],
        description: "感受紫蘇獨有的草本清新與酸香氣息。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-drink-001.jpg",
          "/images/productimages/product-food-drink-002.png",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "１２ｇ（２ｇ×６入）" },
          { label: "條碼", value: "4550583882952" },
        ],
        categories: [
          { parent: "食品", children: ["飲料"] },
        ],
        relatedProducts: [
          {
            id: "food-drink-002",
            image: "/images/productimages/product-food-drink-003.jpg",
            title: "花草茶 檸檬馬鞭草洋甘菊茶",
            price: 169,
          },
          {
            id: "food-drink-003",
            image: "/images/productimages/product-food-drink-005.jpg",
            title: "花草茶 薰衣草檸檬香茅茶",
            price: 110,
          },
          {
            id: "food-drink-004",
            image: "/images/productimages/product-food-drink-007.jpg",
            title: "無咖啡因茶 山楂玫瑰洛神茶",
            price: 89,
          },
          {
            id: "food-drink-005",
            image: "/images/productimages/product-food-drink-009.jpg",
            title: "台灣茶 紅玉紅茶",
            price: 129,
          },
          {
            id: "food-drink-006",
            image: "/images/productimages/product-food-drink-011.jpg",
            title: "台灣茶 冬片烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-007",
            image: "/images/productimages/product-food-drink-013.jpg",
            title: "台灣茶 凍頂烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-008",
            image: "/images/productimages/product-food-drink-015.jpg",
            title: "台灣茶 決明子紅茶",
            price: 129,
          },
          {
            id: "food-drink-009",
            image: "/images/productimages/product-food-drink-017.png",
            title: "風味茶飲 水蜜桃紅茶",
            price: 29,
          },
          {
            id: "food-drink-010",
            image: "/images/productimages/product-food-drink-019.png",
            title: "風味茶飲 草莓紅茶",
            price: 99,
          },
        ],
        reviews: [
          {
            reviewId: "",
            userId: "",
            rating: 1,
            comment: "",
            timestamp: "",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "food-drink-002",
        title: "花草茶 檸檬馬鞭草洋甘菊茶",
        price: 169,
        image: [
          "/images/productimages/product-food-drink-003.jpg",
          "/images/productimages/product-food-drink-004.png",
        ],        
        description: "感受檸檬馬鞭草加洋甘菊的清爽香氣與順口。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-drink-003.jpg",
          "/images/productimages/product-food-drink-004.png",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "１２ｇ（２ｇ×６入）" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "食品", children: ["飲料"] },
        ],
        relatedProducts: [
          {
            id: "food-drink-001",
            image: "/images/productimages/product-food-drink-001.jpg",
            title: "花草茶 紫蘇茶",
            price: 129,
          },
          {
            id: "food-drink-003",
            image: "/images/productimages/product-food-drink-005.jpg",
            title: "花草茶 薰衣草檸檬香茅茶",
            price: 110,
          },
          {
            id: "food-drink-004",
            image: "/images/productimages/product-food-drink-007.jpg",
            title: "無咖啡因茶 山楂玫瑰洛神茶",
            price: 89,
          },
          {
            id: "food-drink-005",
            image: "/images/productimages/product-food-drink-009.jpg",
            title: "台灣茶 紅玉紅茶",
            price: 129,
          },
          {
            id: "food-drink-006",
            image: "/images/productimages/product-food-drink-011.jpg",
            title: "台灣茶 冬片烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-007",
            image: "/images/productimages/product-food-drink-013.jpg",
            title: "台灣茶 凍頂烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-008",
            image: "/images/productimages/product-food-drink-015.jpg",
            title: "台灣茶 決明子紅茶",
            price: 129,
          },
          {
            id: "food-drink-009",
            image: "/images/productimages/product-food-drink-017.png",
            title: "風味茶飲 水蜜桃紅茶",
            price: 29,
          },
          {
            id: "food-drink-010",
            image: "/images/productimages/product-food-drink-019.png",
            title: "風味茶飲 草莓紅茶",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "food-drink-003",
        title: "花草茶 薰衣草檸檬香茅茶",
        price: 169,
        image: [
          "/images/productimages/product-food-drink-005.jpg",
          "/images/productimages/product-food-drink-006.png",
        ],        
        description: "感受薰衣草加檸檬香茅的療癒香氣與溫潤口感。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-drink-005.jpg",
          "/images/productimages/product-food-drink-006.png",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "１２ｇ（２ｇ×６入）" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["飲料"] },
        ],
        relatedProducts: [
          {
            id: "food-drink-001",
            image: "/images/productimages/product-food-drink-001.jpg",
            title: "花草茶 紫蘇茶",
            price: 129,
          },
          {
            id: "food-drink-002",
            image: "/images/productimages/product-food-drink-003.jpg",
            title: "花草茶 檸檬馬鞭草洋甘菊茶",
            price: 169,
          },
          {
            id: "food-drink-004",
            image: "/images/productimages/product-food-drink-007.jpg",
            title: "無咖啡因茶 山楂玫瑰洛神茶",
            price: 89,
          },
          {
            id: "food-drink-005",
            image: "/images/productimages/product-food-drink-009.jpg",
            title: "台灣茶 紅玉紅茶",
            price: 129,
          },
          {
            id: "food-drink-006",
            image: "/images/productimages/product-food-drink-011.jpg",
            title: "台灣茶 冬片烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-007",
            image: "/images/productimages/product-food-drink-013.jpg",
            title: "台灣茶 凍頂烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-008",
            image: "/images/productimages/product-food-drink-015.jpg",
            title: "台灣茶 決明子紅茶",
            price: 129,
          },
          {
            id: "food-drink-009",
            image: "/images/productimages/product-food-drink-017.png",
            title: "風味茶飲 水蜜桃紅茶",
            price: 29,
          },
          {
            id: "food-drink-010",
            image: "/images/productimages/product-food-drink-019.png",
            title: "風味茶飲 草莓紅茶",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-drink-004",
        title: "無咖啡因茶 山楂玫瑰洛神茶",
        price: 89,
        image: [
          "/images/productimages/product-food-drink-007.jpg",
          "/images/productimages/product-food-drink-008.jpg",
        ],        
        description: "使用山楂、玫瑰及洛神花等草本調配，飽含植物原本的氣味，風味酸甜芬芳，適合每日飲用的無咖啡因茶。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-drink-007.jpg",
          "/images/productimages/product-food-drink-008.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "35g(5g×7入)" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["飲料"] },
        ],
        relatedProducts: [
          {
            id: "food-drink-001",
            image: "/images/productimages/product-food-drink-001.jpg",
            title: "花草茶 紫蘇茶",
            price: 129,
          },
          {
            id: "food-drink-002",
            image: "/images/productimages/product-food-drink-003.jpg",
            title: "花草茶 檸檬馬鞭草洋甘菊茶",
            price: 169,
          },
          {
            id: "food-drink-003",
            image: "/images/productimages/product-food-drink-005.jpg",
            title: "花草茶 薰衣草檸檬香茅茶",
            price: 110,
          },
          {
            id: "food-drink-005",
            image: "/images/productimages/product-food-drink-009.jpg",
            title: "台灣茶 紅玉紅茶",
            price: 129,
          },
          {
            id: "food-drink-006",
            image: "/images/productimages/product-food-drink-011.jpg",
            title: "台灣茶 冬片烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-007",
            image: "/images/productimages/product-food-drink-013.jpg",
            title: "台灣茶 凍頂烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-008",
            image: "/images/productimages/product-food-drink-015.jpg",
            title: "台灣茶 決明子紅茶",
            price: 129,
          },
          {
            id: "food-drink-009",
            image: "/images/productimages/product-food-drink-017.png",
            title: "風味茶飲 水蜜桃紅茶",
            price: 29,
          },
          {
            id: "food-drink-010",
            image: "/images/productimages/product-food-drink-019.png",
            title: "風味茶飲 草莓紅茶",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-drink-005",
        title: "台灣茶 紅玉紅茶",
        price: 129,
        image: [
          "/images/productimages/product-food-drink-009.jpg",
          "/images/productimages/product-food-drink-010.jpg",
        ],        
        description: "台茶18號經完全發酵製成，品嚐厚實口感與花果香。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-drink-009.jpg",
          "/images/productimages/product-food-drink-010.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "１５．６ｇ（２．６ｇ×６入）" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["飲料"] },
        ],
        relatedProducts: [
          {
            id: "food-drink-001",
            image: "/images/productimages/product-food-drink-001.jpg",
            title: "花草茶 紫蘇茶",
            price: 129,
          },
          {
            id: "food-drink-002",
            image: "/images/productimages/product-food-drink-003.jpg",
            title: "花草茶 檸檬馬鞭草洋甘菊茶",
            price: 169,
          },
          {
            id: "food-drink-003",
            image: "/images/productimages/product-food-drink-005.jpg",
            title: "花草茶 薰衣草檸檬香茅茶",
            price: 110,
          },
          {
            id: "food-drink-004",
            image: "/images/productimages/product-food-drink-007.jpg",
            title: "無咖啡因茶 山楂玫瑰洛神茶",
            price: 89,
          },
          {
            id: "food-drink-006",
            image: "/images/productimages/product-food-drink-011.jpg",
            title: "台灣茶 冬片烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-007",
            image: "/images/productimages/product-food-drink-013.jpg",
            title: "台灣茶 凍頂烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-008",
            image: "/images/productimages/product-food-drink-015.jpg",
            title: "台灣茶 決明子紅茶",
            price: 129,
          },
          {
            id: "food-drink-009",
            image: "/images/productimages/product-food-drink-017.png",
            title: "風味茶飲 水蜜桃紅茶",
            price: 29,
          },
          {
            id: "food-drink-010",
            image: "/images/productimages/product-food-drink-019.png",
            title: "風味茶飲 草莓紅茶",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-drink-006",
        title: "台灣茶 冬片烏龍茶",
        price: 129,
        image: [
          "/images/productimages/product-food-drink-011.jpg",
          "/images/productimages/product-food-drink-012.jpg",
        ],        
        description: "冬季第二次生長的茶菁嫩芽半發酵製成，品嚐滑順口感與清揚香。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-drink-011.jpg",
          "/images/productimages/product-food-drink-012.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "１８ｇ（３ｇ×６入）" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["飲料"] },
        ],
        relatedProducts: [
          {
            id: "food-drink-001",
            image: "/images/productimages/product-food-drink-001.jpg",
            title: "花草茶 紫蘇茶",
            price: 129,
          },
          {
            id: "food-drink-002",
            image: "/images/productimages/product-food-drink-003.jpg",
            title: "花草茶 檸檬馬鞭草洋甘菊茶",
            price: 169,
          },
          {
            id: "food-drink-003",
            image: "/images/productimages/product-food-drink-005.jpg",
            title: "花草茶 薰衣草檸檬香茅茶",
            price: 110,
          },
          {
            id: "food-drink-004",
            image: "/images/productimages/product-food-drink-007.jpg",
            title: "無咖啡因茶 山楂玫瑰洛神茶",
            price: 89,
          },
          {
            id: "food-drink-005",
            image: "/images/productimages/product-food-drink-009.jpg",
            title: "台灣茶 紅玉紅茶",
            price: 129,
          },
          {
            id: "food-drink-007",
            image: "/images/productimages/product-food-drink-013.jpg",
            title: "台灣茶 凍頂烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-008",
            image: "/images/productimages/product-food-drink-015.jpg",
            title: "台灣茶 決明子紅茶",
            price: 129,
          },
          {
            id: "food-drink-009",
            image: "/images/productimages/product-food-drink-017.png",
            title: "風味茶飲 水蜜桃紅茶",
            price: 29,
          },
          {
            id: "food-drink-010",
            image: "/images/productimages/product-food-drink-019.png",
            title: "風味茶飲 草莓紅茶",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-drink-007",
        title: "台灣茶 凍頂烏龍茶",
        price: 129,
        image: [
          "/images/productimages/product-food-drink-013.jpg",
          "/images/productimages/product-food-drink-014.jpg",
        ],        
        description: "茶菁嫩芽半發酵後，以文火細細烤焙，品嚐溫潤口感與焙火香。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-drink-013.jpg",
          "/images/productimages/product-food-drink-014.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "１８ｇ（３ｇ×６入）" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["飲料"] },
        ],
        relatedProducts: [
          {
            id: "food-drink-001",
            image: "/images/productimages/product-food-drink-001.jpg",
            title: "花草茶 紫蘇茶",
            price: 129,
          },
          {
            id: "food-drink-002",
            image: "/images/productimages/product-food-drink-003.jpg",
            title: "花草茶 檸檬馬鞭草洋甘菊茶",
            price: 169,
          },
          {
            id: "food-drink-003",
            image: "/images/productimages/product-food-drink-005.jpg",
            title: "花草茶 薰衣草檸檬香茅茶",
            price: 110,
          },
          {
            id: "food-drink-004",
            image: "/images/productimages/product-food-drink-007.jpg",
            title: "無咖啡因茶 山楂玫瑰洛神茶",
            price: 89,
          },
          {
            id: "food-drink-005",
            image: "/images/productimages/product-food-drink-009.jpg",
            title: "台灣茶 紅玉紅茶",
            price: 129,
          },
          {
            id: "food-drink-006",
            image: "/images/productimages/product-food-drink-011.jpg",
            title: "台灣茶 冬片烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-008",
            image: "/images/productimages/product-food-drink-015.jpg",
            title: "台灣茶 決明子紅茶",
            price: 129,
          },
          {
            id: "food-drink-009",
            image: "/images/productimages/product-food-drink-017.png",
            title: "風味茶飲 水蜜桃紅茶",
            price: 29,
          },
          {
            id: "food-drink-010",
            image: "/images/productimages/product-food-drink-019.png",
            title: "風味茶飲 草莓紅茶",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-drink-008",
        title: "台灣茶 決明子紅茶",
        price: 129,
        image: [
          "/images/productimages/product-food-drink-015.jpg",
          "/images/productimages/product-food-drink-016.jpg",
        ],        
        description: "南投阿薩姆與紅韻紅茶加入決明子一同焙炒，為茶葉濃郁花果香氣增添圓潤渾厚層次。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-drink-015.jpg",
          "/images/productimages/product-food-drink-016.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "５ｇ×８入" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["飲料"] },
        ],
        relatedProducts: [
          {
            id: "food-drink-001",
            image: "/images/productimages/product-food-drink-001.jpg",
            title: "花草茶 紫蘇茶",
            price: 129,
          },
          {
            id: "food-drink-002",
            image: "/images/productimages/product-food-drink-003.jpg",
            title: "花草茶 檸檬馬鞭草洋甘菊茶",
            price: 169,
          },
          {
            id: "food-drink-003",
            image: "/images/productimages/product-food-drink-005.jpg",
            title: "花草茶 薰衣草檸檬香茅茶",
            price: 110,
          },
          {
            id: "food-drink-004",
            image: "/images/productimages/product-food-drink-007.jpg",
            title: "無咖啡因茶 山楂玫瑰洛神茶",
            price: 89,
          },
          {
            id: "food-drink-005",
            image: "/images/productimages/product-food-drink-009.jpg",
            title: "台灣茶 紅玉紅茶",
            price: 129,
          },
          {
            id: "food-drink-006",
            image: "/images/productimages/product-food-drink-011.jpg",
            title: "台灣茶 冬片烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-007",
            image: "/images/productimages/product-food-drink-013.jpg",
            title: "台灣茶 凍頂烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-009",
            image: "/images/productimages/product-food-drink-017.png",
            title: "風味茶飲 水蜜桃紅茶",
            price: 29,
          },
          {
            id: "food-drink-010",
            image: "/images/productimages/product-food-drink-019.png",
            title: "風味茶飲 草莓紅茶",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-drink-009",
        title: "風味茶飲 水蜜桃紅茶",
        price: 29,
        image: [
          "/images/productimages/product-food-drink-017.png",
          "/images/productimages/product-food-drink-018.jpg",
        ],        
        description: "添加水蜜桃果汁，芬芳順口的水蜜桃風味尼爾吉里紅茶。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-food-drink-017.png",
          "/images/productimages/product-food-drink-018.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: false,
        isSoldOut: false,
        isHotSale: false,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "３１５ｍｌ" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["飲料"] },
        ],
        relatedProducts: [
          {
            id: "food-drink-001",
            image: "/images/productimages/product-food-drink-001.jpg",
            title: "花草茶 紫蘇茶",
            price: 129,
          },
          {
            id: "food-drink-002",
            image: "/images/productimages/product-food-drink-003.jpg",
            title: "花草茶 檸檬馬鞭草洋甘菊茶",
            price: 169,
          },
          {
            id: "food-drink-003",
            image: "/images/productimages/product-food-drink-005.jpg",
            title: "花草茶 薰衣草檸檬香茅茶",
            price: 110,
          },
          {
            id: "food-drink-004",
            image: "/images/productimages/product-food-drink-007.jpg",
            title: "無咖啡因茶 山楂玫瑰洛神茶",
            price: 89,
          },
          {
            id: "food-drink-005",
            image: "/images/productimages/product-food-drink-009.jpg",
            title: "台灣茶 紅玉紅茶",
            price: 129,
          },
          {
            id: "food-drink-006",
            image: "/images/productimages/product-food-drink-011.jpg",
            title: "台灣茶 冬片烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-007",
            image: "/images/productimages/product-food-drink-013.jpg",
            title: "台灣茶 凍頂烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-008",
            image: "/images/productimages/product-food-drink-015.jpg",
            title: "台灣茶 決明子紅茶",
            price: 129,
          },
          {
            id: "food-drink-010",
            image: "/images/productimages/product-food-drink-019.png",
            title: "風味茶飲 草莓紅茶",
            price: 99,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
      {
        id: "food-drink-010",
        title: "風味茶飲 草莓紅茶",
        price: 99,
        image: [
          "/images/productimages/product-food-drink-019.png",
          "/images/productimages/product-food-drink-020.jpg",
        ],        
        description: "添加草莓果汁，酸甜可口的草莓風味斯里蘭卡紅茶。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
              "/images/productimages/product-food-drink-019.png",
              "/images/productimages/product-food-drink-020.jpg",
            ],        
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: false,
        isSoldOut: false,
        isHotSale: false,
        productDetails: [
          { label: "產地", value: "台灣" },
          { label: "重量", value: "３１５ｍｌ" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "食品", children: ["飲料"] },
        ],
        relatedProducts: [
          {
            id: "food-drink-001",
            image: "/images/productimages/product-food-drink-001.jpg",
            title: "花草茶 紫蘇茶",
            price: 129,
          },
          {
            id: "food-drink-002",
            image: "/images/productimages/product-food-drink-003.jpg",
            title: "花草茶 檸檬馬鞭草洋甘菊茶",
            price: 169,
          },
          {
            id: "food-drink-003",
            image: "/images/productimages/product-food-drink-005.jpg",
            title: "花草茶 薰衣草檸檬香茅茶",
            price: 110,
          },
          {
            id: "food-drink-004",
            image: "/images/productimages/product-food-drink-007.jpg",
            title: "無咖啡因茶 山楂玫瑰洛神茶",
            price: 89,
          },
          {
            id: "food-drink-005",
            image: "/images/productimages/product-food-drink-009.jpg",
            title: "台灣茶 紅玉紅茶",
            price: 129,
          },
          {
            id: "food-drink-006",
            image: "/images/productimages/product-food-drink-011.jpg",
            title: "台灣茶 冬片烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-007",
            image: "/images/productimages/product-food-drink-013.jpg",
            title: "台灣茶 凍頂烏龍茶",
            price: 129,
          },
          {
            id: "food-drink-008",
            image: "/images/productimages/product-food-drink-015.jpg",
            title: "台灣茶 決明子紅茶",
            price: 129,
          },
          {
            id: "food-drink-009",
            image: "/images/productimages/product-food-drink-017.png",
            title: "風味茶飲 水蜜桃紅茶",
            price: 29,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],
  },

  women: {
    outerwear: [
      {
        id: "women-outerwear-001",
        title: "女撥水加工連帽外套粉紅",
        price: 1590,
        image: [
          "/images/productimages/product-women-outerwear-001.jpg",
          "/images/productimages/product-women-outerwear-002.jpg",
        ],
        description: "選用硬挺的素材，並施以撥水加工。使用有機棉製成。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
            "/images/productimages/product-women-outerwear-001.jpg",
            "/images/productimages/product-women-outerwear-002.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
            "/images/productimages/product-women-outerwear-001.jpg",
            "/images/productimages/product-women-outerwear-002.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "柬埔寨" },
          { label: "材質", value: "棉65%,尼龍35%" },
          { label: "條碼", value: "4550584891001" },
        ],
        categories: [
          { parent: "女裝", children: ["外套"] },
        ],
        relatedProducts: [
          {
            id: "women-outerwear-002",
            image: "/images/productimages/product-women-outerwear-003.jpg",
            title: "女吉貝木棉混二重紗織刺縫外套淺米",
            price: 1790,
          },
          {
            id: "women-outerwear-003",
            image: "/images/productimages/product-women-outerwear-005.jpg",
            title: "女吉貝木棉混燈芯絨外套駝色",
            price: 1590,
          },
        ],
        reviews: [
          {
            reviewId: "r-201",
            userId: "u-100",
            rating: 4,
            comment: "加熱方便，配番茄醬很不錯！",
            timestamp: "2025-02-10T10:15:30Z",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "women-outerwear-002",
        title: "女吉貝木棉混二重紗織刺縫外套淺米",
        price: 1790,
        image: [
          "/images/productimages/product-women-outerwear-003.jpg",
          "/images/productimages/product-women-outerwear-004.jpg",
        ],        
        description: "使用天然的輕盈纖維、吉貝木棉製成的外套。使用有機棉製成。",
        descriptionImage: [{ image: "" }],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
            "/images/productimages/product-women-outerwear-003.jpg",
            "/images/productimages/product-women-outerwear-004.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
            "/images/productimages/product-women-outerwear-003.jpg",
            "/images/productimages/product-women-outerwear-004.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "印尼" },
          { label: "材質", value: "表面:棉70%,吉貝木棉30%,內裏:聚酯纖維100%" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "女裝", children: ["外套"] },
        ],
        relatedProducts: [
          {
            id: "women-outerwear-001",
            image: "/images/productimages/product-women-outerwear-001.jpg",
            title: "女撥水加工連帽外套粉紅",
            price: 1590,
          },
          {
            id: "women-outerwear-003",
            image: "/images/productimages/product-women-outerwear-005.jpg",
            title: "女吉貝木棉混燈芯絨外套駝色",
            price: 1590,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "women-outerwear-003",
        title: "女吉貝木棉混燈芯絨外套駝色",
        price: 1590,
        image: [
          "/images/productimages/product-women-outerwear-005.jpg",
          "/images/productimages/product-women-outerwear-006.jpg",
        ],        
        description: "使用天然的輕盈纖維、吉貝木棉製成的外套。",
        descriptionImage: [{ image: "" }],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-women-outerwear-005.jpg",
          "/images/productimages/product-women-outerwear-006.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-women-outerwear-005.jpg",
          "/images/productimages/product-women-outerwear-006.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "柬埔寨" },
          { label: "材質", value: "棉89%,吉貝木棉11%" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "女裝", children: ["外套"] },
        ],
        relatedProducts: [
          {
            id: "women-outerwear-001",
            image: "/images/productimages/product-women-outerwear-001.jpg",
            title: "女撥水加工連帽外套粉紅",
            price: 1590,
          },
          {
            id: "women-outerwear-002",
            image: "/images/productimages/product-women-outerwear-002.jpg",
            title: "女吉貝木棉混二重紗織刺縫外套淺米",
            price: 1790,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],

    shirts: [
      {
        id: "women-shirts-001",
        title: "女水洗平織布立領長版襯衫白色",
        price: 1190,
        image: [
          "/images/productimages/product-women-shirts-001.jpg",
          "/images/productimages/product-women-shirts-002.jpg",
        ],
        description: "水洗棉經微起毛加工，打造出柔軟觸感。使用有機棉製成。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-women-shirts-001.jpg",
          "/images/productimages/product-women-shirts-002.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-women-shirts-001.jpg",
          "/images/productimages/product-women-shirts-002.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "棉100%" },
          { label: "條碼", value: "4550584891001" },
        ],
        categories: [
          { parent: "女裝", children: ["襯衫"] },
        ],
        relatedProducts: [
          {
            id: "women-shirts-002",
            image: "/images/productimages/product-women-shirts-003.jpg",
            title: "女水洗平織布標準領長袖襯衫深藍直紋",
            price: 790,
          },
          {
            id: "women-shirts-003",
            image: "/images/productimages/product-women-shirts-005.jpg",
            title: "女吉貝木棉混二重紗織長版衫原色",
            price: 1190,
          },
        ],
        reviews: [
          {
            reviewId: "r-201",
            userId: "u-100",
            rating: 4,
            comment: "加熱方便，配番茄醬很不錯！",
            timestamp: "2025-02-10T10:15:30Z",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "women-shirts-002",
        title: "女水洗平織布標準領長袖襯衫深藍直紋",
        price: 790,
        image: [
          "/images/productimages/product-women-shirts-003.jpg",
          "/images/productimages/product-women-shirts-004.jpg",
        ],        
        description: "水洗棉經微起毛加工，打造出柔軟觸感。使用有機棉製成。",
        descriptionImage: [{ image: "" }],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-women-shirts-003.jpg",
          "/images/productimages/product-women-shirts-004.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-women-shirts-003.jpg",
          "/images/productimages/product-women-shirts-004.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "棉100%" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "女裝", children: ["襯衫"] },
        ],
        relatedProducts: [
          {
            id: "women-shirts-001",
            image: "/images/productimages/product-women-shirts-001.jpg",
            title: "女水洗平織布立領長版襯衫白色",
            price: 1190,
          },
          {
            id: "women-shirts-003",
            image: "/images/productimages/product-women-shirts-005.jpg",
            title: "女吉貝木棉混二重紗織長版衫原色",
            price: 1190,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "women-shirts-003",
        title: "女吉貝木棉混二重紗織長版衫原色",
        price: 1190,
        image: [
          "/images/productimages/product-women-shirts-005.jpg",
          "/images/productimages/product-women-shirts-006.jpg",
        ],        
        description: "使用天然的輕盈纖維、吉貝木棉製成的柔軟紗織材質。使用有機棉製成。",
        descriptionImage: [{ image: "" }],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-women-shirts-005.jpg",
          "/images/productimages/product-women-shirts-006.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-women-shirts-005.jpg",
          "/images/productimages/product-women-shirts-006.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "棉90%,吉貝木棉10%" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "女裝", children: ["襯衫"] },
        ],
        relatedProducts: [
          {
            id: "women-shirts-002",
            image: "/images/productimages/product-women-shirts-003.jpg",
            title: "女水洗平織布標準領長袖襯衫深藍直紋",
            price: 790,
          },
          {
            id: "women-shirts-003",
            image: "/images/productimages/product-women-shirts-005.jpg",
            title: "女吉貝木棉混二重紗織長版衫原色",
            price: 1190,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],

    pants: [
      {
        id: "women-pants-001",
        title: "女撥水加工錐形褲墨灰",
        price: 990,
        image: [
          "/images/productimages/product-women-pants-001.jpg",
          "/images/productimages/product-women-pants-002.jpg",
        ],
        description: "使用厚度適中、具有硬挺感的素材，並且經撥水加工處理。洗滌後不易起皺。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-women-pants-001.jpg",
          "/images/productimages/product-women-pants-002.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-women-pants-001.jpg",
          "/images/productimages/product-women-pants-002.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "柬埔寨" },
          { label: "材質", value: "本體:聚酯纖維94%,聚酯纖維6%,口袋布:聚酯纖維100%" },
          { label: "條碼", value: "4550584891001" },
        ],
        categories: [
          { parent: "女裝", children: ["褲子"] },
        ],
        relatedProducts: [
          {
            id: "women-pants-002",
            image: "/images/productimages/product-women-pants-003.jpg",
            title: "女彈性針織舒適錐形褲煙燻藍",
            price: 1190,
          },
          {
            id: "women-pants-003",
            image: "/images/productimages/product-women-pants-005.jpg",
            title: "女二重織裏毛裙墨灰",
            price: 690,
          },
        ],
        reviews: [
          {
            reviewId: "r-201",
            userId: "u-100",
            rating: 4,
            comment: "加熱方便，配番茄醬很不錯！",
            timestamp: "2025-02-10T10:15:30Z",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "women-pants-002",
        title: "女彈性針織舒適錐形褲煙燻藍",
        price: 1190,
        image: [
          "/images/productimages/product-women-pants-003.jpg",
          "/images/productimages/product-women-pants-004.jpg",
        ],        
        description: "採用具伸縮性的布料，提升穿著舒適感。使用有機棉製成。",
        descriptionImage: [{ image: "" }],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-women-pants-003.jpg",
          "/images/productimages/product-women-pants-004.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-women-pants-003.jpg",
          "/images/productimages/product-women-pants-004.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "棉69%,聚酯纖維23%,彈性纖維8%" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "女裝", children: ["褲子"] },
        ],
        relatedProducts: [
          {
            id: "women-pants-001",
            image: "/images/productimages/product-women-pants-003.jpg",
            title: "女撥水加工錐形褲墨灰",
            price: 990,
          },
          {
            id: "women-pants-003",
            image: "/images/productimages/product-women-pants-005.jpg",
            title: "女二重織裏毛裙墨灰",
            price: 690,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "women-pants-003",
        title: "女二重織裏毛裙墨灰",
        price: 690,
        image: [
          "/images/productimages/product-women-pants-005.jpg",
          "/images/productimages/product-women-pants-006.jpg",
        ],        
        description: "編織成含有空氣的雙層結構，賦予輕柔的穿著感受。使用有機棉製成。",
        descriptionImage: [{ image: "" }],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-women-pants-005.jpg",
          "/images/productimages/product-women-pants-006.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-women-pants-005.jpg",
          "/images/productimages/product-women-pants-006.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "本體:棉65%,聚酯纖維31%,彈性纖維4%,口袋布:棉100%" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "女裝", children: ["褲子"] },
        ],
        relatedProducts: [
          {
            id: "women-pants-001",
            image: "/images/productimages/product-women-pants-003.jpg",
            title: "女撥水加工錐形褲墨灰",
            price: 990,
          },
          {
            id: "women-pants-002",
            image: "/images/productimages/product-women-pants-003.jpg",
            title: "女彈性針織舒適錐形褲煙燻藍",
            price: 1190,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],
  },


  men: {
    outerwear: [
      {
        id: "men-outerwear-001",
        title: "男撥水加工連帽外套暗藍",
        price: 990,
        image: [
          "/images/productimages/product-men-outerwear-001.jpg",
          "/images/productimages/product-men-outerwear-002.jpg",
        ],
        description: "外套的特色為具有撥水加工處理的素材。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-men-outerwear-001.jpg",
          "/images/productimages/product-men-outerwear-002.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-men-outerwear-001.jpg",
          "/images/productimages/product-men-outerwear-002.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "聚酯纖維100%,(內側使用聚氨酯樹脂)" },
          { label: "條碼", value: "4550584891001" },
        ],
        categories: [
          { parent: "男裝", children: ["外套"] },
        ],
        relatedProducts: [
          {
            id: "men-outerwear-002",
            image: "/images/productimages/product-men-outerwear-003.jpg",
            title: "男吉貝木棉混人字紋鋪棉背心原色",
            price: 1590,
          },
          {
            id: "men-outerwear-003",
            image: "/images/productimages/product-men-outerwear-005.jpg",
            title: "男吉貝木棉混人字紋工作外套原色",
            price: 1790,
          },
        ],
        reviews: [
          {
            reviewId: "r-201",
            userId: "u-100",
            rating: 4,
            comment: "加熱方便，配番茄醬很不錯！",
            timestamp: "2025-02-10T10:15:30Z",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "men-outerwear-002",
        title: "男吉貝木棉混人字紋鋪棉背心原色",
        price: 1590,
        image: [
          "/images/productimages/product-men-outerwear-003.jpg",
          "/images/productimages/product-men-outerwear-004.jpg",
        ],        
        description: "使用天然的輕盈纖維、吉貝木棉製成的外套。",
        descriptionImage: [{ image: "" }],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-men-outerwear-003.jpg",
          "/images/productimages/product-men-outerwear-004.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-men-outerwear-003.jpg",
          "/images/productimages/product-men-outerwear-004.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "表布:棉70%,吉貝木棉30%,填充物:聚酯纖維100%,裏布:聚酯纖維100%" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "男裝", children: ["外套"] },
        ],
        relatedProducts: [
          {
            id: "men-outerwear-001",
            image: "/images/productimages/product-men-outerwear-003.jpg",
            title: "男撥水加工連帽外套暗藍",
            price: 990,
          },
          {
            id: "men-outerwear-003",
            image: "/images/productimages/product-men-outerwear-005.jpg",
            title: "男吉貝木棉混人字紋工作外套原色",
            price: 1790,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "men-outerwear-003",
        title: "男吉貝木棉混人字紋工作外套原色",
        price: 1790,
        image: [
          "/images/productimages/product-men-outerwear-005.jpg",
          "/images/productimages/product-men-outerwear-006.jpg",
        ],        
        description: "使用天然的輕盈纖維、吉貝木棉製成的外套。",
        descriptionImage: [{ image: "" }],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-men-outerwear-005.jpg",
          "/images/productimages/product-men-outerwear-006.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-men-outerwear-005.jpg",
          "/images/productimages/product-men-outerwear-006.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "孟加拉" },
          { label: "材質", value: "棉70%,吉貝木棉30%" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "男裝", children: ["外套"] },
        ],
        relatedProducts: [
          {
            id: "men-outerwear-001",
            image: "/images/productimages/product-men-outerwear-003.jpg",
            title: "男撥水加工連帽外套暗藍",
            price: 990,
          },
          {
            id: "men-outerwear-002",
            image: "/images/productimages/product-men-outerwear-003.jpg",
            title: "男吉貝木棉混人字紋鋪棉背心原色",
            price: 1590,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],

    shirts: [
      {
        id: "men-shirts-001",
        title: "男水洗牛津布立領長袖襯衫淡藍直紋",
        price: 790,
        image: [
          "/images/productimages/product-men-shirts-001.jpg",
          "/images/productimages/product-men-shirts-002.jpg",
        ],
        description: "利用水洗加工呈現棉原始的樸實質感。使用有機棉製成。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-men-shirts-001.jpg",
          "/images/productimages/product-men-shirts-002.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-men-shirts-001.jpg",
          "/images/productimages/product-men-shirts-002.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "棉100%" },
          { label: "條碼", value: "4550584891001" },
        ],
        categories: [
          { parent: "男裝", children: ["襯衫"] },
        ],
        relatedProducts: [
          {
            id: "men-shirts-002",
            image: "/images/productimages/product-men-shirts-003.jpg",
            title: "男吉貝木棉混二重紗織立領長袖襯衫卡其",
            price: 990,
          },
          {
            id: "men-shirts-003",
            image: "/images/productimages/product-men-shirts-005.jpg",
            title: "男吉貝木棉混二重紗織長袖襯衫白直紋",
            price: 990,
          },
        ],
        reviews: [
          {
            reviewId: "r-201",
            userId: "u-100",
            rating: 4,
            comment: "加熱方便，配番茄醬很不錯！",
            timestamp: "2025-02-10T10:15:30Z",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "men-shirts-002",
        title: "男吉貝木棉混二重紗織立領長袖襯衫卡其",
        price: 990,
        image: [
          "/images/productimages/product-men-shirts-003.jpg",
          "/images/productimages/product-men-shirts-004.jpg",
        ],        
        description: "使用天然的輕盈纖維、吉貝木棉製成的柔軟紗織材質。使用有機棉製成。使用天然的輕盈纖維、吉貝木棉製成的柔軟紗織材質。使用有機棉製成。使用天然的輕盈纖維、吉貝木棉製成的柔軟紗織材質。使用有機棉製成。",
        descriptionImage: [{ image: "" }],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-men-shirts-003.jpg",
          "/images/productimages/product-men-shirts-004.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-men-shirts-003.jpg",
          "/images/productimages/product-men-shirts-004.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "棉90%,吉貝木棉10%" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "男裝", children: ["襯衫"] },
        ],
        relatedProducts: [
          {
            id: "men-shirts-001",
            image: "/images/productimages/product-men-shirts-001.jpg",
            title: "男水洗牛津布立領長袖襯衫淡藍直紋",
            price: 790,
          },
          {
            id: "men-shirts-003",
            image: "/images/productimages/product-men-shirts-005.jpg",
            title: "男吉貝木棉混二重紗織長袖襯衫白直紋",
            price: 990,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "men-shirts-003",
        title: "男吉貝木棉混二重紗織長袖襯衫白直紋",
        price: 990,
        image: [
          "/images/productimages/product-men-shirts-005.jpg",
          "/images/productimages/product-men-shirts-006.jpg",
        ],        
        description: "使用天然的輕盈纖維、吉貝木棉製成的柔軟紗織材質。使用有機棉製成。",
        descriptionImage: [{ image: "" }],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-men-shirts-005.jpg",
          "/images/productimages/product-men-shirts-006.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-men-shirts-005.jpg",
          "/images/productimages/product-men-shirts-006.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "棉90%,吉貝木棉10%" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "男裝", children: ["襯衫"] },
        ],
        relatedProducts: [
          {
            id: "men-shirts-001",
            image: "/images/productimages/product-men-shirts-001.jpg",
            title: "男水洗牛津布立領長袖襯衫淡藍直紋",
            price: 790,
          },
          {
            id: "men-shirts-002",
            image: "/images/productimages/product-men-shirts-003.jpg",
            title: "男吉貝木棉混二重紗織立領長袖襯衫卡其",
            price: 990,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],

    pants: [
      {
        id: "men-pants-001",
        title: "男彈性針織工作褲摩卡棕",
        price: 990,
        image: [
          "/images/productimages/product-men-pants-001.jpg",
          "/images/productimages/product-men-pants-002.jpg",
        ],
        description: "具伸縮性的針織素材製成穿著舒適的工作褲。使用有機棉製成。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-men-pants-001.jpg",
          "/images/productimages/product-men-pants-002.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-men-pants-001.jpg",
          "/images/productimages/product-men-pants-002.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "棉50%,聚酯纖維36%,彈性纖維14%" },
          { label: "條碼", value: "4550584891001" },
        ],
        categories: [
          { parent: "男裝", children: ["褲子"] },
        ],
        relatedProducts: [
          {
            id: "men-pants-002",
            image: "/images/productimages/product-men-pants-003.jpg",
            title: "男裏毛寬版褲深藍",
            price: 690,
          },
          {
            id: "men-pants-003",
            image: "/images/productimages/product-men-pants-005.jpg",
            title: "男水洗棉舒適長褲卡其綠",
            price: 790,
          },
        ],
        reviews: [
          {
            reviewId: "r-201",
            userId: "u-100",
            rating: 4,
            comment: "加熱方便，配番茄醬很不錯！",
            timestamp: "2025-02-10T10:15:30Z",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "men-pants-002",
        title: "男裏毛寬版褲深藍",
        price: 690,
        image: [
          "/images/productimages/product-men-pants-003.jpg",
          "/images/productimages/product-men-pants-004.jpg",
        ],        
        description: "使用內裏起毛的裏毛素材，製成肌膚觸感佳，穿著感受輕盈的單品。",
        descriptionImage: [{ image: "" }],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-men-pants-003.jpg",
          "/images/productimages/product-men-pants-004.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-men-pants-003.jpg",
          "/images/productimages/product-men-pants-004.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "本體:棉68%,聚酯纖維32%,口袋布(底層布):棉100%" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "男裝", children: ["褲子"] },
        ],
        relatedProducts: [
          {
            id: "men-pants-001",
            image: "/images/productimages/product-men-pants-001.jpg",
            title: "男彈性針織工作褲摩卡棕",
            price: 990,
          },
          {
            id: "men-pants-003",
            image: "/images/productimages/product-men-pants-005.jpg",
            title: "男水洗棉舒適長褲卡其綠",
            price: 790,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "men-pants-003",
        title: "男水洗棉舒適長褲卡其綠",
        price: 790,
        image: [
          "/images/productimages/product-men-pants-005.jpg",
          "/images/productimages/product-men-pants-006.jpg",
        ],        
        description: "使用100％棉質，製成寬鬆舒適的設計。",
        descriptionImage: [{ image: "" }],
        isConfigurable: true,
        variants: [
          {
            color: "白色",
            image: [
          "/images/productimages/product-men-pants-005.jpg",
          "/images/productimages/product-men-pants-006.jpg",
            ],
            sizes: [
              { size: "S", stock: 10 },
              { size: "M", stock: 8 },
              { size: "L", stock: 12 },
              { size: "XL", stock: 5 }
            ]
          },
          {
            color: "黃色",
            image: [
          "/images/productimages/product-men-pants-005.jpg",
          "/images/productimages/product-men-pants-006.jpg",
            ],
            sizes: [
              { size: "S", stock: 5 },
              { size: "M", stock: 10 },
              { size: "L", stock: 7 },
              { size: "XL", stock: 3 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "孟加拉" },
          { label: "材質", value: "本體:棉100%,口袋布:聚酯纖維65%,棉35%" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "男裝", children: ["褲子"] },
        ],
        relatedProducts: [
          {
            id: "men-pants-001",
            image: "/images/productimages/product-men-pants-001.jpg",
            title: "男彈性針織工作褲摩卡棕",
            price: 990,
          },
          {
            id: "men-pants-002",
            image: "/images/productimages/product-men-pants-003.jpg",
            title: "男裏毛寬版褲深藍",
            price: 690,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],
  },

  bedding: {
    pillowsandpillowcases: [
      {
        id: "bedding-pillows-001",
        title: "大豆蛋白纖維枕/43",
        price: 990,
        image: [
          "/images/productimages/product-bedding-pillows-001.jpg",
          "/images/productimages/product-bedding-pillows-002.jpg",
        ],
        description: "枕芯部分使用大豆蛋白複合纖維，具有抗菌功能且不易回潮。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-bedding-pillows-001.jpg",
          "/images/productimages/product-bedding-pillows-002.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "中國" },
          { label: "材質", value: "表面面料:萊賽爾纖維67% 棉33%　填充物:聚酯纖維60% 人造蛋白質纖維40%" },
          { label: "規格", value: "【成品尺寸】43x63cm" },
          { label: "條碼", value: "4550584891001" },
        ],
        categories: [
          { parent: "寢具織品", children: ["枕頭｜枕頭套"] },
        ],
        relatedProducts: [
          {
            id: "bedding-pillows-002",
            image: "/images/productimages/product-bedding-pillows-003.jpg",
            title: "羽毛枕/43*63cm",
            price: 299,
          },
          {
            id: "bedding-pillows-003",
            image: "/images/productimages/product-bedding-pillows-005.jpg",
            title: "可水洗枕/43",
            price: 499,
          },
        ],
        reviews: [
          {
            reviewId: "r-201",
            userId: "u-100",
            rating: 4,
            comment: "加熱方便，配番茄醬很不錯！",
            timestamp: "2025-02-10T10:15:30Z",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "bedding-pillows-002",
        title: "羽毛枕/43*63cm",
        price: 299,
        image: [
          "/images/productimages/product-bedding-pillows-003.jpg",
          "/images/productimages/product-bedding-pillows-004.jpg",
        ],        
        description: "使用輕量且富彈力的水鳥羽毛，不易彎曲，可長期使用。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-bedding-pillows-003.jpg",
          "/images/productimages/product-bedding-pillows-004.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "中國" },
          { label: "材質", value: "表布：外側:聚酯纖維65%棉35%　表布：內側:聚酯纖維100%　填充物:精洗脫鴨羽 防絨加工:填充物重量：0.90 kg" },
          { label: "規格", value: "【成品尺寸】43x63cm" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "寢具織品", children: ["枕頭｜枕頭套"] },
        ],
        relatedProducts: [
          {
            id: "bedding-pillows-001",
            image: "/images/productimages/product-bedding-pillows-001.jpg",
            title: "大豆蛋白纖維枕/43",
            price: 990,
          },
          {
            id: "bedding-pillows-003",
            image: "/images/productimages/product-bedding-pillows-005.jpg",
            title: "可水洗枕/43",
            price: 499,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "bedding-pillows-003",
        title: "可水洗枕/43",
        price: 499,
        image: [
          "/images/productimages/product-bedding-pillows-005.jpg",
          "/images/productimages/product-bedding-pillows-006.jpg",
        ],        
        description: "素材為可水洗的聚酯纖維，側面使用高密度布料，可防止蟎蟲。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-bedding-pillows-005.jpg",
          "/images/productimages/product-bedding-pillows-006.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "中國" },
          { label: "材質", value: "表布：外側:聚酯纖維100%，表布：填充物:聚酯纖維100%，表布：內側:聚酯纖維100%。填充物:聚酯纖維100%。壓紋縫製加工。" },
          { label: "規格", value: "【成品尺寸】43x63cm" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "寢具織品", children: ["枕頭｜枕頭套"] },
        ],
        relatedProducts: [
          {
            id: "bedding-pillows-001",
            image: "/images/productimages/product-bedding-pillows-001.jpg",
            title: "大豆蛋白纖維枕/43",
            price: 990,
          },
          {
            id: "bedding-pillows-002",
            image: "/images/productimages/product-bedding-pillows-003.jpg",
            title: "羽毛枕/43*63cm",
            price: 299,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],

    quiltsandduvetcovers: [
      {
        id: "bedding-quilts-001",
        title: "暖棉被套/單人加大/棕色*米灰色",
        price: 1690,
        image: [
          "/images/productimages/product-bedding-quilts-001.jpg",
          "/images/productimages/product-bedding-quilts-002.jpg",
        ],
        description: "棉混莫代爾纖維製作而成。素材具吸濕保溫功能，觸感柔軟光滑。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-bedding-quilts-001.jpg",
          "/images/productimages/product-bedding-quilts-002.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "棉55%，莫代爾纖維45%" },
          { label: "規格", value: "【成品尺寸】165*205cm 附拉鍊" },
          { label: "條碼", value: "4550584891001" },
        ],
        categories: [
          { parent: "寢具織品", children: ["棉被｜被套"] },
        ],
        relatedProducts: [
          {
            id: "bedding-quilts-002",
            image: "/images/productimages/product-bedding-quilts-003.jpg",
            title: "暖棉被套/雙人/淺米*粉紅",
            price: 1890,
          },
          {
            id: "bedding-quilts-003",
            image: "/images/productimages/product-bedding-quilts-005.jpg",
            title: "再生聚酯速乾被套/棕格紋",
            price: 1190,
          },
        ],
        reviews: [
          {
            reviewId: "r-201",
            userId: "u-100",
            rating: 4,
            comment: "加熱方便，配番茄醬很不錯！",
            timestamp: "2025-02-10T10:15:30Z",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "bedding-quilts-002",
        title: "暖棉被套/雙人/淺米*粉紅",
        price: 1890,
        image: [
          "/images/productimages/product-bedding-quilts-003.jpg",
          "/images/productimages/product-bedding-quilts-004.jpg",
        ],        
        description: "棉混莫代爾纖維製作而成。素材具吸濕保溫功能，觸感柔軟光滑。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-bedding-quilts-003.jpg",
          "/images/productimages/product-bedding-quilts-004.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "棉55%，莫代爾纖維45%" },
          { label: "規格", value: "【成品尺寸】185*205cm 附拉鍊" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "寢具織品", children: ["棉被｜被套"] },
        ],
        relatedProducts: [
          {
            id: "bedding-quilts-001",
            image: "/images/productimages/product-bedding-quilts-001.jpg",
            title: "暖棉被套/單人加大/棕色*米灰色",
            price: 1690,
          },
          {
            id: "bedding-quilts-003",
            image: "/images/productimages/product-bedding-quilts-005.jpg",
            title: "再生聚酯速乾被套/棕格紋",
            price: 1190,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "bedding-quilts-003",
        title: "再生聚酯速乾被套/棕格紋",
        price: 1190,
        image: [
          "/images/productimages/product-bedding-quilts-005.jpg",
          "/images/productimages/product-bedding-quilts-006.jpg",
        ],        
        description: "使用聚酯纖維素材製成。洗滌後快速乾燥，清潔保養皆十分容易。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-bedding-quilts-005.jpg",
          "/images/productimages/product-bedding-quilts-006.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "中國" },
          { label: "材質", value: "聚酯纖維100%" },
          { label: "規格", value: "【成品尺寸】145*210cm 附拉鍊。【適用尺寸】150*210 cm。" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "寢具織品", children: ["棉被｜被套"] },
        ],
        relatedProducts: [
          {
            id: "bedding-quilts-001",
            image: "/images/productimages/product-bedding-quilts-001.jpg",
            title: "暖棉被套/單人加大/棕色*米灰色",
            price: 1690,
          },
          {
            id: "bedding-quilts-002",
            image: "/images/productimages/product-bedding-quilts-003.jpg",
            title: "暖棉被套/雙人/淺米*粉紅",
            price: 1890,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],

    fittedsheetsandprotectors: [
      {
        id: "bedding-sheets-001",
        title: "暖棉床包/單人/棕色",
        price: 1190,
        image: [
          "/images/productimages/product-bedding-sheets-001.jpg",
          "/images/productimages/product-bedding-sheets-002.jpg",
        ],
        description: "棉混莫代爾纖維製作而成。素材具吸濕保溫功能，觸感柔軟光滑。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-bedding-sheets-001.jpg",
          "/images/productimages/product-bedding-sheets-002.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "棉55%，莫代爾纖維45%" },
          { label: "規格", value: "【成品尺寸】95*185*35cm 附鬆緊帶" },
          { label: "條碼", value: "4550584891001" },
        ],
        categories: [
          { parent: "寢具織品", children: ["床包｜保潔墊"] },
        ],
        relatedProducts: [
          {
            id: "bedding-sheets-002",
            image: "/images/productimages/product-bedding-sheets-003.jpg",
            title: "暖棉床包/單人加大/淺米",
            price: 1290,
          },
          {
            id: "bedding-sheets-003",
            image: "/images/productimages/product-bedding-sheets-005.jpg",
            title: "暖棉床包/雙人/棕色",
            price: 1490,
          },
        ],
        reviews: [
          {
            reviewId: "r-201",
            userId: "u-100",
            rating: 4,
            comment: "加熱方便，配番茄醬很不錯！",
            timestamp: "2025-02-10T10:15:30Z",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "bedding-sheets-002",
        title: "暖棉床包/單人加大/淺米",
        price: 1290,
        image: [
          "/images/productimages/product-bedding-sheets-003.jpg",
          "/images/productimages/product-bedding-sheets-004.jpg",
        ],        
        description: "棉混莫代爾纖維製作而成。素材具吸濕保溫功能，觸感柔軟光滑。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-bedding-sheets-003.jpg",
          "/images/productimages/product-bedding-sheets-004.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "棉55%，莫代爾纖維45%" },
          { label: "規格", value: "【成品尺寸】115*185*35cm 附鬆緊帶" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "寢具織品", children: ["床包｜保潔墊"] },
        ],
        relatedProducts: [
          {
            id: "bedding-sheets-001",
            image: "/images/productimages/product-bedding-sheets-001.jpg",
            title: "暖棉床包/單人/棕色",
            price: 1190,
          },
          {
            id: "bedding-sheets-003",
            image: "/images/productimages/product-bedding-sheets-005.jpg",
            title: "暖棉床包/雙人/棕色",
            price: 1490,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "bedding-sheets-003",
        title: "暖棉床包/雙人/棕色",
        price: 1490,
        image: [
          "/images/productimages/product-bedding-sheets-005.jpg",
          "/images/productimages/product-bedding-sheets-006.jpg",
        ],        
        description: "棉混莫代爾纖維製作而成。素材具吸濕保溫功能，觸感柔軟光滑。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-bedding-sheets-005.jpg",
          "/images/productimages/product-bedding-sheets-006.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "棉55%，莫代爾纖維45%" },
          { label: "規格", value: "【成品尺寸】135*185*35cm 附鬆緊帶" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "寢具織品", children: ["床包｜保潔墊"] },
        ],
        relatedProducts: [
          {
            id: "bedding-sheets-001",
            image: "/images/productimages/product-bedding-sheets-001.jpg",
            title: "暖棉床包/單人/棕色",
            price: 1190,
          },
          {
            id: "bedding-sheets-002",
            image: "/images/productimages/product-bedding-sheets-003.jpg",
            title: "暖棉床包/單人加大/淺米",
            price: 1290,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],
  },

  furniture: {
    tables: [
      {
        id: "furniture-tables-001",
        title: "木製橢圓矮桌/橡膠木/寬140cm",
        price: 5990,
        image: [
          "/images/productimages/product-furniture-tables-001.jpg",
          "/images/productimages/product-furniture-tables-002.jpg",
        ],
        description: "適合搭配沙發使用的橢圓形桌面矮桌。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-furniture-tables-001.jpg",
          "/images/productimages/product-furniture-tables-002.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "桌板:纖維板(橡膠木貼皮)。桌腳:天然木(橡膠木)" },
          { label: "規格", value: "寬140*深79*高35cm" },
          { label: "條碼", value: "4550584891001" },
        ],
        categories: [
          { parent: "家具", children: ["桌子"] },
        ],
        relatedProducts: [
          {
            id: "furniture-tables-002",
            image: "/images/productimages/product-furniture-tables-003.jpg",
            title: "鋼製可折疊桌/暖灰",
            price: 2690,
          },
          {
            id: "furniture-tables-003",
            image: "/images/productimages/product-furniture-tables-005.jpg",
            title: "山毛櫸餐桌/圓腳/寬180cm",
            price: 15990,
          },
        ],
        reviews: [
          {
            reviewId: "r-201",
            userId: "u-100",
            rating: 4,
            comment: "加熱方便，配番茄醬很不錯！",
            timestamp: "2025-02-10T10:15:30Z",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "furniture-tables-002",
        title: "鋼製可折疊桌/暖灰",
        price: 2690,
        image: [
          "/images/productimages/product-furniture-tables-003.jpg",
          "/images/productimages/product-furniture-tables-004.jpg",
        ],        
        description: "鋼管搭配木製桌板的簡約摺疊桌。不使用時，可以將其折疊收納以節省空間。可與同系列折疊椅配色使用。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-furniture-tables-003.jpg",
          "/images/productimages/product-furniture-tables-004.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "桌面：天然木化粧合板(橡木貼皮)。桌腳：金屬(鋼)。表面加工：桌面：聚氨酯樹脂塗裝，桌腳：環氧樹脂粉體塗裝。" },
          { label: "規格", value: "展開時：約寬80x深50x高70cm　折疊時：約寬80x深50x高7.7cm" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "家具", children: ["桌子"] },
        ],
        relatedProducts: [
          {
            id: "furniture-tables-001",
            image: "/images/productimages/product-furniture-tables-001.jpg",
            title: "木製橢圓矮桌/橡膠木/寬140cm",
            price: 5990,
          },
          {
            id: "furniture-tables-003",
            image: "/images/productimages/product-furniture-tables-005.jpg",
            title: "山毛櫸餐桌/圓腳/寬180cm",
            price: 15990,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "furniture-tables-003",
        title: "山毛櫸餐桌/圓腳/寬180cm",
        price: 15990,
        image: [
          "/images/productimages/product-furniture-tables-005.jpg",
          "/images/productimages/product-furniture-tables-006.jpg",
        ],        
        description: "不特別篩選木紋、節點、顏色濃淡不一的天然木材，有效利用資源。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-furniture-tables-005.jpg",
          "/images/productimages/product-furniture-tables-006.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "結構材料_桌板：天然木積層纖維板（山毛櫸貼皮）。桌板邊緣、立水、桌腳：天然木（山毛櫸貼皮）。表面加工：聚氨酯樹脂塗裝。" },
          { label: "規格", value: "寬180*深85*高72cm。商品重量：約34.5 kg。" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "家具", children: ["桌子"] },
        ],
        relatedProducts: [
          {
            id: "furniture-tables-001",
            image: "/images/productimages/product-furniture-tables-001.jpg",
            title: "木製橢圓矮桌/橡膠木/寬140cm",
            price: 5990,
          },
          {
            id: "furniture-tables-002",
            image: "/images/productimages/product-furniture-tables-003.jpg",
            title: "鋼製可折疊桌/暖灰",
            price: 2690,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],

    chairs: [
      {
        id: "furniture-chairs-001",
        title: "鋼製可堆疊椅凳/暖灰",
        price: 790,
        image: [
          "/images/productimages/product-furniture-chairs-001.jpg",
          "/images/productimages/product-furniture-chairs-002.jpg",
        ],
        description: "鋼管搭配木製座面的簡約椅凳。不使用時可堆疊收納。除了椅子之外，也可作為床或沙發旁的小桌子。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-furniture-chairs-001.jpg",
          "/images/productimages/product-furniture-chairs-002.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "中國" },
          { label: "材質", value: "座面：合板(橡木貼皮)，椅腳：金屬(鋼)。表面加工：座面：聚氨酯樹脂塗裝，椅腳：環氧樹脂粉體塗裝。" },
          { label: "規格", value: "約寬28.5x深28.5x高45cm" },
          { label: "條碼", value: "4550584891001" },
        ],
        categories: [
          { parent: "家具 ", children: ["椅子"] },
        ],
        relatedProducts: [
          {
            id: "furniture-chairs-002",
            image: "/images/productimages/product-furniture-chairs-003.jpg",
            title: "鋼製可折疊木製座椅/暖灰",
            price: 2390,
          },
          {
            id: "furniture-chairs-003",
            image: "/images/productimages/product-furniture-chairs-005.jpg",
            title: "木製圓椅/橡木/深色",
            price: 4990,
          },
        ],
        reviews: [
          {
            reviewId: "r-201",
            userId: "u-100",
            rating: 4,
            comment: "加熱方便，配番茄醬很不錯！",
            timestamp: "2025-02-10T10:15:30Z",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "furniture-chairs-002",
        title: "鋼製可折疊木製座椅/暖灰",
        price: 2390,
        image: [
          "/images/productimages/product-furniture-chairs-003.jpg",
          "/images/productimages/product-furniture-chairs-004.jpg",
        ],        
        description: "鋼管搭配木製座面的簡約折疊椅。不使用時，可以將其折疊收納以節省空間。可與同系列折疊桌配色使用。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-furniture-chairs-003.jpg",
          "/images/productimages/product-furniture-chairs-004.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "中國" },
          { label: "材質", value: "座面．背板：合板(橡木貼皮)。椅腳：金屬(鋼)。表面加工：座面．背板: 聚氨酯樹脂塗裝。椅腳: 環氧樹脂粉體塗裝。" },
          { label: "規格", value: "展開時：約寬45x深50x高79cm 座面高43cm　折疊時：約寬45x深14.5x高90cm" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "家具 ", children: ["椅子"] },
        ],
        relatedProducts: [
          {
            id: "furniture-chairs-001",
            image: "/images/productimages/product-furniture-chairs-001.jpg",
            title: "鋼製可堆疊椅凳/暖灰",
            price: 790,
          },
          {
            id: "furniture-chairs-003",
            image: "/images/productimages/product-furniture-chairs-005.jpg",
            title: "木製圓椅/橡木/深色",
            price: 4990,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "furniture-chairs-003",
        title: "木製圓椅/橡木/深色",
        price: 4990,
        image: [
          "/images/productimages/product-furniture-chairs-005.jpg",
          "/images/productimages/product-furniture-chairs-006.jpg",
        ],        
        description: "椅背和座面十分寬敞，曲線設計，坐起來非常舒適。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-furniture-chairs-005.jpg",
          "/images/productimages/product-furniture-chairs-006.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "越南" },
          { label: "材質", value: "靠背、座面：合板(橡木貼皮)，椅腳：橡木，亮光漆塗裝" },
          { label: "規格", value: "寬45*深51*高77cm/座面高42cm" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "家具 ", children: ["椅子"] },
        ],
        relatedProducts: [
          {
            id: "furniture-chairs-001",
            image: "/images/productimages/product-furniture-chairs-001.jpg",
            title: "鋼製可堆疊椅凳/暖灰",
            price: 790,
          },
          {
            id: "furniture-chairs-002",
            image: "/images/productimages/product-furniture-chairs-003.jpg",
            title: "鋼製可折疊木製座椅/暖灰",
            price: 2390,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],

    beanbagsofas: [
      {
        id: "furniture-beanbag-001",
        title: "懶骨頭沙發.本體/長方形",
        price: 4490,
        image: [
          "/images/productimages/product-furniture-beanbag-001.jpg",
          "/images/productimages/product-furniture-beanbag-002.jpg",
        ],
        description: "長方形尺寸方便一到兩人使用。根據放置方式可調整坐臥方式。簡單的顏色可任意搭配不同的室內空間。",
        descriptionImage:[
          { image: "" },
        ],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-furniture-beanbag-001.jpg",
          "/images/productimages/product-furniture-beanbag-002.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "日本" },
          { label: "材質", value: "內裏:聚苯乙烯(發泡粒) 內套:聚酯纖維100%" },
          { label: "規格", value: "寬120*深38*高38 cm" },
          { label: "條碼", value: "4550584891001" },
        ],
        categories: [
          { parent: "家具 ", children: ["懶骨頭沙發"] },
        ],
        relatedProducts: [
          {
            id: "furniture-beanbag-002",
            image: "/images/productimages/product-furniture-beanbag-003.jpg",
            title: "懶骨頭沙發套/聚酯纖維平織/長方形/芥黃",
            price: 1490,
          },
          {
            id: "furniture-beanbag-003",
            image: "/images/productimages/product-furniture-beanbag-005.jpg",
            title: "懶骨頭沙發.本體",
            price: 3290,
          },
        ],
        reviews: [
          {
            reviewId: "r-201",
            userId: "u-100",
            rating: 4,
            comment: "加熱方便，配番茄醬很不錯！",
            timestamp: "2025-02-10T10:15:30Z",
          },
        ],
        averageRating: 4,
        totalReviews: 1,
        analytics: {
          pageViews: 1530,
          wishListCount: 58,
          salesData: [
            { date: "2025-01-01", unitsSold: 12 },
            { date: "2025-01-02", unitsSold: 10 },
            { date: "2025-01-03", unitsSold: 5 },
          ],
        },
      },
      {
        id: "furniture-beanbag-002",
        title: "懶骨頭沙發套/聚酯纖維平織/長方形/芥黃",
        price: 1490,
        image: [
          "/images/productimages/product-furniture-beanbag-003.jpg",
          "/images/productimages/product-furniture-beanbag-004.jpg",
        ],        
        description: "採用易於清潔的聚酯纖維面料製成，符合使用者身形的長方形本體專用布套。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-furniture-beanbag-003.jpg",
          "/images/productimages/product-furniture-beanbag-004.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: true,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "中國" },
          { label: "材質", value: "聚酯纖維100%" },
          { label: "規格", value: "【成品尺寸】120*38*38cm" },
          { label: "條碼", value: "4550583972042" },
        ],
        categories: [
          { parent: "家具 ", children: ["懶骨頭沙發"] },
        ],
        relatedProducts: [
          {
            id: "furniture-beanbag-001",
            image: "/images/productimages/product-furniture-beanbag-001.jpg",
            title: "懶骨頭沙發.本體/長方形",
            price: 4490,
          },
          {
            id: "furniture-beanbag-003",
            image: "/images/productimages/product-furniture-beanbag-005.jpg",
            title: "懶骨頭沙發.本體",
            price: 3290,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 245,
          wishListCount: 10,
          salesData: [
            { date: "2025-01-10", unitsSold: 8 },
            { date: "2025-01-11", unitsSold: 12 },
          ],
        },
      },
      {
        id: "furniture-beanbag-003",
        title: "懶骨頭沙發.本體",
        price: 3290,
        image: [
          "/images/productimages/product-furniture-beanbag-005.jpg",
          "/images/productimages/product-furniture-beanbag-006.jpg",
        ],        
        description: "伸縮素材部分改用耐久性、伸縮性更佳的聚酯纖維材質，內裡填充的超微粒泡棉展現獨特的坐臥感。",
        descriptionImage: [{ image: "" }],
        isConfigurable: false,
        variants: [
          {
            color: "default",
            image: [
          "/images/productimages/product-furniture-beanbag-005.jpg",
          "/images/productimages/product-furniture-beanbag-006.jpg",
            ],
            sizes: [
              { size: "default", stock: 80 }
            ]
          }
        ],
        isNew: true,
        isSoldOut: false,
        isHotSale: true,
        productDetails: [
          { label: "產地", value: "日本" },
          { label: "材質", value: "材質:聚苯乙烯(發泡粒)內套:聚酯纖維100%*不可清洗" },
          { label: "規格", value: "寬65×深65×高43cm" },
          { label: "條碼", value: "4550584891003" },
        ],
        categories: [
          { parent: "家具 ", children: ["懶骨頭沙發"] },
        ],
        relatedProducts: [
          {
            id: "furniture-beanbag-001",
            image: "/images/productimages/product-furniture-beanbag-001.jpg",
            title: "懶骨頭沙發.本體/長方形",
            price: 4490,
          },
          {
            id: "furniture-beanbag-002",
            image: "/images/productimages/product-furniture-beanbag-003.jpg",
            title: "懶骨頭沙發套/聚酯纖維平織/長方形/芥黃",
            price: 1490,
          },
        ],
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
        analytics: {
          pageViews: 112,
          wishListCount: 9,
          salesData: [
            { date: "2025-01-12", unitsSold: 5 },
            { date: "2025-01-13", unitsSold: 7 },
          ],
        },
      },
    ],
  },
};