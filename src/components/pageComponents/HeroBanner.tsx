import { Images } from "../../shared/data";
import styled from "styled-components";
import { Text } from "@radix-ui/themes";
import { Image } from "../ui/Image";

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
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden">
        <BannerImage
          className="h-[600px] relative p-[40px]"
          src={Images.heroBanner}
        >
          <div className="grid grid-cols-12">
            <div className="col-start-3 col-span-8 relative">
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center space-y-[25px]">
                <Text as="p" className="text-white text-[50px] text-center">
                  TRIPPRO - AN ECOMMERCE SOLUTION
                </Text>
                <Text className="text-white text-center">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
                <div className="flex justify-start text-white">
                  <div className="flex justify-start items-center gap-[20px] border-r-2 border-white pr-[30px]">
                    <Text weight="bold">Built for:</Text>
                    <Image
                      width={62}
                      height={58}
                      src={Images.builtFor}
                      alt="built for"
                    />
                  </div>
                  <div className="flex justify-start items-center gap-[20px] border-r-2 border-white px-[30px]">
                    <div>
                      <Text as="p">Technologies:</Text>
                      <Text weight="bold" as="p">
                        Wordpress
                      </Text>
                    </div>
                    <Image
                      width={62}
                      height={58}
                      src={Images.wordpress}
                      alt="wordpress"
                    />
                  </div>
                  <div className="flex justify-start items-center gap-[20px] pl-[30px]">
                    <div>
                      <Text as="p">Industry:</Text>
                      <Text weight="bold" as="p">
                        Ecommerce
                      </Text>
                    </div>
                    <Image
                      width={62}
                      height={58}
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
    </div>
  );
};

export default HeroBanner;
