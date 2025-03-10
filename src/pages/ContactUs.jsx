import React from 'react';

const TransformIdeasSection = () => {
  return (
    <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
      <div className="mx-auto max-w-[1390px] rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-black dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
        <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
          <div className="animate_left md:w-[70%] lg:w-1/2">
            <h2 className="mb-4 w-11/12 text-3xl font-bold text-black dark:text-white xl:text-[2.5rem]">
              Transform Your Ideas Today
            </h2>
            <p>
              Schedule a meeting and take the first step toward creating a digital solution that drives your business forward.
            </p>
          </div>
          
          <div className="animate_right lg:w-[45%]">
            <div className="flex items-center justify-end xl:justify-between">
              <img
                alt="Saly"
                loading="lazy"
                width={299}
                height={299}
                decoding="async"
                className="hidden xl:block"
                src="/images/shape/shape-06.png"
              />
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
              >
                Schedule a meeting
                <img
                  alt="Arrow"
                  loading="lazy"
                  width={20}
                  height={20}
                  decoding="async"
                  className="dark:hidden"
                  src="/images/icon/icon-arrow-dark.svg"
                />
                <img
                  alt="Arrow"
                  loading="lazy"
                  width={20}
                  height={20}
                  decoding="async"
                  className="hidden dark:block"
                  src="/images/icon/icon-arrow-light.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformIdeasSection;