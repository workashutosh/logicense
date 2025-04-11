"use client";

import { useRef, forwardRef } from "react";
import AnimatedBeam from "./AnimatedBeam"; // Changed to default import
import { PiFigmaLogo } from "react-icons/pi";
import logo from '../assets/logo.png'
import aws from '../assets/aws.webp'
import meta from '../assets/meta.png'
import google from '../assets/google.png'



// Circle component
const Circle = ({ className = "", children }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex h-16 w-16 items-center justify-center rounded-full bg-black border-2 border-gray-100 p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] ${className}`}
    >
      {children}
    </div>
  );
};

// Forward ref workaround for JSX
const CircleWithRef = forwardRef(Circle);

// AnimatedBeamMultipleOutputDemo component
const AnimatedBeamMultipleOutputDemo = ({ className = "" }) => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden p-4 xl:h-[600px] ${className}`} // Increased height from 500px to 600px
      ref={containerRef}
    >
      <div className="flex h-full max-w-full flex-row items-stretch justify-between gap-24"> {/* Increased gap from 10 to 12 */}
        <div className="flex flex-col justify-center gap-4"> {/* Increased gap from 2 to 4 */}
          <CircleWithRef ref={div1Ref}>
            <Icons.metaAds />
          </CircleWithRef>
          <CircleWithRef ref={div2Ref}>
          <img src={meta} alt="" className=" " />
          </CircleWithRef>
          <CircleWithRef ref={div3Ref}>
            <PiFigmaLogo className="h-8 w-8 bg-black rounded" /> {/* Increased icon size from h-6 w-6 to h-8 w-8 */}
          </CircleWithRef>
          <CircleWithRef ref={div4Ref}>
          <img src={aws} alt="" className=" " />
          </CircleWithRef>
          <CircleWithRef ref={div5Ref}>
          <img src={google} alt="" className="" />
          </CircleWithRef>
        </div>
        <div className="flex flex-col justify-center">
          <CircleWithRef ref={div6Ref} className="h-20 w-20 bg-black"> {/* Increased size from h-16 w-16 to h-20 w-20 */}
            <img src={logo} alt="" className=" rotate-180" />
          </CircleWithRef>
        </div>
        <div className="flex flex-col justify-center">
          <CircleWithRef ref={div7Ref} className="h-16 w-16 bg-white"> {/* Increased size from default to h-16 w-16 */}
            <Icons.user />
          </CircleWithRef>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        pathColor="black"
        gradientStartColor="#6fff02"
        gradientStopColor="#155dfc"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        pathColor="black"
        gradientStartColor="#6fff02"
        gradientStopColor="#155dfc"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        pathColor="black"
        gradientStartColor="#6fff02"
        gradientStopColor="#155dfc"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        pathColor="black"
        gradientStartColor="#6fff02"
        gradientStopColor="#155dfc"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        pathColor="black"
        gradientStartColor="#6fff02"
        gradientStopColor="#155dfc"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        pathColor="black"
        gradientStartColor="#155dfc"
        gradientStopColor="#ef4444"
      />
    </div>
  );
};

// SVG Icons (unchanged)
const Icons = {
    ai: () => (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
          fill="#000000"
        />
        <path
          d="M12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6ZM12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10Z"
          fill="#000000"
        />
        <path
          d="M8 16C8 14.9 8.9 14 10 14H14C15.1 14 16 14.9 16 16V18H8V16Z"
          fill="#000000"
        />
      </svg>
    ),
    googleDrive: () => (
      <svg
        width="50"
        height="50"
        viewBox="0 0 87.3 78"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
          fill="#0066da"
        />
        <path
          d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
          fill="#00ac47"
        />
        <path
          d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
          fill="#ea4335"
        />
        <path
          d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
          fill="#00832d"
        />
        <path
          d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
          fill="#2684fc"
        />
        <path
          d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
          fill="#ffba00"
        />
      </svg>
    ),
    googleDocs: () => (
      <svg
        width="50"
        height="50"
        viewBox="0 0 47 65"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          fill="#4285F4"
        />
        <path
          d="M11.75,47.2727273 L35.25,47.2727273 L35.25,44.3181818 L11.75,44.3181818 L11.75,47.2727273 Z M11.75,53.1818182 L29.375,53.1818182 L29.375,50.2272727 L11.75,50.2272727 L11.75,53.1818182 Z M11.75,32.5 L11.75,35.4545455 L35.25,35.4545455 L35.25,32.5 L11.75,32.5 Z M11.75,41.3636364 L35.25,41.3636364 L35.25,38.4090909 L11.75,38.4090909 L11.75,41.3636364 Z"
          fill="#F1F1F1"
        />
      </svg>
    ),
    googleAds: () => (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.99,2.998c-4.974,0-9,4.026-9,9s4.026,9,9,9s9-4.026,9-9S16.964,2.998,11.99,2.998z"
          fill="#FBBC04"
        />
        <path
          d="M10.286,9.058L7.142,15.10c-0.449,0.765,0.105,1.746,0.971,1.746h6.281c0.867,0,1.42-0.98,0.975-1.746l-3.149-6.042 C11.702,8.318,10.801,8.317,10.286,9.058z"
          fill="#4285F4"
        />
        <path
          d="M8.112,16.844l-3.847-6.56c-0.498-0.85,0.12-1.926,1.086-1.926h3.832L8.112,16.844z"
          fill="#34A853"
        />
        <path
          d="M15.889,16.844l3.847-6.56c0.498-0.85-0.12-1.926-1.086-1.926h-3.832L15.889,16.844z"
          fill="#EA4335"
        />
      </svg>
    ),
    metaAds: () => (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient
          id="metaGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#0081FB" />
          <stop offset="100%" stopColor="#01C2FB" />
        </linearGradient>
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.62l-3.5-3.5 1.4-1.4 2.1 2.1 6.1-6.1 1.4 1.4-7.5 7.5z"
          fill="url(#metaGradient)"
        />
      </svg>
    ),
    chatGPT: () => (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.5093-2.6067-1.4998z"
          fill="#10A37F"
        />
      </svg>
    ),
    figma: () => (
      <svg
        width="50"
        height="50"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 16m-5.333 0a5.333 5.333 0 1 0 10.666 0a5.333 5.333 0 1 0 -10.666 0"
          fill="#1ABCFE"
        />
        <path
          d="M10.667 26.667a5.333 5.333 0 0 0 5.333-5.333v-5.333h-5.333a5.333 5.333 0 0 0 0 10.667z"
          fill="#0ACF83"
        />
        <path
          d="M10.667 10.667h5.333V0h-5.333a5.333 5.333 0 0 0 0 10.667z"
          fill="#FF7262"
        />
        <path
          d="M10.667 16a5.333 5.333 0 0 1 5.333-5.333h0v10.667h-5.333a5.333 5.333 0 0 1 0-10.667v5.333z"
          fill="#F24E1E"
        />
        <path
          d="M21.333 5.333a5.333 5.333 0 0 0-5.333 5.333h5.333a5.333 5.333 0 0 0 0-10.667h0v5.333z"
          fill="#A259FF"
        />
      </svg>
    ),
    excel: () => (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.6 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3z"
          fill="#217346"
        />
      </svg>
    ),
    aws: () => (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.039.064.039.128.039.192a.3.3 0 0 1-.16.265l-.525.336c-.071.048-.167.064-.24.064-.096 0-.192-.048-.288-.144-.128-.16-.247-.327-.375-.535-.128-.224-.255-.472-.383-.824-.92.983-2.087 1.471-3.359 1.471-1.023 0-1.827-.295-2.435-.887-.607-.592-.903-1.395-.903-2.383 0-1.056.36-1.918 1.088-2.55.727-.64 1.691-.959 2.943-.959.407 0 .815.032 1.263.096.44.064.887.16 1.367.288v-.87c0-.9-.191-1.527-.574-1.902-.39-.376-1.039-.568-1.954-.568-.42 0-.846.048-1.284.152-.438.102-.854.232-1.263.375-.12.048-.231.072-.335.072-.263 0-.39-.184-.39-.567v-.344c0-.304.064-.512.191-.64.128-.136.335-.264.639-.399.43-.16.934-.295 1.503-.399a7.947 7.947 0 0 1 1.786-.184c1.35 0 2.34.295 2.968.886.631.583.934 1.471.934 2.67v3.504zM4.53 10.75c.407 0 .83-.096 1.27-.28.438-.192.83-.535 1.143-1.023.184-.296.311-.6.39-.91.088-.312.12-.7.12-1.167v-.562c-.359-.096-.734-.16-1.127-.208a8.491 8.491 0 0 0-1.087-.072c-.773 0-1.343.152-1.7.456-.359.304-.544.735-.544 1.300 0 .528.152.934.447 1.223.295.283.703.431 1.255.431zm6.528-2.126V8.79c0 .408-.096.743-.279 1.006-.2.263-.486.391-.854.391-.248 0-.447-.056-.607-.168-.16-.112-.287-.271-.391-.478l-3.24-10.67c-.111-.36-.167-.568-.167-.623 0-.255.128-.391.39-.391h1.599c.311 0 .526.064.647.184.128.12.223.296.303.544l2.318 9.13 2.151-9.13c.064-.248.16-.424.303-.544.144-.12.359-.184.647-.184h1.294c.312 0 .527.064.647.184.128.12.224.296.304.544l2.174 9.234 2.39-9.235c.084-.247.184-.423.312-.543.127-.12.343-.184.63-.184h1.519c.261 0 .39.135.39.391 0 .075-.008.143-.024.224-.016.075-.064.199-.12.351l-3.335 10.669c-.104.216-.24.375-.4.487-.144.112-.352.168-.606.168-.248 0-.447-.056-.615-.168a1.119 1.119 0 0 1-.383-.471l-2.135-8.872-2.126 8.863c-.104.216-.231.376-.399.487-.16.112-.36.168-.607.168-.247 0-.447-.056-.615-.168-.144-.112-.28-.271-.384-.471zm15.265 2.374c-.311 0-.527-.07-.695-.208-.168-.144-.304-.376-.423-.704l-3.028-9.961c-.071-.24-.12-.407-.12-.511 0-.248.12-.376.36-.376h1.471c.287 0 .487.064.615.192.128.12.216.32.279.56l2.163 8.538 2.014-8.538c.056-.239.136-.44.28-.559.143-.12.359-.192.646-.192h1.21c.296 0 .504.064.64.192.136.12.232.32.288.56l2.046 8.649 2.228-8.65c.072-.239.16-.439.288-.559.128-.12.335-.192.615-.192h1.399c.24 0 .36.12.36.375 0 .072-.008.16-.023.247-.016.096-.064.24-.12.44l-3.111 9.96c-.112.328-.248.56-.416.704-.168.136-.391.208-.695.208h-1.294c-.287 0-.504-.064-.64-.2-.144-.12-.24-.32-.304-.576l-2.01-8.35-1.998 8.342c-.072.264-.168.456-.304.584-.136.128-.36.2-.647.2z"
          fill="#252F3E"
        />
        <path
          d="M20.442 16.638c-2.5 1.847-6.127 2.83-9.246 2.83-4.366 0-8.324-1.616-11.303-4.297-.232-.208-.024-.496.255-.336 3.19 1.855 7.14 2.975 11.215 2.975 2.751 0 5.78-.567 8.558-1.743.423-.184.774.28.359.575m1.047-1.199c-.319-.407-2.111-.191-2.918-.096-.247.032-.287-.176-.064-.32 1.431-1 3.778-.711 4.054-.376.271.336-.079 2.654-1.399 3.757-.199.176-.39.08-.303-.144.295-.733.942-2.374.63-2.821"
          fill="#FF9900"
        />
      </svg>
    ),
    messenger: () => (
      <svg
        width="50"
        height="50"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <radialGradient
          id="messengerGradient"
          cx="11.087"
          cy="7.022"
          r="47.612"
          gradientTransform="matrix(1 0 0 -1 0 50)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#1292ff" />
          <stop offset=".079" stopColor="#2982ff" />
          <stop offset=".23" stopColor="#4e69ff" />
          <stop offset=".351" stopColor="#6559ff" />
          <stop offset=".428" stopColor="#6d53ff" />
          <stop offset=".754" stopColor="#df47aa" />
          <stop offset=".946" stopColor="#ff6257" />
        </radialGradient>
        <path
          fill="url(#messengerGradient)"
          d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
        />
        <path
          fill="#ffffff"
          d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
        />
      </svg>
    ),
    user: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    centralLogo: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="2" />
        <path
          d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6Z"
          fill="#000000"
        />
        <path d="M8 16H16V18H8V16Z" fill="#000000" />
      </svg>
    ),
  };

export default AnimatedBeamMultipleOutputDemo;