import React from "react";
import TeamCard from "./TeamCard";
import Team1Image from "../../../../public/images/t1.jpg";
import Team2Image from "../../../../public/images/t2.jpg";
import Team3Image from "../../../../public/images/t3.jpg";

const Team = () => {
  return (
    <div className="mt-[7rem] mb-[3rem]">
      <h1 className="heading">
        MEET our expert <span className="text-red-600">shefs</span>
      </h1>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="mt-[5rem] w-[80%] items-center gap-x-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto"
      >
        <TeamCard
          name="John Joe"
          position="kitchen Porter"
          image={Team1Image}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, porro Lorem"
        />
        <TeamCard
          name="Kohn Doe"
          position="Exective Chef"
          image={Team2Image}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, porro Lorem"
        />
        <TeamCard
          name="Hohn Doe"
          position="Head Chef"
          image={Team3Image}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, porro Lorem"
        />
      </div>
    </div>
  );
};

export default Team;
