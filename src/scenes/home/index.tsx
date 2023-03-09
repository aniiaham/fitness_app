import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 pb-10 pt-10 md:h-full">
      {/*IMAGE AND MAIN HEADER*/}
      <div>
        {/*MAIN HEADER*/}
        <div>
          {/*HEADINGS*/}
          <div>
            <div>
              <div>
                <img alt="home-page-text" src={HomePageText} />
              </div>
              {/*ACTIONS*/}
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500">

              </AnchorLink>
            </div>
            <p>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World
              Classes. Studios to get the Body Shapes That ypu Dream of... Get
              Yout Dream Body now.
            </p>
          </div>
        </div>
        {/*IMAGE*/}
        <div></div>
      </div>
    </section>
  );
};

export default Home;
