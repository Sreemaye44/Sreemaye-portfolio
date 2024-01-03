import React from "react";

const Experience = () => {
  return (
    <div className=" max-w-[65rem] mx-auto">
      <h2 className="text-4xl font-semibold text-fuchsia-500 mb-10">
        Experiences
      </h2>
      <div className=" bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg text-white px-6 rounded-lg py-8">
        <div className="flex justify-between">
          <h1 className="text-2xl text-fuchsia-500">Assistant Programmer</h1>
          <h2 className="text-teal-500">2023 September - Onwards </h2>
        </div>
        <h1 className="text-teal-500 mb-2">
          <i>Golden Harvest InfoTech Limited</i>
        </h1>
        <p>Skills: Angular, React JS, Next JS, node JS, express JS, Mongoose</p>
        <p>Responsibilities: </p>
        <ul className="text-sm">
          <li>
            1. Website optimization e.g image compression, solved lazy loading
            issues
          </li>
          <li>
            2. Add cart Button functionality with total items on navigation bar
            used NEXT JS SWR hook and mutation. page styling improved and made
            it figma perfect for various screen size and device.
          </li>
          <li>
            3. Resolved registration issues with email and mobile no, state
            management, file and image uploading fetaures handled.
          </li>
          <li>
            4. Authentication, authorization, sorting, searching, forget
            password and password changing feature developed
          </li>
          <li>
            5. Global Error Handling, MVC architecture followed, user data
            validation handled
          </li>
        </ul>
      </div>
      <div className="bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg text-white px-6 rounded-lg py-8 my-5">
        <div className="flex justify-between">
          <h1 className="text-2xl text-fuchsia-500">Junior Programmer</h1>
          <h2 className="text-teal-500">2023 January - 2023 August </h2>
        </div>
        <h1 className="text-teal-500 mb-2">
          <i>Golden Harvest InfoTech Limited</i>
        </h1>
        <p>Skills: React JS, Next JS , strapi, bootstrap, Material UI</p>
        <p>Responsibilities: </p>
        <ul className="text-sm">
          <li>
            1. Fetching and displaying data from RESTful APIs, ensuring seamless
            communication between frontend and backend systems.
          </li>
          <li>
            2. Created custom APIs for mobile number and email registration
            process, resolved email confirmation and SMS verification issues for
            strapi (backend).
          </li>
          <li>
            3. Solved version changing issues, fixed functional bugs e.g
            background voice not starting, eraser not working, and storytelling
            not progressing, fixed designing bugs such as overlapping text and
            broken buttons, made certain pages responsive.
          </li>
        </ul>
      </div>

      <div className="bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg text-white px-6 rounded-lg py-8 my-5">
        <div className="flex justify-between">
          <h1 className="text-2xl text-fuchsia-500">Internship</h1>

          <h2 className="text-teal-500">2022 July - 2022 September </h2>
        </div>
        <h1>
          <i className="text-teal-500 mb-2">Divine IT Limited</i>
        </h1>
        <p>skills: IOT, python</p>
      </div>
    </div>
  );
};

export default Experience;
