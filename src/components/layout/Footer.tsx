import styled from "styled-components";
import { FOOTER_MENUS, Images } from "../../shared/data";
import React from "react";
import { Button, Text } from "@radix-ui/themes";
import { Icons } from "../ui/Image";

const FooterStyled = styled.footer`
  background: url(${Images.footer}) no-repeat center / cover;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.43);
  }
`;

const Footer = () => {
  return (
    <FooterStyled
      className="py-[30px] md:h-[500px] h-[620px] relative text-white overflow-hidden"
      aria-labelledby="footer-heading"
    >
      <div className="md:block hidden absolute w-full h-full">
        <div className="grid grid-cols-12">
          <div className="lg:col-start-2 lg:col-span-10 col-span-12">
            <div className="grid grid-cols-12 pb-[30px] border-b-[1px] border-gray">
              <div className="lg:col-span-9 col-span-12">
                <div className="grid grid-cols-12">
                  {FOOTER_MENUS.map((each, key) => (
                    <React.Fragment key={key}>
                      <div className="lg:col-span-4 md:col-span-6 space-y-[20px]">
                        <div>
                          <Text className="text-lg">{each.name}</Text>
                        </div>
                        <ul className="list-disc pl-5 space-y-[15px]">
                          {each.child.map((child, key) => (
                            <li key={key}>{child.label}</li>
                          ))}
                        </ul>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-3 col-span-12">
                <div className="space-y-[20px]">
                  <Text className="text-lg">VISIBLE ONE SINGAPORE</Text>
                  <ul className="space-y-[15px]">
                    <li>+65 6248 0838</li>
                    <li>info@visibleone.com</li>
                    <li>
                      24 Sin Ming Lane, Midview City #07-93, Singapore 573970
                    </li>
                    <li className="flex justify-between items-center">
                      <Button>Contact Us</Button>
                      <Button variant="ghost">Contact HK Office</Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-2 col-span-10 space-y-5 py-[30px]">
            <div className="flex items-center justify-center gap-[15px]">
              <Icons.facebook className="w-[35px] h-[35px]" />
              <Icons.twitter className="w-[30px] h-[30px]" />
              <Icons.instagram className="w-[30px] h-[30px]" />
              <Icons.linkedin className="w-[35px] h-[35px]" />
            </div>
            <p className="text-md leading-5 text-gray-400 flex justify-center items-center gap-[30px]">
              <ul className="list-disc flex justify-center items-center gap-x-[30px]">
                <li>Shopping T&C</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
              <Text>&copy; 2023 - Visible One</Text>
            </p>
          </div>
        </div>
      </div>
      <div className="block md:hidden absolute w-full h-full">
        {FOOTER_MENUS.map((each, key) => (
          <React.Fragment key={key}>
            <div className="space-y-[10px] px-[30px]">
              <div>
                <Text className="text-lg">{each.name}</Text>
              </div>
              <ul className="list-disc pl-5 flex justify-start items-center flex-wrap gap-x-[40px]">
                {each.child.map((child, key) => (
                  <li key={key} className="mb-[10px]">
                    {child.label}
                  </li>
                ))}
              </ul>
            </div>
          </React.Fragment>
        ))}
      </div>
    </FooterStyled>
  );
};

export default Footer;
