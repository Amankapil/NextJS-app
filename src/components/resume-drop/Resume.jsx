"use client";
import { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const Resume = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure a file is selected
    if (!file) {
      console.log("No file selected");
      return;
    }

    // Continue with form submission
    const formData = new FormData();
    formData.append("resume", file);
    // const formData = new FormData();
    // formData.append("resume", file);
    console.log(file);
    console.log("FormData:", formData);
    console.log(JSON.stringify(formData));
    var options = { content: formData };
    console.log(options);
    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    try {
      const response = await axios.post("/api/upload", { formData });
      console.log(response.data);
      // Optionally, show a success message or redirect the user
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error
    }
  };

  return (
    <form className="py-40" onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload Resume</button>
    </form>
  );
};

export default Resume;
