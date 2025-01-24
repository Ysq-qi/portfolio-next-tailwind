// categories.ts
export interface SubCategory {
  labelZh: string;
  labelEn: string;
}

export interface MainCategory {
  titleZh: string;
  categoryId: string;
  subCategories: SubCategory[];
}

export const categories: MainCategory[] = [
  {
    titleZh: "男裝",
    categoryId: "men",
    subCategories: [
      { labelZh: "外套", labelEn: "outwear" },
      { labelZh: "襯衫", labelEn: "shirts" },
      { labelZh: "褲子", labelEn: "pants" },
    ],
  },
  {
    titleZh: "女裝",
    categoryId: "women",
    subCategories: [
      { labelZh: "連衣裙", labelEn: "dress" },
      { labelZh: "針織毛衣", labelEn: "knitwear" },
      { labelZh: "防風外套", labelEn: "jacket" },
    ],
  },
  {
    titleZh: "童裝",
    categoryId: "kids",
    subCategories: [
      { labelZh: "T-Shirt", labelEn: "tshirt" },
      { labelZh: "牛仔褲", labelEn: "jeans" },
      { labelZh: "羽絨背心", labelEn: "vest" },
    ],
  },
  {
    titleZh: "美容保養",
    categoryId: "beauty",
    subCategories: [
      { labelZh: "面膜", labelEn: "mask" },
      { labelZh: "乳液", labelEn: "lotion" },
      { labelZh: "精華液", labelEn: "serum" },
    ],
  },
  {
    titleZh: "食品",
    categoryId: "food",
    subCategories: [
      { labelZh: "速食 | 調理", labelEn: "fastfood" },
      { labelZh: "糖果 | 餅乾 | 點心", labelEn: "snack" },
      { labelZh: "飲料", labelEn: "drink" },
    ],
  },
];
