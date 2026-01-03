const GRWMRR: React.FC = () => {
  const images = [
    "https://drive.developershideout.com:4431/mrr_img/grwmrr1.png",
    "https://drive.developershideout.com:4431/mrr_img/grwmrr2.png",
    "https://drive.developershideout.com:4431/mrr_img/grwmrr3.png",
    "https://drive.developershideout.com:4431/mrr_img/grwmrr4.png",
  ];

  const groups = [
    {
      caption: "Young Designers in Action",
      imgs: [
        "https://drive.developershideout.com:4431/mrr_img/rising1.png",
        "https://drive.developershideout.com:4431/mrr_img/rising2.png",
      ],
    },
    {
      caption: "Future Runway Models",
      imgs: [
        "https://drive.developershideout.com:4431/mrr_img/rising3.png",
        "https://drive.developershideout.com:4431/mrr_img/rising4.png",
      ],
    },
    {
      caption: "Creative Stylists",
      imgs: [
        "https://drive.developershideout.com:4431/mrr_img/rising5.png",
        "https://drive.developershideout.com:4431/mrr_img/rising6.png",
      ],
    },
    {
      caption: "Rising Icons",
      imgs: [
        "https://drive.developershideout.com:4431/mrr_img/rising7.png",
        "https://drive.developershideout.com:4431/mrr_img/rising8.png",
      ],
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* ----------------- */}
      {/* First Section */}
      {/* ----------------- */}
      <div className="w-full my-8">
        <div className="flex justify-start px-8 max-md:justify-center">
          <img
            src="https://drive.developershideout.com:4431/mrr_img/mrr.png"
            alt="Get Ready with MRR"
            className="w-[40%] h-auto block max-md:w-[70%]"
          />
        </div>
      </div>

      <div className="bg-white max-w-[1200px] mx-auto px-8 py-16 text-center">
        <h2 className="text-xl text-gray-600 mb-8 font-medium">
          Rehearsals & Coaching Sessions
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full md:w-[45%] transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt={`grwmrr-${index}`}
                className="rounded-lg shadow-md w-full max-w-[600px] mx-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ----------------- */}
      {/* Second Section */}
      {/* ----------------- */}
      <div className="w-screen bg-gray-300 py-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-8">
          <h1 className="text-3xl font-bold text-center mb-4">Rising Stars</h1>
          <h2 className="text-xl text-gray-600 text-center mb-12">
            Shaping the Future of Fashion from a Young Age
          </h2>

          {groups.map((group, index) => (
            <div key={index} className="mb-20 text-left">
              <div className="text-lg font-semibold text-gray-800 mb-8">
                {group.caption}
              </div>

              <div className="flex flex-wrap justify-center items-start gap-20 mb-16">
                {group.imgs.map((img, i) => (
                  <div
                    key={i}
                    className="w-full md:w-[45%] transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={img}
                      alt={`rising-${index}-${i}`}
                      className="rounded-lg w-full max-w-[500px] mx-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------- */}
      {/* Hero Section */}
      {/* ----------------- */}
      <section className="text-center py-20 px-8 bg-white">
        <p className="text-3xl text-gray-700 mb-4 font-serif">
          Manila Runway Republic is where your journey begins.
        </p>
        <p className="text-3xl text-gray-700 mb-12 font-serif">
          Join us as we celebrate youth, talent, and fashion.
        </p>

        <div className="flex justify-center group relative">
          <a className="flex justify-end group" href="http://localhost:5173/contact">
            <button
              className="relative border-2 border-gray-700 text-gray-700 bg-transparent rounded-[26px] px-8 py-3 text-xl md:text-2xl font-semibold cursor-pointer overflow-hidden transition-colors duration-400 ease-in-out 
              before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-gray-700 before:z-0 before:transition-all before:duration-500 before:ease-in-out hover:before:w-full"
            >
              <span className="relative z-[1] tracking-wider transition-colors duration-400 ease-in-out group-hover:text-white">
                Contact Us
              </span>
            </button>

            <img
              className="translate-x-[-30px] h-[50px] w-[50px] opacity-0 transition-all duration-400 ease-in-out group-hover:translate-y-[-40px] group-hover:translate-x-0 group-hover:opacity-100"
              src="https://drive.developershideout.com:4431/mrr_img/Icon-weather-stars.svg"
              alt="Stars icon"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default GRWMRR;
