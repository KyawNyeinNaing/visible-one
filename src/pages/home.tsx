import Header from "../components/layout/Header";
import ChallengeList from "../components/pageComponents/ChallengeList";
import HeroBanner from "../components/pageComponents/HeroBanner";
import Button from "../components/ui/Button";
import { Icons, Image } from "../components/ui/Image";
import Title from "../components/ui/Title";
import { Images } from "../shared/data";
import { Text } from "@radix-ui/themes";
import { useFetchAllPostsQuery } from "../store/modules/postsModule";
import Switch from "../components/ui/Switch";
import { useEffect, useState } from "react";
import { cn } from "../shared/cn";
import { Fade } from "react-awesome-reveal";
import Footer from "../components/layout/Footer";

const Landing = () => {
  const [switchToggle, setSwitchToggle] = useState<boolean | undefined>(false);
  const { data = [] } = useFetchAllPostsQuery();

  useEffect(() => {
    const handleScrollAnimations = () => {
      const sections = document.querySelectorAll(".scroll-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          section.classList.add("in-view");
        } else {
          section.classList.remove("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimations);

    return () => {
      window.removeEventListener("scroll", handleScrollAnimations);
    };
  }, []);

  return (
    <>
      <Header />
      <HeroBanner />
      <div className="h-[350px] flex justify-center lg:items-start items-center relative">
        <div className="lg:absolute -top-[66%]">
          <div className="relative">
            <Image src={Images.laptop} width={850} height={400} alt="laptop" />
            <div className="lg:block hidden absolute top-[28px] left-[103px]">
              <Image
                src={Images.devwp}
                className=",e"
                width={644}
                height={403}
                alt="dev"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 lg:pb-[80px] pb-[40px] overflow-hidden">
        <div className="col-start-2 col-span-10">
          <div className="grid grid-cols-12 gap-y-[20px]">
            <Fade
              direction="left"
              className="lg:col-span-6 col-span-12 flex items-center"
            >
              <div className="space-y-[20px]">
                <Fade>
                  <Title>
                    <span>About</span>
                    <span className="text-primary">TRIPPRO</span>
                  </Title>
                </Fade>
                <Text as="p">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy
                </Text>
                <Button value="TOUR TO WEBSITE">TOUR TO WEBSITE</Button>
              </div>
            </Fade>
            <div className="lg:col-span-6 col-span-12">
              <Fade
                direction="right"
                className="flex justify-center items-start relative"
              >
                <div className="">
                  <div className="relative">
                    <Image
                      src={Images.tablet}
                      className="w-auto lg:h-[497px]"
                      alt="tablet"
                    />
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 lg:pb-[80px] pb-[40px] overflow-hidden">
        <div className="col-start-2 col-span-10">
          <div className="grid grid-cols-12 lg:gap-[50px] gap-[30px]">
            <div className="lg:col-span-6 col-span-12">
              <div className="flex justify-center items-start relative lg:mt-[75px]">
                <div className="">
                  <div className="relative">
                    <Image
                      className="lg:h-[480px]"
                      src={Images.challenges}
                      width={738}
                      height={551}
                      alt="challenges"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="space-y-[20px]">
                <Title
                  border={false}
                  className="flex justify-start items-center"
                >
                  <Fade>OUR</Fade>
                  <Fade direction="right" className="text-primary">
                    CHALLENGES
                  </Fade>
                </Title>
                <div className="space-y-[20px]">
                  <ChallengeList postData={data} />
                </div>
                <Button value="View More">View More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 overflow-hidden">
        <div
          className={cn(
            "lg:col-span-4 col-span-12",
            switchToggle ? "flex items-center" : ""
          )}
        >
          <Fade direction="up">
            <div className="max-sm:hidden -ml-[30px] flex justify-start items-start gap-5">
              <Image
                src={switchToggle ? Images.mobileApp : Images.webApp}
                className={cn("", switchToggle && "w-auto h-[375px]")}
                width={270}
                height={360}
                alt="web app"
              />

              {switchToggle && (
                <Image
                  src={Images.mobileApp1}
                  className="w-auto h-[375px]"
                  width={270}
                  height={360}
                  alt="web app"
                />
              )}
            </div>
          </Fade>
        </div>
        <div className="lg:col-span-8 col-span-12">
          <div className="relative text-white bg-gradient-to-r from-primary to-green lg:pt-[60px] pt-[30px] lg:pl-[20em] lg:pr-[10em]">
            <Fade
              direction="left"
              className={cn(
                "lg:absolute",
                switchToggle
                  ? "lg:-top-[9px] lg:-left-[13em]"
                  : "lg:-top-[9px] lg:-left-[20em]"
              )}
            >
              <div className="relative">
                <Image
                  src={switchToggle ? Images.mobile : Images.desktop}
                  className="h-[468px]"
                  width={670}
                  height={400}
                  alt="desktop"
                />
                <div
                  className={cn(
                    "lg:absolute max-sm:hidden",
                    switchToggle
                      ? "top-[40px] left-[205px]"
                      : "top-[31px] left-[133px]"
                  )}
                >
                  <Image
                    src={switchToggle ? Images.webMobile : Images.webDesktop}
                    className={
                      switchToggle
                        ? "w-[262px] h-[410px]"
                        : "w-[406px] h-[261px]"
                    }
                    width={400}
                    height={360}
                    alt="web desktop"
                  />
                </div>
              </div>
            </Fade>
            <Text
              as="p"
              className="color-white lg:text-[36px] text-[24px] pb-[40px] max-sm:text-center"
            >
              Their Old Website & Problems
            </Text>
            <ul className="relative space-y-[10px] pb-[60px] max-md:px-[16px]">
              {[0, 1, 2].map((each, key) => (
                <li key={key} className="flex justify-start items-start gap-3">
                  <Icons.rightArrow className="w-[40px] h-[25px]" />
                  <Text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam
                  </Text>
                </li>
              ))}
              <li className="absolute sm:bottom-0 bottom-[15px] max-sm:w-full max-sm:flex max-sm:justify-center">
                <Switch
                  switchValue={
                    <div className="flex justify-center items-center gap-2 ml-[10px]">
                      {switchToggle ? (
                        <>
                          <Icons.computer />
                          <Text>Desktop</Text>
                        </>
                      ) : (
                        <>
                          <Icons.mobile />
                          <Text>Mobile</Text>
                        </>
                      )}
                    </div>
                  }
                  onCheckedChange={(checked) => setSwitchToggle(checked)}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Landing;
