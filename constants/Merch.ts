export interface MerchItem {
  name: string;
  price: string;
  images: string[];
  type: 'tshirt' | 'accessory';
  sizes?: string[];
}

export const MERCH_ITEMS: MerchItem[] = [
  {
    name: "Black Crew Neck Tee",
    price: "1800",
    images: ["/merch/black-front.png", "/merch/black-back.png"],
    type: "tshirt",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    name: "White Crew Neck Tee",
    price: "1600",
    images: ["/merch/white-front.png", "/merch/white-back.png"],
    type: "tshirt",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    name: "Red Wristband",
    price: "300",
    images: ["/merch/red-wb.png"],
    type: "accessory"
  },
  {
    name: "Blue Wristband",
    price: "250",
    images: ["/merch/blue-wb.png"],
    type: "accessory"
  },
];