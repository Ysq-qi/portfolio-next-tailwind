// /app/product/data/product-data.ts

export interface Product {
  image: string;
  title: string;
  price: string;
  isNew?: boolean;
}

export const allProducts: Record<string, Record<string, Product[]>> = {
  men: {
    outwear: [
      { image: "/images/product1.jfif", title: "男裝防風外套 - 黑", price: "NT$1,290", isNew: true },
      { image: "/images/product2.jfif", title: "連帽休閒外套 - 深藍", price: "NT$1,590" },
      { image: "/images/product3.jfif", title: "輕薄羽絨外套 - 灰", price: "NT$1,990" },
    ],
    shirts: [
      { image: "/images/product4.jfif", title: "純棉條紋襯衫", price: "NT$890" },
      { image: "/images/product1.jfif", title: "短袖立領襯衫", price: "NT$790", isNew: true },
      { image: "/images/product2.jfif", title: "牛仔襯衫 - 淺藍", price: "NT$990" },
    ],
    pants: [
      { image: "/images/product3.jfif", title: "彈性牛仔褲", price: "NT$1,090" },
      { image: "/images/product4.jfif", title: "運動短褲 - 黑", price: "NT$590" },
      { image: "/images/product1.jfif", title: "束口慢跑褲 - 灰", price: "NT$790", isNew: true },
    ],
  },
  women: {
    dress: [
      { image: "/images/product2.jfif", title: "碎花連衣裙", price: "NT$1,090" },
      { image: "/images/product3.jfif", title: "排扣襯衫裙 - 米白", price: "NT$1,290" },
      { image: "/images/product4.jfif", title: "純棉連身裙 - 黑", price: "NT$1,190" },
    ],
    knitwear: [
      { image: "/images/product1.jfif", title: "溫暖高領毛衣", price: "NT$890", isNew: true },
      { image: "/images/product2.jfif", title: "粗針織毛衣 - 灰", price: "NT$1,190" },
      { image: "/images/product3.jfif", title: "細針V領毛衣 - 粉", price: "NT$990" },
    ],
    jacket: [
      { image: "/images/product4.jfif", title: "連帽風衣 - 黑", price: "NT$1,590" },
      { image: "/images/product1.jfif", title: "收腰長版風衣", price: "NT$1,990" },
      { image: "/images/product2.jfif", title: "運動防風外套 - 桃紅", price: "NT$1,890", isNew: true },
    ],
  },
  kids: {
    tshirt: [
      { image: "/images/product3.jfif", title: "童裝卡通T-Shirt", price: "NT$390" },
      { image: "/images/product4.jfif", title: "素色短袖T-Shirt", price: "NT$290" },
      { image: "/images/product1.jfif", title: "連帽休閒T - 紅", price: "NT$490", isNew: true },
    ],
    jeans: [
      { image: "/images/product2.jfif", title: "兒童牛仔褲 - 深藍", price: "NT$490" },
      { image: "/images/product3.jfif", title: "兒童刷色牛仔褲", price: "NT$590" },
      { image: "/images/product4.jfif", title: "合身剪裁牛仔褲 - 灰", price: "NT$590", isNew: true },
    ],
    vest: [
      { image: "/images/product1.jfif", title: "兒童羽絨背心 - 紅", price: "NT$990" },
      { image: "/images/product2.jfif", title: "兒童輕量保暖背心 - 灰", price: "NT$1,190", isNew: true },
      { image: "/images/product3.jfif", title: "童裝格紋背心 - 黃", price: "NT$890" },
    ],
  },
  beauty: {
    mask: [
      { image: "/images/product4.jfif", title: "保濕面膜", price: "NT$199", isNew: true },
      { image: "/images/product1.jfif", title: "高效修護面膜", price: "NT$299" },
      { image: "/images/product2.jfif", title: "亮白面膜", price: "NT$259" },
    ],
    lotion: [
      { image: "/images/product3.jfif", title: "清爽型乳液", price: "NT$399" },
      { image: "/images/product4.jfif", title: "深層保濕乳液", price: "NT$499", isNew: true },
      { image: "/images/product1.jfif", title: "美白乳液", price: "NT$550" },
    ],
    serum: [
      { image: "/images/product2.jfif", title: "亮白精華液", price: "NT$699" },
      { image: "/images/product3.jfif", title: "緊緻精華液", price: "NT$799", isNew: true },
      { image: "/images/product4.jfif", title: "玻尿酸補水精華液", price: "NT$849" },
    ],
  },
  food: {
    fastfood: [
      { image: "/images/product1.jfif", title: "冷凍薯條", price: "NT$99" },
      { image: "/images/product2.jfif", title: "微波披薩", price: "NT$120", isNew: true },
      { image: "/images/product3.jfif", title: "速食漢堡排", price: "NT$89" },
    ],
    snack: [
      { image: "/images/product4.jfif", title: "巧克力餅乾", price: "NT$59" },
      { image: "/images/product1.jfif", title: "綜合糖果包", price: "NT$79", isNew: true },
      { image: "/images/product2.jfif", title: "奶油酥餅", price: "NT$49" },
    ],
    drink: [
      { image: "/images/product3.jfif", title: "果汁飲品組合", price: "NT$150" },
      { image: "/images/product4.jfif", title: "蘇打氣泡水", price: "NT$60" },
      { image: "/images/product1.jfif", title: "無糖綠茶罐裝", price: "NT$45", isNew: true },
    ],
  },
};
