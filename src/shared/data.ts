import heroBanner from "../assets/hero-banner.png";
import builtFor from "../assets/responsive.svg";
import wordpress from "../assets/wordpress-development-logo-banner.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import desktop from "../assets/desktop.svg";
import laptop from "../assets/Laptop@2x.png";
import tablet from "../assets/Tablet@2x.png";
import mobile from "../assets/smartphone.svg";
import devwp from "../assets/devwp.visibleone.net_tripprohk_@2x.png";
import challenges from "../assets/case-study-trip-pro-our-challenges@2x.png";
import webApp from "../assets/web.png";
import mobileApp from "../assets/trippro.com.hk_(iPhone X)-5@2x.png";
import webDesktop from "../assets/trippro.com.hk_cn_-1@2x.png";
import webMobile from "../assets/trippro.com.hk_(iPhone X)-2@2x.png";

interface Menu {
  name: string;
  href: string;
}

export const HEADER_MENUS: Menu[] = [
  {
    name: "Home",
    href: "/home"
  },
  {
    name: "Services",
    href: "/service"
  },
  {
    name: "Company",
    href: "/company"
  },
  {
    name: "Blog",
    href: "/blog"
  },
  {
    name: "Contact Us",
    href: "/contact"
  }
];

export const Images = {
  heroBanner,
  builtFor,
  wordpress,
  shoppingCart,
  laptop,
  tablet,
  devwp,
  challenges,
  desktop,
  webApp,
  mobileApp,
  webDesktop,
  mobile,
  webMobile
};
