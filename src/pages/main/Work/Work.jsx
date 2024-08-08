import React from "react";

const Work = () => {
  const backgroundImage = "/public/hero/hero.jpg";

  return (
    <section className="w-full h-screen relative">
      <div
        style={{
          content: '""',
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          clipPath: "polygon(0 0, 100% 0%, 100% 73%, 0 99%)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          filter: "brightness(0.5)",
          zIndex: -1,
        }}
      ></div>
      <div className="relative z-10 w-full h-full flex flex-col justify-center gap-y-4 items-center text-white">
        <h1 className="text-5xl font-bold">Work</h1>
        <p>This is the work page</p>
      </div>
    </section>
  );
};

export default Work;
