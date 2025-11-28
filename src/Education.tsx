import type { FC } from "react";
import "./index.css";

const Education: FC = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-white text-center underline decoration-amber-600 mb-8">
          Qualification
        </h1>

        <ul className="text-white text-lg sm:text-xl space-y-4 text-center md:text-left ml-7 md:ml-[30%]">
          <li>SDW School - SSLC: 73%</li>
          <li>St. Mary's School - HSC: 70%</li>
          <li>BIHER - UG: 75%</li>
          <li>Crescent - PG: 73%</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
