const Testimonial = () => {
  const testimonial = [
    {
      profileImage:
        "https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg",
      profileName: "Harsh Uleedri",
      message:
        "Without journey Commerce, we would never had been able to inplement this system ourselves. Being a small team we don't have enough hours in the day. The team at Journey Commerce researched our brand, planned the content and provided weekly feedback to improve the performance. The results have been amazing and we couldn't ask for a better partner.",
    },
    {
      profileImage:
        "https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg",
      profileName: "Harsh Uleedri",
      message:
        "Without journey Commerce, we would never had been able to inplement this system ourselves. Being a small team we don't have enough hours in the day. The team at Journey Commerce researched our brand, planned the content and provided weekly feedback to improve the performance. The results have been amazing and we couldn't ask for a better partner.",
    },
  ];

  return (
    <section className=" mt-20 relative bg-secondary pt-36 px-4 lg:px-0 ">
      <div className="absolute  top-14 z-0 right-1/2 transform translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-44  text-primary/10"
        >
          <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path>
        </svg>
      </div>

      <div className="flex relative z-10 pb-20  max-w-7xl w-full mx-auto  overflow-hidden  ">
        {testimonial.map((test, idx) => (
          <div
            key={idx}
            className="min-w-full w-full flex items-center flex-col gap-8 lg:gap-10"
          >
            <div>
              <p className="text-lg lg:text-2xl text-center leading-8 lg:leading-12 font-medium ">
                {test.message}
              </p>
            </div>
            <hr className="w-1/2 h-2" />
            <div className="flex gap-4  items-center">
              <img
                className="size-12 rounded-full object-cover"
                src={test.profileImage}
                alt={test.profileName}
              />
              <div>
                <p className="font-semibold ">{test.profileName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
