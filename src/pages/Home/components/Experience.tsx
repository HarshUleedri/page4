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
    <section className="mb-20">
      <div className="space-y-8 max-w-7xl mx-auto ">
        <div className="gradient-border w-fit  ">
          <div className="badge font-semibold">Experience</div>
        </div>
        <div className="flex gap-20 mb-16 ">
          <h2 className="w-3/5 text-5xl pr-12">
            A Yearly snapshot of my creative growth
          </h2>
          <div className="w-2/5 flex justify-end  items-end">
            <p className=" w-4/5 text-primary/50 font-medium ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              ipsa labore magni. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className=" ">
        {experience.map((exp, idx, arr) => (
          <>
            <div
              key={idx}
              className=" py-4 px-32 hover:bg-secondary flex justify-between items-center "
            >
              <div className=" space-y-2 ">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="w-4/5 text-sm font-semibold text-primary/50">
                  {exp.description}
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold">{exp.year}</p>
              </div>
            </div>
            {idx !== arr.length - 1 && <hr className="mx-32 text-secondary " />}
          </>
        ))}
      </div>
    </section>
  );
};

export default Experience;
