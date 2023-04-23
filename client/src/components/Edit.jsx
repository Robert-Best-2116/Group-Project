import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

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
    <div>
      <div>
        <p>Application Tracker</p>
        <p>Welcome {/* INSERT USER NAME HERE*/}</p>
      </div>
      <div>
        <p>Edit Application</p>
        <Link to="/dashboard">Home</Link>
      </div>
      <form onSubmit={update}>
        {errors.jobTitle ? (
          <p style={{ color: "red" }}>{errors.jobTitle.message}</p>
        ) : (
          ""
        )}
        <p>
          <label>Job Title:</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </p>
        {errors.company ? (
          <p style={{ color: "red" }}>{errors.company.message}</p>
        ) : (
          ""
        )}
        <p>
          <label>Company:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </p>
        {errors.location ? (
          <p style={{ color: "red" }}>{errors.location.message}</p>
        ) : (
          ""
        )}
        <p>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </p>
        <p>
          <label>Salary: (If Listed)</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </p>
        {errors.applicationLink ? (
          <p style={{ color: "red" }}>{errors.applicationLink.message}</p>
        ) : (
          ""
        )}
        <p>
          <label>Application Link:</label>
          <input
            type="text"
            value={applicationLink}
            onChange={(e) => setApplicationLink(e.target.value)}
          />
        </p>
        {errors.jobDescription ? (
          <p style={{ color: "red" }}>{errors.jobDescription.message}</p>
        ) : (
          ""
        )}
        <p>
          <label>Job Description:</label>
          <input
            type="text"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </p>
        <p>
          <label>Interview:</label>
          <input
            type="text"
            value={interview}
            onChange={(e) => setInterview(e.target.value)}
          />
        </p>
        <p>
          <label>Interviewer:</label>
          <input
            type="text"
            value={interviewer}
            onChange={(e) => setInterviewer(e.target.value)}
          />
        </p>
        <p>
          <label>Initial Interview Overview:</label>
          <input
            type="text"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
          />
        </p>
        <p>
          <label>Technical Interviewer:</label>
          <input
            type="text"
            value={technicalInterviewer}
            onChange={(e) => setTechnicalInterviewer(e.target.value)}
          />
        </p>
        <p>
          <label>Technical Interview Overview:</label>
          <input
            type="text"
            value={technicalOverview}
            onChange={(e) => setTechnicalOverview(e.target.value)}
          />
        </p>
        <input type="hidden" value={userName} />
        <input type="hidden" value={userId} />
        <input type="submit" value="Edit Application" />
      </form>
      <p>
        <Link
          onClick={(e) => {
            deleteApplication(id);
          }}
        >
          Delete
        </Link>
      </p>
    </div>
  );
};

export default Edit;
