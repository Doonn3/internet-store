import AppleBYZS852I from "../shared/assets/imgs/Image-2.png";
import AppleEarPods1 from "../shared/assets/imgs/Image-1.png";
import AppleEarPods2 from "../shared/assets/imgs/Image.png";
import AppleAirPods3 from "../shared/assets/imgs/Image-5.png";
import GERLAXGH04 from "../shared/assets/imgs/Image-4.png";
import BOROFONEBO4 from "../shared/assets/imgs/Image-3.png";

export type ItemType = {
  id: number;
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
};

export const headphones: ItemType[] = [
  {
    id: 0,
    img: AppleBYZS852I,
    title: "Apple BYZ S852I",
    price: 2927,
    oldPrice: 3527,
    rate: 4.7,
  },
  {
    id: 1,
    img: AppleEarPods1,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 2,
    img: AppleEarPods2,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 3,
    img: AppleAirPods3,
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
  },
  {
    id: 4,
    img: GERLAXGH04,
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
  },
  {
    id: 5,
    img: BOROFONEBO4,
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
  },
];
