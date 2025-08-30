export interface MerchItem {
  name: string;
  price: string;
  images: string[];
  type: 'tshirt' | 'accessory' | 'pack';
  sizes?: string[];
  colors?: string[];
  description?: string;
}

export const MERCH_ITEMS: MerchItem[] = [
  {
    name: "Crew Neck Tee",
    price: "1800",
    images: ["/merch/crew-neck-tee.png", "/merch/crew-neck-tee-front.png", "/merch/crew-neck-tee-back.png"],
    type: "tshirt",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    name: "Oversized Tee",
    price: "1600",
    images: ["/merch/oversized-tee.png" , "/merch/oversized-tee-front.png", "/merch/oversized-tee-back.png"],
    type: "tshirt",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    name: "Black Wristband",
    price: "300",
    images: ["/merch/wrist-band-black.png"],
    type: "accessory"
  },
  {
    name: "White Wristband",
    price: "250",
    images: ["/merch/wrist-band-white.png"],
    type: "accessory"
  }, 
  {
    name: "Bucket Hat",
    price: "250",
    images: ["/merch/bucket-hat.png"],
    type: "accessory"
  },
  {
    name: "Water Bottle",
    price: "250",
    images: ["/merch/water-bottle.png"],
    type: "accessory"
  },
  {
    name: "Sticker Pack",
    price: "250",
    images: ["/merch/sticker-pack.png"],
    type: "accessory"
  },
  {
    name: "Merch Pack",
    price: "5000",
    images: ["/merch/merch-pack.png"],
    type: "pack",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White"],
    description: "Includes: Crew Neck Tee, Wristband, Sticker Pack + Secret Item"
  }
];