"use client";

import React, { useState } from "react";
import axios from "axios";

const jobsData = [
  {
    id: 1,
    title: "Sr Java developer",
    location: "Indore",
    tags: ["Indore", "Indore", "Java Spring boot ", "Python"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eleifend purus, eget tempor metus. Duis ut purus odio. Sed feugiat, mauris eu laoreet convallis, odio ex molestie nunc, id iaculis mauris odio at ipsum. Nunc placerat tempor ex nec lacinia. Sed finibus velit et aliquam posuere. Mauris nec massa at metus ultrices bibendum ut ac magna. In hac habitasse platea dictumst.",
    responsiblity: [
      "Design and build software solutions that directly impact customers and the world.",
      "Take ownership and be responsible for what you build",
      "Work collaboratively across multiple functions (e.g. Product, Sales, Marketing). ",
      "You will develop and execute against both short and long-term roadmaps, making effective tradeoffs between business impact, user experience, and a high-quality technical foundation.",
      "You will support your fellow engineers through feedback, code reviews, and the advancement of internal tools and processes.",
      "Ensuring that all deliverables adhere to our world-class standards",
      "Help with hiring and organizations building for future scale.",
    ],
    Prerequisite: [
      "5+ years of professional experience",
      "Professional experience using Java in production quality code.",
      "Excellent written and verbal English communication skills",
      "Strong design skills (HLD and LLD)",
      "Agile and comfortable working in a fast-paced startup environment.",
      "Focus on collaboration and making progress everyday over excellence. ",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Remote",
    tags: ["React", "HTML", "CSS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eleifend purus, eget tempor metus. Duis ut purus odio. Sed feugiat, mauris eu laoreet convallis, odio ex molestie nunc, id iaculis mauris odio at ipsum. Nunc placerat tempor ex nec lacinia. Sed finibus velit et aliquam posuere. Mauris nec massa at metus ultrices bibendum ut ac magna. In hac habitasse platea dictumst.",
    responsiblity: [
      "Design and build software solutions that directly impact customers and the world.",
      "Take ownership and be responsible for what you build",
      "Work collaboratively across multiple functions (e.g. Product, Sales, Marketing). ",
      "You will develop and execute against both short and long-term roadmaps, making effective tradeoffs between business impact, user experience, and a high-quality technical foundation.",
      "You will support your fellow engineers through feedback, code reviews, and the advancement of internal tools and processes.",
      "Ensuring that all deliverables adhere to our world-class standards",
      "Help with hiring and organizations building for future scale.",
    ],
    Prerequisite: [
      "5+ years of professional experience",
      "Professional experience using Java in production quality code.",
      "Excellent written and verbal English communication skills",
      "Strong design skills (HLD and LLD)",
      "Agile and comfortable working in a fast-paced startup environment.",
      "Focus on collaboration and making progress everyday over excellence. ",
    ],
  },
  {
    id: 3,
    title: "Backend Developer",
    location: "Pune",
    tags: ["Node.js", "MongoDB"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eleifend purus, eget tempor metus. Duis ut purus odio. Sed feugiat, mauris eu laoreet convallis, odio ex molestie nunc, id iaculis mauris odio at ipsum. Nunc placerat tempor ex nec lacinia. Sed finibus velit et aliquam posuere. Mauris nec massa at metus ultrices bibendum ut ac magna. In hac habitasse platea dictumst.",
    responsiblity: [
      "Design and build software solutions that directly impact customers and the world.",
      "Take ownership and be responsible for what you build",
      "Work collaboratively across multiple functions (e.g. Product, Sales, Marketing). ",
      "You will develop and execute against both short and long-term roadmaps, making effective tradeoffs between business impact, user experience, and a high-quality technical foundation.",
      "You will support your fellow engineers through feedback, code reviews, and the advancement of internal tools and processes.",
      "Ensuring that all deliverables adhere to our world-class standards",
      "Help with hiring and organizations building for future scale.",
    ],
    Prerequisite: [
      "5+ years of professional experience",
      "Professional experience using Java in production quality code.",
      "Excellent written and verbal English communication skills",
      "Strong design skills (HLD and LLD)",
      "Agile and comfortable working in a fast-paced startup environment.",
      "Focus on collaboration and making progress everyday over excellence. ",
    ],
  },
  {
    id: 4,
    title: "Seo Specialist",
    location: "Bhopal",
    tags: ["Google ads", "Seo Tool"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eleifend purus, eget tempor metus. Duis ut purus odio. Sed feugiat, mauris eu laoreet convallis, odio ex molestie nunc, id iaculis mauris odio at ipsum. Nunc placerat tempor ex nec lacinia. Sed finibus velit et aliquam posuere. Mauris nec massa at metus ultrices bibendum ut ac magna. In hac habitasse platea dictumst.",
    responsiblity: [
      "Design and build software solutions that directly impact customers and the world.",
      "Take ownership and be responsible for what you build",
      "Work collaboratively across multiple functions (e.g. Product, Sales, Marketing). ",
      "You will develop and execute against both short and long-term roadmaps, making effective tradeoffs between business impact, user experience, and a high-quality technical foundation.",
      "You will support your fellow engineers through feedback, code reviews, and the advancement of internal tools and processes.",
      "Ensuring that all deliverables adhere to our world-class standards",
      "Help with hiring and organizations building for future scale.",
    ],
    Prerequisite: [
      "5+ years of professional experience",
      "Professional experience using Java in production quality code.",
      "Excellent written and verbal English communication skills",
      "Strong design skills (HLD and LLD)",
      "Agile and comfortable working in a fast-paced startup environment.",
      "Focus on collaboration and making progress everyday over excellence. ",
    ],
  },
];

const JobsPage = () => {
  const [filter, setFilter] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [selectedJob, setSelectedJob] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [message, setMessage] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const filtered = jobsData.filter(
      (job) =>
        job.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        job.location.toLowerCase().includes(e.target.value.toLowerCase()) ||
        job.tags.some((tag) =>
          tag.toLowerCase().includes(e.target.value.toLowerCase())
        )
    );
    setFilteredJobs(filtered);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleApplyClick = () => {
    setSelectedJob((selectedJob) => ({
      ...selectedJob,
      showForm: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(resume);
    try {
      const response = await axios.post("/api", {
        name: name,
        email: email,
        resume: resume,
      });
      alert(response.status);
      console.log(response.data.message);
    } catch (error) {
      alert("Failed to send email");
      console.error("Error occurred while sending email:", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setResume(reader.result);
      };
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl mb-20">
      <h1 className="text-3xl font-bold mb-4">Job Listings</h1>
      <input
        type="text"
        placeholder="Filter by title, location, or tag"
        value={filter}
        onChange={handleFilterChange}
        className="w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <ul className="flex flex-wrap gap-10 max-w-3xl mx-auto mt-10">
        {filteredJobs.map((job) => (
          <li
            key={job.id}
            className="mb-4 p-4 bg-gray-100 rounded-md cursor-pointer"
            onClick={() => handleJobClick(job)}
          >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.location}</p>
            <ul className="mt-2">
              {job.tags.map((tag) => (
                <li
                  key={tag}
                  className="inline-block bg-[#733e3d] text-white px-2 py-1 rounded-md mr-2"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {selectedJob && (
        <div className="fixd inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 max-w-md rounded-lg">
            <div className="applyform">
              <div className="fixed w-full bsolute inset-0 flex justify-center overflow-croll items-center bg-white bg-opacity50  z-[99999999999999999999999999999999999999999]">
                <div className="bg-white p-10 max-wxl rounded-lg overflowscroll  flex max-w-[1200px] gap-20 justify-center items-center">
                  <div className="job-discription max-w-xl overflow-scroll h-[500px] mt-20">
                    <h2 className="text-2xl font-semibold mb-4">
                      {selectedJob.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{selectedJob.location}</p>
                    <p className="mb-4">{selectedJob.description}</p>
                    <h2 className="text-2xl font-semibold mb-4">
                      responsiblity
                    </h2>
                    {selectedJob.responsiblity.map((tag) => (
                      <li
                        key={tag}
                        className="inline-block list-disc text-black px-2 py-1 rounded-md mr-2"
                      >
                        {tag}
                      </li>
                    ))}
                    <h2 className="text-2xl font-semibold mb-4">
                      Prerequisite
                    </h2>
                    {selectedJob.Prerequisite.map((tag) => (
                      <li
                        key={tag}
                        className="inline-block list-disc text-black px-2 py-1 rounded-md mr-2"
                      >
                        {tag}
                      </li>
                    ))}
                  </div>
                  {/* <h2 className="text-2xl font-semibold mb-4">
                    {selectedJob.title}
                  </h2> */}
                  <div>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500"
                        required
                      />
                      {/* <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Position Applied For"
                      className="w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500"
                      required
                    /> */}
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md"
                      >
                        Submit
                      </button>
                      <button
                        type="reset"
                        className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md ml-2"
                        onClick={() => setSelectedJob(null)}
                      >
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={handleApplyClick}
            >
              Apply
            </button>
            <button
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md ml-2"
              onClick={() => setSelectedJob(null)}
            >
              Close
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobsPage;
