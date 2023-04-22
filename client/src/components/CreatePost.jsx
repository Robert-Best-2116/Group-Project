import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const CreatePost = (props) => {
  // PROPS, ERRORS AND SHORTCUTS
  const { applications, setApplications } = props;
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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

  // userName and userId HIDDEN INPUTS WILL BE NEEDED

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
        // console.log("then");
        console.log(res.data);
        // navigate(`/dashboard`);
      })
      .catch((err) => {
        // console.log("theeeeeen");
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
        <p>New Application</p>
        <Link to="/dashboard">Home</Link>
      </div>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Job Title:</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </p>
        <p>
          <label>Company:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </p>
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
        <p>
          <label>Application Link:</label>
          <input
            type="text"
            value={applicationLink}
            onChange={(e) => setApplicationLink(e.target.value)}
          />
        </p>
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
        <input type="submit" value="Submit Application" />
      </form>
    </div>
  );
};

export default CreatePost;
