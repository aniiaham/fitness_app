import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Fitness is the condition of being physically fit and healthy and involves attributes that include, but are not limited to mental acuity, cardiorespiratory endurance, muscular strength, muscular endurance, body composition, and flexibility.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Fitness is the condition of being physically fit and healthy and involves attributes that include, but are not limited to mental acuity, cardiorespiratory endurance, muscular strength, muscular endurance, body composition, and flexibility.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fitness is the condition of being physically fit and healthy and involves attributes that include, but are not limited to mental acuity, cardiorespiratory endurance, muscular strength, muscular endurance, body composition, and flexibility.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/*HEADER */}
        <motion.div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/*BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/*GRAPHICS AND DESCRIPTION */}
        <div className="mt-16items-center justify-between gap-20 md:mt-28 md:flex">
          {/*GRAPHICS */}
          <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic}/>
          {/*DESCRIPTION */}
          <div>
            {/*TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </div>
              </div>
            </div>
            {/*DESCRIPT */}
            <div>
              <p className="my-5 ">
                Naturally, these generators are best if you already know the
                basics of the exercises you plan on doing. Whether it's running,
                swimming, or hitting the gym, these apps aren't trainers for
                beginners. They're for regular users who want to change things
                up for a fresh workout.
              </p>
              <p className="mb-5 ">
                It's good to have a fitness routine, but routine can get boring.
                Let's fix that with a few randomized workout generators for
                different types of exercises.
              </p>
            </div>
            {/*BUTTON */}
            <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                </ActionButton>
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
