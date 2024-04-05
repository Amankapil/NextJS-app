import React from "react";
import img from "./assets/lp.png";
import img2 from "./assets/2716353.jpg";

import Link from "next/link";
import Image from "next/image";

const Odyssey = () => {
  return (
    <>
      <div className="w-full h-[2526px] relative bg-white">
        <div className="w-[771.24px] h-[138.09px] left-[153.76px] top-[205.80px] absolute text-neutral-800 text-[46px] font-semibold font['Poppins'] leading-[69px]">
          Tech Odyssey: Navigating the Digital Seas of Innovation
        </div>
        <Image
          className="w-[50%] h-[490.08px] left-[150.62px] top-[456.12px] absolute rounded-[21.75px]"
          src={img}
          alt=""
        />
        <div className="left-[154px] top-[350.77px] absolute text-gray-800 text-base font-normal font['Poppins']">
          12/04/2024
        </div>
        <div className="h-[2158px] left-[154px] top-[1033.50px] absolute flex-col justify-start items-start gap-[35px] inline-flex">
          <div className="w-[744px] text-neutral-900 text-base font-normal font['Poppins'] leading-normal">
            In the vast expanse of the digital universe, where bytes dance and
            algorithms whisper secrets, we embark on a voyage of discovery
            through the realms of technological innovation. Join us as we chart
            a course through the ever-changing landscapes of web marketing,
            exploring the untold tales of creativity and ingenuity that shape
            our digital world.
          </div>
          <div className="w-[744px] text-neutral-900 text-base font-normal font['Poppins'] leading-normal">
            1. Retail: Crafting Experiences in the Digital Marketplace In the
            bustling bazaars of retail, where commerce and culture collide,
            technology emerges as the architect of a new consumer journey.
            Envision e-commerce platforms, like bustling marketplaces teeming
            with life, where shoppers traverse virtual aisles in search of
            treasures untold. Picture personalized recommendations, like
            whispered secrets shared by trusted advisors, guiding consumers on a
            path to discovery and delight. Here, in this realm of digital
            commerce, every click is a step toward a more immersive and engaging
            shopping experience, every transaction a testament to the power of
            technology to transform the way we buy and sell.
            {/* <br />
            Example: Think of your favorite clothing store's website. With AI,
            it learns what you like based on what you've bought before and what
            you look at. So, next time you visit, it's like your own personal
            shopper, showing you stuff you're most likely to want. How cool is
            that?
            <br /> */}
            <br />
            2. Entertainment: Captivating Audiences in the Digital Theater
            Amidst the shimmering lights of the entertainment industry, where
            dreams take flight and imagination knows no bounds, technology
            emerges as the maestro of a new era of storytelling. Behold
            streaming platforms, like enchanted portals to other worlds, where
            viewers embark on epic adventures from the comfort of their own
            homes. Picture immersive experiences, like shimmering mirages on the
            horizon, inviting audiences to step into the heart of the narrative
            and become part of the story themselves. Here, in this realm of
            digital entertainment, every frame is a brushstroke on the canvas of
            imagination, every interaction a symphony of sight and sound that
            transcends the boundaries of reality.
            <br />
            <br />
            3. Hospitality: Transforming Experiences in the Digital Retreat In
            the tranquil sanctuaries of hospitality, where wanderers find rest
            and travelers become storytellers, technology emerges as the
            guardian of a new era of hospitality. Envision booking platforms,
            like gateways to enchanted realms, where guests discover hidden gems
            and embark on journeys of discovery. Picture smart hotels, like
            living organisms attuned to the needs of their inhabitants,
            anticipating desires and weaving comfort into every corner. Here, in
            this realm of digital hospitality, every stay is a chapter in a
            traveler's tale, every interaction a moment of connection that
            transcends time and space.
            <br />
            <br />
            4. Real Estate: Redefining Spaces in the Digital Landscape In the
            ever-changing vistas of real estate, where dreams take shape and
            homes become havens, technology emerges as the architect of a new
            era of property exploration. Behold virtual tours, like windows to
            other worlds, where buyers wander through digital domains in search
            of their perfect abode. Picture augmented reality, like a magical
            lens that reveals hidden potential and transforms empty spaces into
            dream homes. Here, in this realm of digital real estate, every
            listing is a story waiting to be told, every transaction a milestone
            in the journey toward finding the perfect place to call home.
            <br />
            <br />
            5. Travel: Embarking on Digital Expeditions In the boundless
            horizons of travel, where adventures beckon and wanderlust knows no
            bounds, technology emerges as the navigator of a new era of
            exploration. Envision travel apps, like compasses guiding intrepid
            explorers through uncharted territories and ancient cities alike.
            Picture immersive experiences, like portals to distant lands where
            every step is a journey and every destination a discovery. Here, in
            this realm of digital travel, every itinerary is a roadmap to
            adventure, every memory a treasure to be cherished for a lifetime.
            <br />
          </div>
          <div className="w-[744px] text-neutral-900 text-base font-normal font['Poppins'] leading-normal">
            As we journey through the digital seas of innovation, let us embrace
            the transformative power of technology to shape our world and
            redefine what is possible. For in the boundless expanse of the
            digital universe, the only limit is the horizon of our imagination.
            <br />
          </div>
        </div>

        <div className="left-[1064.25px] top-[1275px] absolute flex-col justify-start items-start gap-9 inline-flex">
          <div className="text-neutral-800 text-[42px] font-semibold font['Poppins'] leading-[63px]">
            Similar articles
          </div>
          <div className="flex-col justify-start items-start gap-[25.50px] flex">
            <div className="h-[343.52px]  w-[295px] px-[29.29px] py-[31.82px] bg-white rounded-[22.22px] shadow flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch h-[279.88px] flex-col justify-end items-start gap-[27.27px] flex">
                <div className="rounded-[7.07px] justify-end items-center inline-flex">
                  {/* <img className="w-[274.77px] h-[194.67px]" src={img} alt="" /> */}
                </div>
                <div className="self-stretch h-[116.74px] flex-col justify-start items-start gap-[15.66px] flex">
                  <div className="self-stretch h-[86.08px] flex-col justify-start items-start gap-[8.08px] flex">
                    <div className="self-stretch text-gray-800 text-xl font-bold font['Poppins']">
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <div className="opacity-80 text-gray-800 text-xs font-normal font['Poppins']">
                      12/12/2012
                    </div>
                  </div>
                  <div className="text-lime-800 text-sm font-bold font['Satoshi'] leading-none">
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[343.52px] w-[295px] px-[29.29px] py-[31.82px] bg-white rounded-[22.22px] shadow flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch h-[279.88px] flex-col justify-end items-start gap-[27.27px] flex">
                <div className="rounded-[7.07px] justify-end items-center inline-flex">
                  {/* <img className="w-[274.77px] h-[194.67px]" src={img} alt="" /> */}
                </div>
                <div className="self-stretch h-[116.74px] flex-col justify-start items-start gap-[15.66px] flex">
                  <div className="self-stretch h-[86.08px] flex-col justify-start items-start gap-[8.08px] flex">
                    <div className="self-stretch text-gray-800 text-xl font-bold font['Poppins']">
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <div className="opacity-80 text-gray-800 text-xs font-normal font['Poppins']">
                      12/12/2012
                    </div>
                  </div>
                  <div className="text-lime-800 text-sm font-bold font'Satoshi'] leading-none">
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[343.52px] w-[295px] px-[29.29px] py-[31.82px] bg-white rounded-[22.22px] shadow flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch h-[279.88px] flex-col justify-end items-start gap-[27.27px] flex">
                <div className="rounded-[7.07px] justify-end items-center inline-flex">
                  {/* <img className="w-[274.77px] h-[194.67px]" src={img} alt="" /> */}
                </div>
                <div className="self-stretch h-[116.74px] flex-col justify-start items-start gap-[15.66px] flex">
                  <div className="self-stretch h-[86.08px] flex-col justify-start items-start gap-[8.08px] flex">
                    <div className="self-stretch text-gray-800 text-xl font-bold fon']">
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <div className="opacity-80 text-gray-800 text-xs font-normal font['Poppins']">
                      12/12/2012
                    </div>
                  </div>
                  <div className="text-lime-800 text-sm font-bold font['Satoshi'] leading-none">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Odyssey;
