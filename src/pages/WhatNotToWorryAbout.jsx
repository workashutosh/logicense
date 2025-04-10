import React from 'react';

const WhatNotToWorryAbout = () => {
  return (
    <div className="relative py-16 px-4">
    {/* Grid background */}
    <div 
      className="absolute overflow-hidden inset-0 -z-10 h-full w-full"
      style={{
        backgroundColor: '#fafafa',
        backgroundImage: 'linear-gradient(to right, rgba(128, 128, 128, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.04) 1px, transparent 1px)',
        backgroundSize: '14px 24px'
      }}
    ></div>
      <h1 className="text-3xl font-bold text-left px-8 text-[#155DFC] mb-8">What not to worry about</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-9xl mx-auto">
        {/* Design-thinking */}
        <div className="flex flex-col items-center text-center p-6  ">
          <svg
            className="w-16 h-20 mb-4"
            viewBox="0 0 100 125"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="st0"
              d="M89.7,5H9.3C6.9,5,5,6.9,5,9.3v80.3C5,92.1,6.9,94,9.3,94h80.3c2.4,0,4.3-1.9,4.3-4.3V9.3C94,6.9,92.1,5,89.7,5z M37.2,52.8c2.8-2.7,6.6-4.1,10.4-4c6.3,0.2,11.2,5.4,11,11.7c-0.1,2.4-1.1,4.5-2.8,6.2c-1.7,1.6-3.9,2.5-6.3,2.4c-1.8-0.1-3.5-0.8-4.7-2.1c-1.2-1.3-1.9-3-1.8-4.8c0.1-2.8,2.4-5,5.1-5c0.1,0,0.1,0,0.2,0c2.1,0.1,3.8,1.8,3.7,3.9c0,1.5-1.4,2.7-2.9,2.7l-0.1,2.8c0.1,0,0.1,0,0.2,0c3,0,5.5-2.4,5.6-5.4c0.1-3.7-2.8-6.7-6.5-6.8c-0.1,0-0.2,0-0.2,0c-4.3,0-7.8,3.4-8,7.7c-0.1,2.6,0.9,5,2.6,6.9s4.1,2.9,6.7,3c3.1,0.1,6.1-1,8.3-3.2c2.3-2.1,3.6-5,3.7-8.1c0.2-7.8-6-14.4-13.8-14.6c-2.3-0.1-4.5,0.3-6.6,1.1c2.3-2.4,4.1-5.4,5.1-8.8c1-3.3,1.3-6.8,0.9-10.2c7.5,0.5,14.4,3.9,19.6,9.5c5.5,5.9,8.4,13.6,8.1,21.6c-0.2,6.3-2.8,12.1-7.4,16.5c-4.6,4.3-10.6,6.6-16.9,6.4c-5-0.1-9.6-2.2-13-5.8s-5.2-8.3-5-13.3C32.8,59.1,34.4,55.5,37.2,52.8z M77.7,59.3c0.1-1.8,0-3.5-0.3-5.2c4.7,0,9.3,1.1,13.5,3.1v21.3c-0.2-0.3-0.5-0.5-0.7-0.8c-3.1-2.8-7-4.1-11.2-3.9c-2.9,0.2-5.7,1-8.1,2.4C75.2,71.5,77.6,65.6,77.7,59.3z M89.7,8C90.4,8,91,8.6,91,9.3V54c-4.4-1.9-9.1-2.9-14-2.8c-1.3-5.7-4-11.1-8.1-15.5c-5.9-6.3-13.7-10-22.2-10.5c-0.5-2.5-1.4-4.9-2.6-7.2c-2.3-4.2-5.5-7.7-9.5-10.1H89.7z M9.3,8h18.3c6,1.8,10.9,5.8,13.9,11.4c3,5.6,3.7,12,1.9,18.1c-1.4,4.7-4.5,8.7-8.9,11c-4.3,2.4-9.3,2.9-14.1,1.5c-3.7-1.1-6.8-3.6-8.7-7c-1.9-3.4-2.3-7.3-1.2-11c1.8-6,8.1-9.5,14.1-7.7c4.6,1.4,7.3,6.2,6,10.9c-1,3.6-4.8,5.6-8.4,4.6c-2.7-0.8-4.3-3.6-3.5-6.3c0.6-2,2.7-3.2,4.7-2.6c1.5,0.4,2.3,2,1.9,3.4c-0.3,1-1.4,1.6-2.4,1.3l-0.8,2.7c1.2,0.4,2.5,0.2,3.6-0.4c1.1-0.6,1.9-1.6,2.3-2.8c0.9-3-0.8-6.1-3.8-6.9c-3.5-1-7.2,1-8.2,4.5c-0.6,2-0.4,4.2,0.7,6c1,1.9,2.7,3.2,4.7,3.8c5.1,1.5,10.4-1.4,11.9-6.5c1.8-6.2-1.8-12.6-7.9-14.4c-7.4-2.2-15.3,2.1-17.5,9.5V9.3C8,8.6,8.6,8,9.3,8z M9.3,91C8.6,91,8,90.4,8,89.7V41.2c0.3,1.1,0.8,2.2,1.4,3.3c2.2,4.1,5.9,7,10.4,8.3c2,0.6,4,0.9,6,0.9c2.9,0,5.7-0.6,8.3-1.7c-2.7,3-4.2,6.9-4.3,10.9c-0.2,5.7,1.9,11.2,5.8,15.3s9.2,6.5,14.9,6.7c0.3,0,0.5,0,0.8,0c5,0,9.8-1.4,14-4c-2.4,2.9-3.8,6.4-4.1,10.1L9.3,91L9.3,91z M85.1,91h-9.8c0.2-2.8,2.5-5.2,5.4-5.3c2.3-0.1,4.4,1.7,4.6,4.1C85.4,90.2,85.3,90.6,85.1,91z M89.7,91h-1.6c0.1-0.5,0.1-0.9,0.1-1.4c-0.2-3.9-3.6-7-7.6-6.8c-4.4,0.2-7.9,3.8-8.1,8.2h-8.4c0.4-3.3,1.7-6.4,4-9c2.9-3.2,6.8-5.1,11.1-5.4c3.4-0.2,6.6,0.9,9.1,3.2c1.1,1,2,2.1,2.6,3.3v6.5C91,90.4,90.4,91,89.7,91z"
              fill="#155DFC"
            />
          </svg>
          <p className="text-md text-[#155DFC]">Design-thinking<br />We identify problems and build only what you need.</p>
        </div>

        {/* 80-20 thinking */}
        <div className="flex flex-col items-center text-center p-6  ">
          <svg
            className="w-16 h-20 mb-4"
            viewBox="0 0 23.9 29.9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="st0"
              d="M23.9,9.6V0h-9.6C6.4,0,0,6.4,0,14.3v0.2l0,0v9.4h9.6C17.5,23.9,23.9,17.5,23.9,9.6z M19.4,18.9L12.5,12L15,9.4h8.1v0.2C23.1,13.1,21.8,16.4,19.4,18.9z M23.1,4.3h-7.9V2.9h7.9V4.3z M23.1,5.1v1.4h-7.9V5.1L23.1,5.1z M23.1,7.2v1.4h-7.9V7.2H23.1z M23.1,0.8v1.4h-7.9V0.8H23.1z M14.3,0.8h0.2v8.1L12,11.4L5,4.5C7.5,2.1,10.8,0.8,14.3,0.8z M0.8,14.3c0-3.4,1.3-6.8,3.7-9.3l6.9,7l-2.5,2.5H0.8V14.3z M0.8,19.6h7.9V21H0.8V19.6z M0.8,18.8v-1.4h7.9v1.4H0.8z M0.8,16.6v-1.4h7.9v1.4H0.8z M0.8,23.1v-1.4h7.9v1.4H0.8z M9.6,23.1H9.4V15l2.6-2.5l6.9,6.9C16.4,21.8,13.1,23.1,9.6,23.1z"
              fill="#155DFC"
            />
          </svg>
          <p className="text-md text-[#155DFC]">80-20 thinking<br />We recommend building the 20% that leads to 80% impact.</p>
        </div>

        {/* Agile */}
        <div className="flex flex-col items-center text-center p-6  ">
          <svg
            className="w-16 h-20 mb-4"
            viewBox="0 0 512 640"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="st0"
              d="M110,106H30c-3.3,0-6-2.7-6-6V30c0-3.3,2.7-6,6-6h80c3.3,0,6,2.7,6,6v70C116,103.3,113.3,106,110,106z M36,94h68V36H36V94z M490,106h-80c-3.3,0-6-2.7-6-6V30c0-3.3,2.7-6,6-6h80c3.3,0,6,2.7,6,6v70C496,103.3,493.3,106,490,106z M416,94h68V36h-68V94z M110,496H30c-3.3,0-6-2.7-6-6v-70c0-3.3,2.7-6,6-6h80c3.3,0,6,2.7,6,6v70C116,493.3,113.3,496,110,496z M36,484h68v-58H36V484z M490,496h-80c-3.3,0-6-2.7-6-6v-70c0-3.3,2.7-6,6-6h80c3.3,0,6,2.7,6,6v70C496,493.3,493.3,496,490,496z M416,484h68v-58h-68V484z M70,426c-3.3,0-6-2.7-6-6V100c0-3.3,2.7-6,6-6s6,2.7,6,6v320C76,423.3,73.3,426,70,426z M410,466H110c-3.3,0-6-2.7-6-6s2.7-6,6-6h300c3.3,0,6,2.7,6,6S413.3,466,410,466z M450,426c-3.3,0-6-2.7-6-6V100c0-3.3,2.7-6,6-6s6,2.7,6,6v320C456,423.3,453.3,426,450,426z M410,66H110c-3.3,0-6-2.7-6-6s2.7-6,6-6h300c3.3,0,6,2.7,6,6S413.3,66,410,66z M255,226c-28.1,0-51-22.9-51-51s22.9-51,51-51c28.1,0,51,22.9,51,51S283.1,226,255,226z M255,136c-21.5,0-39,17.5-39,39s17.5,39,39,39s39-17.5,39-39S276.5,136,255,136z M175,366c-28.1,0-51-22.9-51-51s22.9-51,51-51s51,22.9,51,51S203.1,366,175,366z M175,276c-21.5,0-39,17.5-39,39s17.5,39,39,39s39-17.5,39-39S196.5,276,175,276z M345,366c-28.1,0-51-22.9-51-51s22.9-51,51-51s51,22.9,51,51S373.1,366,345,366z M345,276c-21.5,0-39,17.5-39,39s17.5,39,39,39s39-17.5,39-39S366.5,276,345,276z"
              fill="#155DFC"
            />
          </svg>
          <p className="text-md text-[#155DFC]">Agile<br />We continuously evolve the solution based on feedback.</p>
        </div>

        {/* Releases */}
        <div className="flex flex-col items-center text-center p-6  ">
          <svg
            className="w-16 h-20 mb-4"
            viewBox="0 0 100 125"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="st0"
              d="M85.9,14.7c0-0.1,0-0.1-0.1-0.2c0,0,0-0.1,0-0.1c0,0,0,0-0.1-0.1c0-0.1-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0H15c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.1,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0-0.1,0.1c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1v70c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0.1,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0.1,0c0.1,0.1,0.2,0.1,0.2,0.2c0,0,0.1,0,0.1,0.1C14.7,86,14.8,86,15,86h70c0.2,0,0.3,0,0.4-0.1c0,0,0.1,0,0.1-0.1c0.1-0.1,0.2-0.1,0.2-0.2c0,0,0,0,0.1,0c0,0,0-0.1,0-0.1c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1V15c0,0,0-0.1,0-0.1C86,14.8,86,14.8,85.9,14.7z M81.9,16L50,39L18.1,16H81.9z M79.8,20v60l-2.2-1.6V21.6L79.8,20z M75.6,23v54l-2.2-1.6V24.6L75.6,23z M71.4,26V74l-2.2-1.6V27.6L71.4,26z M67.2,29.1v41.9L65,69.4V30.6L67.2,29.1z M50,58.5L38.2,50L50,41.5L61.8,50L50,58.5z M58.9,54.6v10.3l-2.2-1.6v-7.2L58.9,54.6z M54.7,57.6v4.3l-3-2.1L54.7,57.6z M51.7,40.3l3-2.1v4.3L51.7,40.3z M56.7,43.9v-7.2l2.2-1.6v10.3L56.7,43.9z M60.9,53.1l2.2-1.6v16.4l-2.2-1.6V53.1z M60.9,46.9V33.7l2.2-1.6v16.4L60.9,46.9z M16,17l32.3,23.3l-12.4,8.9c-0.3,0.2-0.4,0.5-0.4,0.8s0.2,0.6,0.4,0.8l12.4,8.9L16,83V17z M18.1,84L50,61l17.5,12.6c0.1,0.1,0.2,0.2,0.3,0.2L81.9,84H18.1z M84,83l-2.2-1.6V18.6L84,17V83z"
              fill="#155DFC"
            />
          </svg>
          <p className="text-md text-[#155DFC]">Releases<br />We do rapid, secure releases (minus drama).</p>
        </div>

        {/* Crashes */}
        <div className="flex flex-col items-center text-center p-6  ">
          <svg
            className="w-16 h-20 mb-4"
            viewBox="0 0 23.9 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="st0"
              d="M23.9,20.3L23.9,20.3V3.8c0,0,0-0.1,0-0.2v0c0,0,0,0,0-0.1c-0.1-0.2-0.4-0.2-0.5-0.1c0,0,0,0,0,0l-2.9,2.1l-6.9-5c-0.9-0.6-2-0.6-2.9,0l-7,5l-3-2.1l0,0H0.5H0.4H0.3H0.2c0,0,0,0-0.1,0H0.1l0,0l0,0v0.1c0,0,0,0,0,0.1s0,0,0,0L0,20.2l0,0c0,0,0,0.1,0,0.1v0.1l0,0l0,0l0.1,0.1l0,0c0,0,0.1,0,0.2,0l0,0c0.1,0,0.1,0,0.2-0.1l0,0l3.1-2l7,5c0.4,0.3,0.9,0.5,1.5,0.5c0.5,0,1-0.2,1.5-0.5l7-5l2.9,2.1l0,0c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0,0.2,0l0,0l0.1-0.1l0,0l0,0c0,0,0,0,0-0.1C23.8,20.4,23.8,20.4,23.9,20.3z M20.6,17.8L20.6,17.8l-2.9-2.1V9.3c0-0.3-0.1-0.6-0.2-0.8l5.6-4.1v15.2L20.6,17.8z M16.9,9.3v5.8L12.6,12l4.3-3.1C16.9,9,16.9,9.2,16.9,9.3z M10.9,1.1c0.6-0.4,1.4-0.4,2.1,0l6.7,4.8l-2.5,1.8c-0.1-0.2-0.3-0.4-0.5-0.5l-4.4-3.2C12,3.9,11.8,4,11.7,4.1c0,0,0,0,0,0c-0.1,0.2-0.1,0.4,0.1,0.5l4.4,3.2c0.1,0.1,0.3,0.2,0.4,0.4l-4.6,3.3L4.1,5.9L10.9,1.1z M0.8,19.5V4.4l5.5,3.9v6.3c0,0.3,0.1,0.5,0.1,0.8L0.8,19.5z M7,14.7V8.9l4.3,3.1L7,15C7,14.9,7,14.8,7,14.7z M13,22.9c-0.6,0.4-1.4,0.4-2,0L4.1,18l2.6-1.9c0.2,0.2,0.3,0.4,0.6,0.6l4.4,3.2c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.2-0.1,0.3-0.2c0.1-0.2,0.1-0.4-0.1-0.5c0,0,0,0,0,0l-4.4-3.2c-0.1-0.1-0.3-0.2-0.4-0.4l4.6-3.3l7.8,5.6L13,22.9z"
              fill="#155DFC"
            />
          </svg>
          <p className="text-md text-[#155DFC]">Crashes<br />We set up tools that detect crashes and errors before you do.</p>
        </div>

        {/* Analytics */}
        <div className="flex flex-col items-center text-center p-6  ">
          <svg
            className="w-16 h-20 mb-4"
            viewBox="0 0 100 125"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="st0"
              d="M85.9,14.7c0-0.1,0-0.1-0.1-0.2c0,0,0-0.1,0-0.1c0,0,0,0-0.1-0.1c0-0.1-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0H15c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.1,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0-0.1,0.1c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1v70c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0.1,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0.1,0c0.1,0.1,0.2,0.1,0.2,0.2c0,0,0.1,0,0.1,0.1C14.7,86,14.8,86,15,86h70c0.2,0,0.3,0,0.4-0.1c0,0,0.1,0,0.1-0.1c0.1-0.1,0.2-0.1,0.2-0.2c0,0,0,0,0.1,0c0,0,0-0.1,0-0.1c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1V15c0,0,0-0.1,0-0.1C86,14.8,86,14.8,85.9,14.7z M81.9,16L50,39L18.1,16H81.9z M79.8,20v60l-2.2-1.6V21.6L79.8,20z M75.6,23v54l-2.2-1.6V24.6L75.6,23z M71.4,26V74l-2.2-1.6V27.6L71.4,26z M67.2,29.1v41.9L65,69.4V30.6L67.2,29.1z M50,58.5L38.2,50L50,41.5L61.8,50L50,58.5z M58.9,54.6v10.3l-2.2-1.6v-7.2L58.9,54.6z M54.7,57.6v4.3l-3-2.1L54.7,57.6z M51.7,40.3l3-2.1v4.3L51.7,40.3z M56.7,43.9v-7.2l2.2-1.6v10.3L56.7,43.9z M60.9,53.1l2.2-1.6v16.4l-2.2-1.6V53.1z M60.9,46.9V33.7l2.2-1.6v16.4L60.9,46.9z M16,17l32.3,23.3l-12.4,8.9c-0.3,0.2-0.4,0.5-0.4,0.8s0.2,0.6,0.4,0.8l12.4,8.9L16,83V17z M18.1,84L50,61l17.5,12.6c0.1,0.1,0.2,0.2,0.3,0.2L81.9,84H18.1z M84,83l-2.2-1.6V18.6L84,17V83z"
              fill="#155DFC"
            />
          </svg>
          <p className="text-md text-[#155DFC]">Analytics<br />We set up tools to give you actionable insights.</p>
        </div>

        {/* 3S of Tech */}
        <div className="flex flex-col items-center text-center p-6  ">
          <svg
            className="w-16 h-20 mb-4"
            viewBox="0 0 100 125"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="st0"
              d="M85.4,14.1C85.3,14,85.1,14,85,14h-9.6H34.2h-9.6H15c-0.6,0-1,0.4-1,1v70c0,0.6,0.4,1,1,1h9.6h9.6h41.1H85c0.1,0,0.3,0,0.4-0.1c0.2-0.1,0.4-0.3,0.5-0.5C86,85.3,86,85.1,86,85V15c0-0.1,0-0.3-0.1-0.4C85.8,14.4,85.6,14.2,85.4,14.1z M23.6,84H16V16h7.6V84z M33.2,84h-7.6v-2.1h7.6V84z M33.2,79.9h-7.6v-2.1h7.6V79.9z M33.2,75.8h-7.6v-2.1h7.6V75.8z M33.2,71.6h-7.6v-2.1h7.6V71.6z M33.2,67.5h-7.6v-2.1h7.6V67.5z M33.2,63.4h-7.6v-2.1h7.6V63.4z M33.2,59.3h-7.6v-2.1h7.6V59.3z M33.2,55.2h-7.6v-2.1h7.6V55.2z M33.2,51.1h-7.6v-2.1h7.6V51.1z M33.2,46.9h-7.6v-2.1h7.6V46.9z M33.2,42.8h-7.6v-2.1h7.6V42.8z M33.2,38.7h-7.6v-2.1h7.6V38.7z M33.2,34.6h-7.6v-2.1h7.6V34.6z M33.2,30.5h-7.6v-2.1h7.6V30.5z M33.2,26.4h-7.6v-2.1h7.6V26.4z M33.2,22.2h-7.6v-2.1h7.6V22.2z M33.2,18.1h-7.6V16h7.6V18.1z M75.4,84H35.2V16h40.1h7.2L49.3,49.3c-0.4,0.4-0.4,1,0,1.4l25.4,25.4l0,0l7.9,7.9H75.4z M74.4,27V73l-23-23L74.4,27z M84,82.6L76.4,75V25l7.6-7.6V82.6z"
              fill="#155DFC"
            />
          </svg>
          <p className="text-md text-[#155DFC]">3S of Tech<br />Our app development ensures speed, security and scale.</p>
        </div>

        {/* Auto-scaling */}
        <div className="flex flex-col items-center text-center p-6  ">
          <svg
            className="w-16 h-20 mb-4"
            viewBox="0 0 100 125"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="st0"
              d="M85,14H15c-0.6,0-1,0.4-1,1v23.2v14.9V85c0,0.6,0.4,1,1,1h70c0.6,0,1-0.4,1-1V53.1V15C86,14.4,85.6,14,85,14z M53.4,37.2H49l12.9-12.9v4.3L53.4,37.2z M61.9,31.5v5.8h-5.8L61.9,31.5z M46.2,37.2h-3.9l19.7-19.7v3.9L46.2,37.2z M40.9,16.1h5.7l-5.7,5.7V16.1z M40.9,24.7l8.6-8.6h4.3L40.9,29.1V24.7z M40.9,31.9l15.7-15.7h3.9L40.9,35.8V31.9z M24.1,26.7V16h14.8v11H24.1C24.1,26.9,24.1,26.8,24.1,26.7z M16,16h6.1v10.7c0,0.1,0,0.2,0.1,0.3H16V16z M16,29h22.9v8.3H16V29z M16,39.2h23.9h22.1v12.9H16V39.2z M84,84H16V54.1h46.9H84V84z M84,52.1H63.9V38.2V16H84V52.1z"
              fill="#155DFC"
            />
          </svg>
          <p className="text-md text-[#155DFC]">Auto-scaling<br />We ensure your server dynamically scales up/down based on usage.</p>
        </div>
      </div>
    </div>
  );
};

export default WhatNotToWorryAbout;