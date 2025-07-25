"use client";
import Image from "next/image";
import React from "react";

// SVG Logo Components

const NextjsLogo = () => (
  <svg
    viewBox="0 -101.5 512 512"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    className="md:w-40 md:h-40 w-24 h-24"
  >
    <g>
      <path
        d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z"
        fill="currentColor"
        fillRule="nonzero"
      ></path>
    </g>
  </svg>
);

const VapiLogo = () => (
  <svg
    role="presentation"
    viewBox="0 0 57 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="md:w-40 md:h-40 w-24 h-24"
  >
    <path
      clipRule="evenodd"
      d="M1.70679 0.304638C3.21148 -0.425672 5.02331 0.202092 5.75362 1.70679L7.87228 6.07197L10.0253 1.69294C10.7632 0.191979 12.5782 -0.426556 14.0792 0.311402C15.5801 1.04936 16.1987 2.86436 15.4607 4.36532L10.5725 14.3077C10.0619 15.3462 9.0042 16.0029 7.84702 16C6.68985 15.997 5.63551 15.3349 5.13024 14.2939L0.304638 4.35147C-0.425672 2.84678 0.202092 1.03495 1.70679 0.304638ZM23.353 0.000699425C24.5102 0.00364403 25.5645 0.66575 26.0698 1.70679L30.8954 11.6492C31.3509 12.5878 31.2913 13.6947 30.7376 14.5789C30.1839 15.463 29.2141 16 28.1709 16H18.457C17.4111 16 16.4391 15.4602 15.8862 14.5723C15.3334 13.6844 15.2778 12.574 15.7393 11.6354L20.6276 1.69294C21.1381 0.654487 22.1958 -0.00224496 23.353 0.000699425ZM34.3992 3.02913C34.3992 1.35657 35.7551 0.000689616 37.4276 0.000689616H41.7132C41.7973 0.000689616 41.8813 0.0041931 41.9652 0.0111909L43.1697 0.111761C43.5314 0.141966 44.1717 0.228344 44.8453 0.584446C48.353 2.43887 48.353 7.50494 44.8453 9.35936C44.1717 9.71546 43.5314 9.80184 43.1697 9.83205L41.9652 9.93262C41.8813 9.93961 41.7973 9.94312 41.7132 9.94312H40.4561V12.9716C40.4561 14.6441 39.1002 16 37.4276 16C35.7551 16 34.3992 14.6441 34.3992 12.9716V3.02913ZM53.427 0.000689616C55.0995 0.000689616 56.4554 1.35657 56.4554 3.02913V12.9716C56.4554 14.6441 55.0995 16 53.427 16C51.7544 16 50.3985 14.6441 50.3985 12.9716V3.02913C50.3985 1.35657 51.7544 0.000689616 53.427 0.000689616ZM23.3207 9.94312H23.3347L23.3277 9.92871L23.3207 9.94312Z"
      fill="currentColor"
      fillRule="evenodd"
    ></path>
  </svg>
);

const AnthropicLogo = () => (
  <div className="flex items-end gap-2">
    <Image
      src="/anthropic.svg"
      alt="logo"
      width={60}
      height={60}
      className="md:w-22 md:h-22 w-16 h-16 object-contain invert"
    />
  </div>
);

const N8nLogo = () => (
  <div className="flex items-center gap-2">
    <Image
      src="/n8n.svg"
      alt="logo"
      width={60}
      height={60}
      className="md:w-22 md:h-22 w-16 h-16 object-contain invert"
    />
    <span className="text-xl font-medium">n8n</span>
  </div>
);

const ElevenLabsLogo = () => (
  <div className="flex items-center gap-1">
    <Image
      src="/elevenlabs.svg"
      alt="logo"
      width={50}
      height={50}
      className="md:w-16 md:h-16 w-12 h-12 object-contain invert"
    />
    <p className="flex flex-col justify-center items-start tracking-tighter">
      <span className="text-xl font-semibold">Eleven</span>
      <span className="text-xl font-semibold">Labs</span>
    </p>
  </div>
);

const logos1 = [
  { id: 1, component: <NextjsLogo /> },
  { id: 2, component: <VapiLogo /> },
  { id: 3, component: <AnthropicLogo /> },
  { id: 4, component: <N8nLogo /> },
  { id: 5, component: <ElevenLabsLogo /> },
];

function Logomarquee() {
  // We need to inject the keyframes animation into the document's head
  // because Tailwind CSS doesn't directly support the 'cqw' unit.
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes marquee-move {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      .marquee-container {
        will-change: transform;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
      }
      
      .animate-marquee {
        will-change: transform;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        animation-fill-mode: both;
        animation-timing-function: linear;
      }
      
      @media (max-width: 768px) {
        .animate-marquee {
          animation-duration: 25s !important;
        }
      }
      
      @media (prefers-reduced-motion: reduce) {
        .marquee-container * {
          animation-play-state: paused !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const Marquee = ({
    logos,
    direction = "forwards",
  }: {
    logos: typeof logos1;
    direction?: string;
  }) => {
    return (
      <div
        className="marquee-container relative overflow-hidden w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
        }}
      >
        <div
          className="flex animate-marquee"
          style={{
            animation: `marquee-move 30s linear infinite ${direction}`,
            width: "200%",
          }}
        >
          {/* First set of logos */}
          <div className="flex items-center justify-around w-full">
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex justify-center items-center text-white mx-8 md:mx-12"
                style={{ minWidth: "120px" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  {logo.component}
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center justify-around w-full">
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex justify-center items-center text-white mx-8 md:mx-12"
                style={{ minWidth: "120px" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  {logo.component}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="md:py-10 py-6 flex justify-center items-center w-full max-w-6xl mx-auto px-4">
      <Marquee logos={logos1} />
    </div>
  );
}

export default Logomarquee;
