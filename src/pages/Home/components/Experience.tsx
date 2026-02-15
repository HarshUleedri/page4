const Experience = () => {
  const experience: { title: string; description: string; year: string }[] = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      year: "2023 - 2024",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      year: "2024 - 2025",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      year: "2025 - 2026",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      year: "2026 - Now",
    },
  ];
  return (
    <section className="mb-20 px-4 lg:px-0">
      <div className="space-y-8 max-w-7xl mx-auto ">
        <div className="gradient-border w-fit  ">
          <div className="badge font-semibold">Experience</div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 mb-8 lg:mb-16 ">
          <h2 className="lg:w-3/5 text-3xl font-medium  lg:text-5xl lg:pr-12">
            A Yearly snapshot of my creative growth
          </h2>
          <div className="lg:w-2/5 lg:flex justify-end  items-end">
            <p className=" lg:w-4/5 text-primary/50 font-medium ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              ipsa labore magni. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        {experience.map((exp, idx, arr) => (
          <>
            <div
              key={idx}
              className=" py-4 lg:px-32 hover:bg-secondary flex justify-between items-center "
            >
              <div className=" space-y-2 max-w-4/6 ">
                <h3 className="text-base lg:text-xl leading-5 font-semibold">
                  {exp.title}
                </h3>
                <p className="w-4/5 text-xs lg:text-sm font-semibold text-primary/50">
                  {exp.description}
                </p>
              </div>
              <div>
                <p className="text-lg lg:text-4xl font-semibold">{exp.year}</p>
              </div>
            </div>
            {idx !== arr.length - 1 && <hr className="lg:mx-32 text-secondary " />}
          </>
        ))}
      </div>
    </section>
  );
};

export default Experience;
