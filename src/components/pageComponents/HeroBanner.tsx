import { Images } from "../../shared/data";
import styled from "styled-components";
import { Text } from "@radix-ui/themes";
import { Image } from "../ui/Image";
import { useWindowSize } from "../../hooks/useWindowSize";
import { WINDOW_WIDTH } from "../../shared/enum";
import { Fade } from "react-awesome-reveal";

const BannerImage = styled.div<{ src: string }>`
  background: url(${(props) => props.src}) no-repeat center / cover;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.32);
    width: 100%;
    height: 100%;
  }
`;

const HeroBanner = () => {
  const { windowWidth } = useWindowSize();

  return (
    <div className="relative isolate overflow-hidden">
      <BannerImage
        className="lg:h-[600px] h-[400px] relative lg:p-[40px] p-[20px]"
        src={Images.heroBanner}
      >
        <div className="grid grid-cols-12">
          <div className="lg:col-start-3 lg:col-span-8 col-span-12 relative">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center lg:space-y-[25px] space-y-[15px]">
              <Text
                as="p"
                className="text-white lg:text-[50px] text-[30px] text-center flex items-center justify-start gap-x-[10px]"
              >
                <Fade direction="down">TRIPPRO - AN ECOMMERCE SOLUTION</Fade>
              </Text>
              <Text className="text-white text-center">
                <Fade direction="up">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Fade>
              </Text>
              <div className="flex justify-start text-white">
                <div className="flex lg:justify-start justify-between lg:flex-row flex-col items-center lg:gap-[20px] border-r-2 border-white lg:pr-[30px] pr-[15px]">
                  <Text weight="bold">Built for:</Text>
                  <Image
                    width={windowWidth > WINDOW_WIDTH.SM ? 62 : 30}
                    height={windowWidth > WINDOW_WIDTH.SM ? 58 : 30}
                    src={Images.builtFor}
                    alt="built for"
                  />
                </div>
                <div className="flex justify-start lg:flex-row flex-col items-center lg:gap-[20px] border-r-2 border-white lg:px-[30px] px-[15px]">
                  <div>
                    <Text as="p">Technologies:</Text>
                    <Text weight="bold" as="p">
                      Wordpress
                    </Text>
                  </div>
                  <Image
                    width={windowWidth > WINDOW_WIDTH.SM ? 62 : 30}
                    height={windowWidth > WINDOW_WIDTH.SM ? 58 : 30}
                    src={Images.wordpress}
                    alt="wordpress"
                  />
                </div>
                <div className="flex justify-start lg:flex-row flex-col items-center lg:gap-[20px] lg:pl-[30px] pl-[15px]">
                  <div>
                    <Text as="p">Industry:</Text>
                    <Text weight="bold" as="p">
                      Ecommerce
                    </Text>
                  </div>
                  <Image
                    width={windowWidth > WINDOW_WIDTH.SM ? 62 : 30}
                    height={windowWidth > WINDOW_WIDTH.SM ? 58 : 30}
                    src={Images.shoppingCart}
                    alt="wordpress"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BannerImage>
    </div>
  );
};

export default HeroBanner;
