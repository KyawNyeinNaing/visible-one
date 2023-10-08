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
import mobileApp1 from "../assets/trippro.com.hk_(iPhone X)-4@2x.png";
import webDesktop from "../assets/trippro.com.hk_cn_-1@2x.png";
import webMobile from "../assets/trippro.com.hk_(iPhone X)-2@2x.png";
import footer from "../assets/singapore-banner.jpg";
// import logo from '/vite.svg'

interface Menu {
  name: string;
  href: string;
}

interface FooterMenu extends Menu {
  child: {
    label: string;
    link: string;
  }[];
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

export const FOOTER_MENUS: FooterMenu[] = [
  {
    name: "Quick Links",
    href: "",
    child: [
      {
        label: "Services",
        link: "/services"
      },
      {
        label: "About Us",
        link: "/about"
      },
      {
        label: "Blog",
        link: "/blog"
      },
      {
        label: "Quotation",
        link: "/quotation"
      },
      {
        label: "Partnership",
        link: "/partnership"
      },
      {
        label: "Contact Us",
        link: "/contact"
      }
    ]
  },
  {
    name: "Our Services",
    href: "",
    child: [
      {
        label: "Web Development",
        link: "/web-dev"
      },
      {
        label: "Web Design",
        link: "/web-design"
      },
      {
        label: "Responsive Website Design",
        link: "/responsive-web-design"
      },
      {
        label: "CMS Website Design",
        link: "/cms-web-design"
      },
      {
        label: "Customer Website Design",
        link: "/customer-web-design"
      },
      {
        label: "UI & UX Website Design",
        link: "/ui-ux-web-design"
      },
      {
        label: "360 Virtual Tour",
        link: "/virtual-tour"
      }
    ]
  },
  {
    name: "",
    href: "",
    child: [
      {
        label: "Ecommerce Development",
        link: "/ecommerce"
      },
      {
        label: "WooCommerce Development",
        link: "/woocommerce"
      },
      {
        label: "osCommerce Development",
        link: "/oscommerce"
      },
      {
        label: "Magento Development",
        link: "/degento-dev"
      },
      {
        label: "SSL Certificate",
        link: "/ssl-certificate"
      },
      {
        label: "Promotion Video",
        link: "/promotion-video"
      }
    ]
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
  mobileApp1,
  webDesktop,
  mobile,
  webMobile,
  footer
};
