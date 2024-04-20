"use client";
import axios from "axios";
import { useState } from "react";

const MyFormComponent = () => {
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [file, setFile] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // const handleResumeChange = (e) => {
  const handleResumeChange = (e) => {
    setFile(e.target.files[0]);
  };
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("email", email);
  //   formData.append("resume", resume);
  //   console.log(formData);

  //   try {
  //     const response = await fetch("/api/upload", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       console.log("Email sent successfully");
  //     } else {
  //       console.error("Failed to send email");
  //     }
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      return; // Handle no file selected case
    }

    const formData = new FormData();
    formData.append("pdfFile", file);

    console.log(formData);
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      console.log(formData);

      if (response.ok) {
        console.log("PDF uploaded successfully!");
        console.log(response);
        console.log(formData);
      } else {
        console.error("Error uploading PDF:", await response.text());
      }
    } catch (error) {
      console.error("Error sending PDF:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-20 "
      encType="multipart/form-data"
    >
      {/* <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      /> */}
      <input type="file" onChange={handleResumeChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormComponent;
