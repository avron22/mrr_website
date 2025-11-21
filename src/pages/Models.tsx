import React, { useEffect, useRef, useState } from "react";


const Models: React.FC = () => {
  const modelImages: string[] = [
    "https://drive.developershideout.com:4431/mrr_img/Artboard1.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard2.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard3.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard4.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard5.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard6.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard7.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard8.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard9.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard10.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard11.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard12.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard13.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard14.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard15.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard16.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard17.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard18.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard19.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard20.png",
    "https://drive.developershideout.com:4431/mrr_img/Artboard21.png",
  ];

  // Preload a handful of top images for perceived speed
  useEffect(() => {
    modelImages.slice(0, 6).forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  const createRows = <T,>(items: T[], itemsPerRow: number): T[][] =>
    items.reduce<T[][]>((rows, item, i) => {
      if (i % itemsPerRow === 0) rows.push([]);
      rows[rows.length - 1].push(item);
      return rows;
    }, []);

  const modelNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  
  const BlurImage: React.FC<{
    src: string;
    alt: string;
    className?: string;
  }> = ({ src, alt, className = "" }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);
    const [fullLoaded, setFullLoaded] = useState(false);
    const [tinyAvailable, setTinyAvailable] = useState<null | string>(null);
    const [tinyLoaded, setTinyLoaded] = useState(false);
    const [isPreloading, setIsPreloading] = useState(false);

  
    const tinyCandidate = `${src}?w=20&blur=50&fm=webp`;

   
    useEffect(() => {
      let alive = true;
      const testImg = new Image();
      testImg.onload = () => {
        if (!alive) return;
        // tiny seems to work; use it
        setTinyAvailable(tinyCandidate);
        setTinyLoaded(true);
      };
      testImg.onerror = () => {
        if (!alive) return;
        setTinyAvailable(null);
        setTinyLoaded(false);
      };
      
      testImg.src = tinyCandidate;
    
      const timeout = window.setTimeout(() => {
       
        if (!tinyLoaded) {
          testImg.src = ""; // cancel
          setTinyAvailable(null);
        }
      }, 1200);

      return () => {
        alive = false;
        clearTimeout(timeout);
        testImg.onload = null;
        testImg.onerror = null;
      };
  
    }, [src]);

 
    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              setInView(true);
              obs.unobserve(el);
            }
          });
        },
        { root: null, rootMargin: "250px", threshold: 0.01 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, []);

    // Preload function (preload on hover/focus)
    const doPreload = () => {
      if (fullLoaded || isPreloading) return;
      setIsPreloading(true);
      // Start loading the full image programmatically
      const img = new Image();
      img.onload = () => {
        setFullLoaded(true);
      };
      img.onerror = () => {
  
        setIsPreloading(false);
      };
      img.src = src;
      
      try {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      } catch {
        /* ignore */
      }
    };

    
    const onFullImgLoad = () => {
      setFullLoaded(true);
      setIsPreloading(false);
    };

    
    useEffect(() => {
      if (inView && !fullLoaded && !isPreloading) {
        
        doPreload();
      }
      
    }, [inView]);

    
    return (
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        onMouseEnter={doPreload}
        onFocus={doPreload}
        
        tabIndex={0}
      >
        
        <div
          aria-hidden
          className={`absolute inset-0 w-full h-full ${
            fullLoaded ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
        >
          
          <div
            className="absolute inset-0"
            style={{
             
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.02) 100%)",
             
            }}
          />
          {/* shimmer animation overlay */}
          <div
            className="absolute inset-0 animate-[shimmer_1.2s_infinite]"
            style={{
              // subtle translucent shimmer
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.00) 100%)",
              mixBlendMode: "overlay",
            }}
          />
        </div>

        
        {tinyAvailable ? (
          <img
            src={tinyAvailable}
            alt={alt}
            aria-hidden
            className={`absolute inset-0 w-full h-full object-cover transform ${className}
              transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] blur-md scale-105
              ${fullLoaded ? "opacity-0" : "opacity-100"}`}
            
            loading="eager"
          />
        ) : (
      
          <div
            aria-hidden
            className={`absolute inset-0 w-full h-full object-cover transform ${className}
              transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] scale-105
              ${fullLoaded ? "opacity-0" : "opacity-100"}`}
            style={{
              
              background:
                "linear-gradient(180deg, rgba(220,220,220,0.8) 0%, rgba(200,200,200,0.9) 100%)",
              filter: "blur(8px)",
            }}
          />
        )}

       
        { (inView || isPreloading || fullLoaded) && (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={onFullImgLoad}
            className={`absolute inset-0 w-full h-full object-cover transform ${className}
              transition-opacity duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]
              ${fullLoaded ? "opacity-100" : "opacity-0"}`}
          />
        )}

        
        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-[shimmer_1.2s_infinite] {
            animation: shimmer 1.2s infinite;
          }
        `}</style>
      </div>
    );
  };

  return (
    <div className="w-full py-24">
     
      <img
        className="ml-24 w-[250px] max-md:ml-5 max-md:w-[200px] max-sm:ml-2 max-sm:w-[160px]"
        src="/src/assets/models.png"
        alt="Manila Runway Republic"
        loading="eager"
      />

      <section className="flex flex-col items-center text-center mt-10">
        <h1 className="text-4xl font-medium mb-4 max-md:text-3xl max-sm:text-2xl">
          Join Us Today!
        </h1>
        <h2 className="text-lg font-normal leading-relaxed px-32 mt-5 max-lg:px-16 max-md:px-10 max-sm:px-4 max-sm:text-sm max-sm:leading-snug">
          Whether you are an aspiring model looking to break into the industry or a parent seeking
          the best opportunities for your child, Manila Runway Republic is the perfect place to
          start. Join us and be a part of a vibrant community that celebrates youth, talent, and
          fashion.
        </h2>

        {/* Desktop/Tablet (4 per row) */}
        <div className="sm:flex flex-col gap-12 px-24 lg:max-2xl:px-0 mt-12 max-lg:px-10 max-md:px-6 hidden">
          {createRows(modelNumbers, 4).map((row, i) => (
            <div key={i} className="flex flex-wrap justify-center gap-7">
              {row.map((n) => (
                <div
                  key={n}
                  className="relative w-[340px] h-[360px] overflow-hidden cursor-pointer transform skew-x-[-20deg]
                  max-lg:w-[300px] max-lg:h-[320px]
                  max-md:w-[240px] max-md:h-[280px]"
                >
                  <BlurImage
                    src={modelImages[n - 1]}
                    alt={`Model ${n}`}
                    className="skew-x-[20deg] scale-[1.5] translate-y-[12%]"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile (2 per row) */}
        <div className="flex sm:hidden flex-col gap-6 px-3 mt-12 w-full">
          {createRows(modelNumbers, 2).map((row, i) => (
            <div key={i} className="flex justify-center gap-3 w-full">
              {row.map((n) => (
                <div
                  key={n}
                  className="relative w-[46%] h-[180px] overflow-hidden cursor-pointer transform skew-x-[-12deg] flex-shrink-0"
                >
                  <BlurImage
                    src={modelImages[n - 1]}
                    alt={`Model ${n}`}
                    className="skew-x-[12deg] scale-[1.2] translate-y-[0%]"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Models;
