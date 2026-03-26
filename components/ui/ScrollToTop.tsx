"use client";

// scroll to top
const scroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const ScrollToTop = () => {
  return (
    <div className="absolute bottom-12 md:bottom-14 lg:bottom-17.5 right-8 md:right-16 lg:right-19">
      <button
        aria-label="Scroll to top"
        onClick={scroll}
        className="w-10 h-10 text-white rounded-full flex items-center justify-center transition-colors"
      >
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.1482 46.2963C35.9259 46.2963 46.2963 35.9259 46.2963 23.1482C46.2963 10.3704 35.9259 7.62939e-06 23.1482 7.62939e-06C10.3704 7.62939e-06 0 10.3704 0 23.1482C0 35.9259 10.3704 46.2963 23.1482 46.2963ZM25.463 23.1482V32.4074H20.8333V23.1482H13.8889L23.1482 13.8889L32.4074 23.1482H25.463Z"
            fill="#0DB04A"
          />
        </svg>
      </button>
    </div>
  );
}