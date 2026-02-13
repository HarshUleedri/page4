const Hero = () => {
  const logos: { logo?: React.ReactNode; text: string }[] = [
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.001 2C6.50098 2 2.00098 6.5 2.00098 12C2.00098 17.5 6.50098 22 12.001 22C17.501 22 22.001 17.5 22.001 12C22.001 6.5 17.551 2 12.001 2ZM15.751 16.65C13.401 15.2 10.451 14.8992 6.95014 15.6992C6.60181 15.8008 6.30098 15.55 6.20098 15.25C6.10098 14.8992 6.35098 14.6 6.65098 14.5C10.451 13.6492 13.751 14 16.351 15.6C16.701 15.75 16.7501 16.1492 16.6018 16.45C16.4018 16.7492 16.0518 16.85 15.751 16.65ZM16.7501 13.95C14.051 12.3 9.95098 11.8 6.80098 12.8C6.40181 12.9 5.95098 12.7 5.85098 12.3C5.75098 11.9 5.95098 11.4492 6.35098 11.3492C10.001 10.25 14.501 10.8008 17.601 12.7C17.9018 12.8508 18.051 13.35 17.8018 13.7C17.551 14.05 17.101 14.2 16.7501 13.95ZM6.30098 9.75083C5.80098 9.9 5.30098 9.6 5.15098 9.15C5.00098 8.64917 5.30098 8.15 5.75098 7.99917C9.30098 6.94917 15.151 7.14917 18.8518 9.35C19.301 9.6 19.451 10.2 19.201 10.65C18.9518 11.0008 18.351 11.1492 17.9018 10.9C14.701 9 9.35098 8.8 6.30098 9.75083Z"></path>
        </svg>
      ),
      text: "Spotify",
    },
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14.501 3C15.3294 3 16.001 3.67157 16.001 4.5V9.5C16.001 10.3284 15.3294 11 14.501 11C13.6725 11 13.001 10.3284 13.001 9.5V4.5C13.001 3.67157 13.6725 3 14.501 3ZM4.50098 13H6.00098V14.5C6.00098 15.3284 5.3294 16 4.50098 16C3.67255 16 3.00098 15.3284 3.00098 14.5C3.00098 13.6716 3.67255 13 4.50098 13ZM13.001 18H14.501C15.3294 18 16.001 18.6716 16.001 19.5C16.001 20.3284 15.3294 21 14.501 21C13.6725 21 13.001 20.3284 13.001 19.5V18ZM14.501 13H19.501C20.3294 13 21.001 13.6716 21.001 14.5C21.001 15.3284 20.3294 16 19.501 16H14.501C13.6725 16 13.001 15.3284 13.001 14.5C13.001 13.6716 13.6725 13 14.501 13ZM19.501 8C20.3294 8 21.001 8.67157 21.001 9.5C21.001 10.3284 20.3294 11 19.501 11H18.001V9.5C18.001 8.67157 18.6725 8 19.501 8ZM4.50098 8H9.50098C10.3294 8 11.001 8.67157 11.001 9.5C11.001 10.3284 10.3294 11 9.50098 11H4.50098C3.67255 11 3.00098 10.3284 3.00098 9.5C3.00098 8.67157 3.67255 8 4.50098 8ZM9.50098 3C10.3294 3 11.001 3.67157 11.001 4.5V6H9.50098C8.67255 6 8.00098 5.32843 8.00098 4.5C8.00098 3.67157 8.67255 3 9.50098 3ZM9.50098 13C10.3294 13 11.001 13.6716 11.001 14.5V19.5C11.001 20.3284 10.3294 21 9.50098 21C8.67255 21 8.00098 20.3284 8.00098 19.5V14.5C8.00098 13.6716 8.67255 13 9.50098 13Z"></path>
        </svg>
      ),
      text: "Slack",
    },
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.2847 10.6683L22.5 13.9909L17.248 17.3368L12 13.9934L6.75198 17.3368L1.5 13.9909L6.7152 10.6684L1.5 7.34587L6.75206 4L11.9999 7.34335L17.2481 4L22.5 7.34587L17.2847 10.6683ZM17.2112 10.6684L11.9999 7.3484L6.78869 10.6683L12 13.9883L17.2112 10.6684ZM6.78574 18.4456L12.0377 15.1L17.2898 18.4456L12.0377 21.7916L6.78574 18.4456Z"></path>
        </svg>
      ),
      text: "Dropbox",
    },
    {
      text: "Coinbase",
    },
    {
      text: "Zoom",
    },
    {
      text: "Coinbase",
    },
    {
      text: "Zoom",
    },
  ];

  return (
    <section className=" w-full">
      <div className="flex  mb-16">
        <div className="w-2/3">
          <div className="text-[12rem] leading-45 flex font-accent mt-52 pl-32 flex-col ">
            <div className="">Product</div>
            <div>Designer</div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col pb-20 gap-36 pr-32 items-end py-8 ">
          <div className=" h-72 w-56 ">
            <img
              className="size-full rounded-xl "
              src={
                "https://images.pexels.com/photos/35635505/pexels-photo-35635505.jpeg"
              }
              alt="image"
            />
          </div>
          <div className=" w-48 h-fit text-right font-medium leading-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Temporibus.
          </div>
        </div>
      </div>
      {/* marquee */}
      <div className="flex w-full relative overflow-x-hidden ">
        <div className="w-72 h-full top-0 z-10 left-0 absolute bg-gradient-to-r from-white form-10% lg:from-30% "></div>
        <div className="flex items-center w-full gap-20 animate-scroll shrink-0  ">
          {logos.map((item, idx) => (
            <div
              className="bg-secondary flex  items-center text-lg font-semibold rounded-full px-12 py-2"
              key={idx}
            >
              {item.logo && <span className="size-6 mr-2">{item.logo}</span>}
              <span>{item.text}</span>{" "}
            </div>
          ))}
        </div>
        <div className="flex items-center  w-full gap-20  animate-scroll shrink-0 ">
          {logos.map((item, idx) => (
            <div
              className="bg-secondary flex  items-center text-lg font-semibold rounded-full px-12 py-2"
              key={idx}
            >
              {item.logo && <span className="size-6 mr-2">{item.logo}</span>}
              <span>{item.text}</span>{" "}
            </div>
          ))}
        </div>
        <div className="w-72 h-full top-0 z-10 right-0 absolute bg-gradient-to-l from-white form-10% lg:from-50%"></div>
      </div>
    </section>
  );
};

export default Hero;
