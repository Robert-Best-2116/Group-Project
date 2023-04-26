// CREATED BY ALEX

import React, { useState } from "react";

const OptionalForm = (props) => {
  // STATE VALUES FROM CREATE AND EDIT - alex
  const {
    interviewer,
    setInterviewer,
    overview,
    setOverview,
    technicalInterviewer,
    setTechnicalInterviewer,
    technicalOverview,
    setTechnicalOverview,
  } = props;

  return (
    <div>
      <p className="mb-2 py-4 flex items-center justify-center flex-col">
        <div className="w-3/4 flex items-start justify-center flex-col">
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">
            Interviewer:
          </label>
          <input
            className="w-full md:w-full h-[3rem] pl-2 border rounded shadow-md"
            type="text"
            value={interviewer}
            onChange={(e) => setInterviewer(e.target.value)}
          />
        </div>
      </p>

      <p className="mb-2 py-4 flex items-center justify-center flex-col">
        <div className="w-3/4 flex items-start justify-center flex-col">
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">
            Initial Interview Overview:
          </label>
          <input
            className="w-full md:w-full h-[3rem] pl-2 border rounded shadow-md"
            type="text"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
          />
        </div>
      </p>

      <p className="mb-2 py-4 flex items-center justify-center flex-col">
        <div className="w-3/4 flex items-start justify-center flex-col">
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">
            Technical Interviewer:
          </label>
          <input
            className="w-full md:w-full h-[3rem] pl-2 border rounded shadow-md"
            type="text"
            value={technicalInterviewer}
            onChange={(e) => setTechnicalInterviewer(e.target.value)}
          />
        </div>
      </p>

      <p className="mb-2 py-4 flex items-center justify-center flex-col">
        <div className="w-3/4 flex items-start justify-center flex-col">
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">
            Technical Interview Overview:
          </label>
          <input
            className="w-full md:w-full h-[3rem] pl-2 border rounded shadow-md"
            type="text"
            value={technicalOverview}
            onChange={(e) => setTechnicalOverview(e.target.value)}
          />
        </div>
      </p>
    </div>
  );
};

export default OptionalForm;
