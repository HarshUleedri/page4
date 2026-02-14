const Protfolio = () => {
  const protfolio: { title: string; image: string; tags: string[] }[] = [
    {
      title: "Project Lorem ispsum emit.",
      image:
        "https://images.pexels.com/photos/6373215/pexels-photo-6373215.jpeg",
      tags: ["React", "Tailwindcss", "Nodejs"],
    },
    {
      title: "Project Lorem ispsum emit.",
      image:
        "https://images.pexels.com/photos/8532766/pexels-photo-8532766.jpeg",
      tags: ["React", "Tailwindcss", "Nodejs"],
    },
    {
      title: "Project Lorem ispsum emit.",
      image:
        "https://images.pexels.com/photos/6446671/pexels-photo-6446671.jpeg",
      tags: ["React", "Tailwindcss", "Nodejs"],
    },
    {
      title: "Project Lorem ispsum emit.",
      image:
        "https://images.pexels.com/photos/6373215/pexels-photo-6373215.jpeg",
      tags: ["React", "Tailwindcss", "Nodejs"],
    },
    {
      title: "Project Lorem ispsum emit.",
      image:
        "https://images.pexels.com/photos/8532766/pexels-photo-8532766.jpeg",
      tags: ["React", "Tailwindcss", "Nodejs"],
    },
    {
      title: "Project Lorem ispsum emit.",
      image:
        "https://images.pexels.com/photos/6446671/pexels-photo-6446671.jpeg",
      tags: ["React", "Tailwindcss", "Nodejs"],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl ">
      <div className="space-y-8">
        <div className="gradient-border w-fit  ">
          <div className="badge font-semibold">PortFolio</div>
        </div>
        <div className="flex gap-20 mb-16 ">
          <h2 className="w-3/5 text-5xl pr-12">
            Explore my portfolio of creative solutions
          </h2>
          <div className="w-2/5 flex justify-end  items-end">
            <p className=" w-4/5 text-primary/50 font-medium ">
              Lorem ipsum dolor, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {protfolio.map((item, idx) => (
          <div
            className="min-h-60 group relative overflow-hidden rounded-xl  "
            key={idx}
          >
            <img
              className="object-cover absolute inset-0 "
              src={item.image}
              alt={item.title}
            />
            <div className="absolute z-10 -bottom-100 bg-primary/23 transition-all duration-700 ease-in-out group-hover:bottom-0 w-full p-4">
              <div className="flex items-center gap-4 mb-2">
                {item.tags.map((elm, idx) => (
                  <span
                    className="px-4 py-1 rounded-full border text-xs text-accent"
                    key={idx}
                  >
                    {elm}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium wrap-break-word text-accent">
                  {item.title}
                </p>
                <div className="size-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-full text-accent -rotate-45"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Protfolio;
