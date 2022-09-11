import React from "react";
import Filters from "../components/Filters";

import { HiArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4">
      <div className="flex flex-col w-full mr-5 p-4">
        <div className="flex flex-row">
          <div className=" w-full mr-5 ">
            <div className="bg-background flex items-center px-8 py-4">
              <div className="w-full">
                <input
                  type="text"
                  className="rounded-sm w-[100%] border-b-4 border-black"
                />
              </div>
            </div>
          </div>
          <div className="bg-yellow-300 px-7 flex items-center justify-center cursor-pointer">
            <HiArrowRight className="w-[20px] h-[20px]" />
          </div>
        </div>

        <div className="text-left p-4">
          <div>
            <h1 className="font-bold">
              Fibre Cable Tight Buffered MM 16 Fibre OM3 50/125 LSZH Eca Black
              (Dia)7.8mm
            </h1>
            <p className="text-sm mt-3">
              Distribution or mini-break-out cable suitable for use in many
              indoor and outdoor applications. Features new and improved ES9
              tight buffer. Typical applications include LAN and WAN
              backbones...
            </p>
            <p className="text-sm mt-5">
              Manufacturer M12312 Part Number :{" "}
              <span className="font-bold">60019533</span>
            </p>
            <p className="text-sm">Found in your catalog and 5 others</p>
          </div>

          <div className="mt-8">
            <h1 className="font-bold">
              DYNAmic Server Cabinet 47Ux6x10 Vented Vented Removable Adj Feet &
              Earth Kit
            </h1>
            <p className="text-sm mt-3">
              This standard series of Lande cabinets provides an ideal
              environment for housing server and IT equipment, available from
              26U to 47U and up to 1200mm deep.
            </p>
            <p className="text-sm mt-5">
              Your catalog Part Number : DAT
              <span className="font-bold">60019533</span>
            </p>
            <p className="text-sm">Found in your catalog and 2 others</p>
          </div>

          <div className="mt-8">
            <h1 className="font-bold">
              Cable Ties Metal Content Tie (MCT) Magnetic and X-Ray Detectable
              Blue
            </h1>
            <p className="text-sm mt-3">
              The metal content cable tie is designed for use in the food and
              pharmaceutical processing industries. A unique manufacturing
              process, involving the inclusion of a metallic pigment.
            </p>
            <p className="text-sm mt-5">
              Comtec catalog Part Number:{" "}
              <span className="font-bold">60019533</span>
            </p>
            <p className="text-sm">Found in your catalog and 2 others</p>
          </div>

          <div className="mt-8">
            <h1 className="font-bold">DSX2-5000 Cat6A DSX2-5000 INT</h1>
            <p className="text-sm mt-3">
              Fluke Networks DSX2-5000 copper cabling certifier. Tests up to TIA
              Cat6A or ISO/IEC Class FA. Full Cat5e/6 2-way autotest in 9
              seconds. Full Cat6A. 2-way autotest in just 10 seconds. WiFi
              enabled
            </p>
            <p className="text-sm mt-5">
              Manufacturer M23331 Part Number:{" "}
              <span className="font-bold">60019533</span>LAO1
            </p>
            <p className="text-sm">Found in Comtec catalog and 1 other</p>
          </div>
        </div>
      </div>

      <Filters />
    </div>
  );
};

export default Home;
