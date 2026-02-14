const Services = () => {
  const services: { title: string; description: string }[] = [
    {
      title: "Social Ads",
      description:
        "Strategic and creative social media advertising to reach the right audience, Increase engagement and drive conversion",
    },
    {
      title: "Search Engineer",
      description:
        "Optimize your website visibility and ranking with effective SEO strategies",
    },
    {
      title: "Content Marketing",
      description:
        "We create strategic and engaging content to build brand awareness, increase engagement and drive conversions.",
    },
    {
      title: "Saas Marketing",
      description:
        "We help you Saas product reach the right audience with a data-driven marketing strategy",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto h-screen mt-20 cursor-pointer flex gap-16">
      <div className="w-2/5  space-y-6">
        <div className="gradient-border w-fit ">
          <div className="badge font-semibold">Service</div>
        </div>
        <h2 className="text-5xl font-medium">
          A comprehensive look at what we offer and how we deliver{" "}
        </h2>
        <p className="text-primary/50  w-10/12">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          odio recusandae eius.
        </p>
        <button className="button-primary">Sign up</button>
      </div>
      <div className="w-3/5 h-full  ">
        <div className="grid grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              className="bg-secondary/50 border flex group hover:h-80 self-start h-72 transition-all delay-200 ease-in-out duration-700 hover:bg-primary hover:text-accent justify-between flex-col border-secondary/50 p-6 rounded-md "
              key={idx}
            >
              <div className="space-y-4 mb-12">
                <hr className="w-1/3 h-2" />
                <h3 className="text-3xl font-medium">{service.title}</h3>
                <p className=" wrap-break-word group-hover:text-accent transition-all duration-500 ease-in-out delay-200 text-primary/50">
                  {service.description}
                </p>
              </div>
              <div className="size-8 ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-full transition-all duration-700 delay-200 ease-in-out group-hover:-rotate-45 group-hover:text-accent  text-primary"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
