// CREATED BY ALEX

import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import CreateHeader from "./CreateHeader";
import OptionalForm from "./OptionalForm";
import { useContext } from 'react';
import { UserContext } from './UserContext';

const Create = (props) => {
  // PROPS, ERRORS AND SHORTCUTS - alex
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const {loggedInUser, setLoggedInUser} = useContext(UserContext);
  // let firstName = loggedInUser[firstName];

  // STATE VARIABLES FOR THE FORM - alex
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState(0);
  const [applicationLink, setApplicationLink] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [interview, setInterview] = useState("No");
  const [interviewer, setInterviewer] = useState("");
  const [overview, setOverview] = useState("");
  const [technicalInterviewer, setTechnicalInterviewer] = useState("");
  const [technicalOverview, setTechnicalOverview] = useState("");
  //const [userName, setUserName] = useState(loggedInUser.firstName);
  //const [userId, setUserId] = useState(`loggedInUser._id`);

  //Testing Theory
  const userName = loggedInUser.firstName;
  const userId = loggedInUser._id;

  // userName and userId HIDDEN INPUTS WILL NEED TO BE DYNAMIC

  // CONDITIONAL RENDERING FOR FORM - alex
  const showFullForm = () => {
    if (interview === "Yes") {
      return (
        <OptionalForm
          interviewer={interviewer}
          setInterviewer={setInterviewer}
          overview={overview}
          setOverview={setOverview}
          technicalInterviewer={technicalInterviewer}
          setTechnicalInterviewer={setTechnicalInterviewer}
          technicalOverview={technicalOverview}
          setTechnicalOverview={setTechnicalOverview}
        />
      );
    } else return "";
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/application", {
        jobTitle,
        company,
        location,
        salary,
        applicationLink,
        jobDescription,
        interview,
        interviewer,
        overview,
        technicalInterviewer,
        technicalOverview,
        userName,
        userId,
      })
      .then((res) => {
        console.log(res.data);
        console.log(userName);
        console.log(Object.values(loggedInUser))
        console.log(UserContext)
        navigate(`/dashboard`);
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.err.errors);
      });
  };

  return (
    <div className="w-screen h-auto flex items-center justify-center flex-col">
      <CreateHeader />

      <form
        className="md:w-[65%] w-full h-full m-auto"
        onSubmit={onSubmitHandler}
      >
        {errors.jobTitle ? (
          <p style={{ color: "red" }}>{errors.jobTitle.message}</p>
        ) : (
          ""
        )}
        <p className="mb-2 py-4 flex items-center justify-center flex-col">
          <div className="w-3/4 flex items-start justify-center flex-col">
            <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">
              Job Title:
            </label>
            <input
              className="w-full md:w-full h-[3rem] pl-2 border rounded shadow-md"
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
        </p>

        {errors.company ? (
          <p style={{ color: "red" }}>{errors.company.message}</p>
        ) : (
          ""
        )}
        <p className="mb-2 py-4 flex items-center justify-center flex-col">
          <div className="w-3/4 flex items-start justify-center flex-col">
            <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">
              Company:
            </label>
            <input
              className="w-full md:w-full h-[3rem] pl-2 border rounded shadow-md"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        </p>

        {errors.location ? (
          <p style={{ color: "red" }}>{errors.location.message}</p>
        ) : (
          ""
        )}
        <p className="mb-2 py-4 flex items-center justify-center flex-col">
          <div className="w-3/4 flex items-start justify-center flex-col">
            <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">
              Location:
            </label>
            <input
              className="w-full md:w-full h-[3rem] pl-2 border rounded shadow-md"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </p>

        <p className="mb-2 py-4 flex items-center justify-center flex-col">
          <div className="w-3/4 flex items-start justify-center flex-col">
            <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">
              Salary: (If Listed)
            </label>
            <input
              className="w-full md:w-full h-[3rem] pl-2 border rounded shadow-md"
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
        </p>

        {errors.applicationLink ? (
          <p style={{ color: "red" }}>{errors.applicationLink.message}</p>
        ) : (
          ""
        )}
        <p className="mb-2 py-4 flex items-center justify-center flex-col">
          <div className="w-3/4 flex items-start justify-center flex-col">
            <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">
              Application Link:
            </label>
            <input
              className="w-full md:w-full h-[3rem] pl-2 border rounded shadow-md"
              type="text"
              value={applicationLink}
              onChange={(e) => setApplicationLink(e.target.value)}
            />
          </div>
        </p>

        {errors.jobDescription ? (
          <p style={{ color: "red" }}>{errors.jobDescription.message}</p>
        ) : (
          ""
        )}
        <p className="mb-2 py-4 flex items-center justify-center flex-col">
          <div className="w-3/4 flex items-start justify-center flex-col">
            <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">
              Job Description:
            </label>
            <input
              className="w-full md:w-full h-[3rem] pl-2 border rounded shadow-md"
              type="text"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
        </p>

        <p className="mb-2 py-4 flex items-center justify-center flex-col">
          <div className="w-3/4 flex items-start justify-center flex-col">
            <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">
              Interview:
            </label>
            <select
              onChange={(e) => setInterview(e.target.value)}
              value={interview}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </p>

        {showFullForm()}

        <input type="hidden" value={userName} />
        <input type="hidden" value={userId} />
        <div className="w-full flex items-center justify-center flex-col">
          <input
            className="transition ease-in-out delay-100 inline-flex items-center rounded-md bg-[#2ECC40af] px-6 py-3 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#2ECC40] hover:text-[#fff] hover:-translate-y-1 hover:scale-110 mt-4 mb-8 cursor-pointer"
            type="submit"
            value="Submit Application"
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
