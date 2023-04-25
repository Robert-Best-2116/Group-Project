import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import EditHeader from "./EditHeader";

const Edit = () => {
  // ERRORS AND SHORTCUTS
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  // STATE VARIABLES FOR THE FORM
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
  const [userName, setUserName] = useState("TEST");
  const [userId, setUserId] = useState(12345);

  // DELETE METHOD
  const deleteApplication = (id) => {
    axios
      .delete(`http://localhost:8000/api/application/${id}`)
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  // GET REQUEST FOR PRE FILLED FORM
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/application/${id}`)
      .then((res) => {
        setJobTitle(res.data.jobTitle);
        setCompany(res.data.company);
        setLocation(res.data.location);
        setSalary(res.data.salary);
        setApplicationLink(res.data.applicationLink);
        setJobDescription(res.data.jobDescription);
        setInterview(res.data.interview);
        setInterviewer(res.data.interviewer);
        setOverview(res.data.overview);
        setTechnicalInterviewer(res.data.technicalInterviewer);
        setTechnicalOverview(res.data.technicalOverview);
      })
      .catch((err) => console.log(err));
      window.scrollTo(0, 0)
  }, []);

  // UPDATE METHOD
  const update = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8000/api/application/${id}`, {
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
        console.log(res);
        navigate(`/application/${id}`);
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.err.errors);
      });
  };

  return (
    <div className="w-screen h-auto flex items-center justify-center flex-col">

      <EditHeader />

      <form className="md:w-[65%] w-full h-full m-auto" onSubmit={update}>

        {errors.jobTitle ? (
          <p style={{ color: "red" }}>{errors.jobTitle.message}</p>
        ) : (
          ""
        )}
        <p className="mb-2 py-4 flex items-center justify-center flex-col">
        <div className="w-3/4 flex items-start justify-center flex-col">
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Job Title:</label>
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
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Company:</label>
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
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Location:</label>
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
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Salary: (If Listed)</label>
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
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Application Link:</label>
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
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Job Description:</label>
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
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Interview:</label>
          <input
            className="w-full md:w-full h-[3rem] pl-2 border rounded shadow-md"
            type="text"
            value={interview}
            onChange={(e) => setInterview(e.target.value)}
          />
          </div>
        </p>

        <p className="mb-2 py-4 flex items-center justify-center flex-col">
        <div className="w-3/4 flex items-start justify-center flex-col">
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Interviewer:</label>
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
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Initial Interview Overview:</label>
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
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Technical Interviewer:</label>
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
          <label className="text-[1.2rem] mr-4 mb-2 font-light underline underline-offset-2">Technical Interview Overview:</label>
          <input
            className="w-full md:w-full h-[3rem] pl-2 border rounded shadow-md"
            type="text"
            value={technicalOverview}
            onChange={(e) => setTechnicalOverview(e.target.value)}
          />
          </div>
        </p>

        <input type="hidden" value={userName} />
        <input type="hidden" value={userId} />
        <div className="w-full flex items-center justify-around">
          <input className="transition ease-in-out delay-100 inline-flex items-center rounded-md bg-[#2ECC40af] px-6 py-3 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#2ECC40] hover:text-[#fff] hover:-translate-y-1 hover:scale-110 mt-4 mb-8 cursor-pointer" type="submit" value="Update Application" />
          <p className="transition ease-in-out delay-100 inline-flex items-center rounded-md bg-[#e74c3caf] px-6 py-3 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#e74c3c] hover:text-[#fff] hover:-translate-y-1 hover:scale-110 mt-4 mb-8 cursor-pointer">
        <Link
          onClick={(e) => {
            deleteApplication(id);
          }}
        >
          Delete
        </Link>
      </p>
        </div>
      </form>
    </div>
  );
};

export default Edit;
