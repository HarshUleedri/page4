const AboutMe = () => {
  return (
    <section className="mx-auto max-w-7xl space-y-8 mt-20 px-4 lg:px-0 ">
      {/* badge */}
      <div className="gradient-border w-fit  ">
        <div className="badge font-semibold">About Me</div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 lg:mb-16 ">
        <h2 className="lg:w-3/5 text-3xl font-medium lg:text-5xl lg:pr-12">
          Design has always been more than just a job - it's my passion
        </h2>
        <div className="lg:w-2/5 flex lg:justify-end  lg:items-end">
          <p className=" w-4/5 text-primary/50 font-medium ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsa
            labore magni.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4  h-96  ">
          <img
            className="size-full object-cover rounded-2xl "
            src={
              "https://images.pexels.com/photos/19238352/pexels-photo-19238352.jpeg"
            }
            alt="image"
          />
        </div>
        <div className="lg:w-2/5 lg:h-96 flex flex-row lg:flex-col gap-4 my-8 lg:my-0 lg:gap-6 lg:items-center lg:justify-center ">
          <div className=" p-4 lg:w-3/5 h-fit lg:ml-28">
            <p className="text-5xl font-medium flex items-center mb-4 ">
              <div>+</div>200
            </p>
            <p className="text-primary/50 font-medium text-sm">
              Lorem ipsum dolor sit amet elit consectetur adipisicing.
            </p>
          </div>
          <div className=" p-4 lg:w-3/5 h-fit lg:ml-28">
            <p className="text-5xl font-medium flex items-center mb-4 ">
              <div>+</div>150
            </p>
            <p className="text-primary/50 font-medium text-sm">
              Lorem ipsum dolor sit amet elit consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
