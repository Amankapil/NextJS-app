"use client";
import { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const Resume = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadStatus("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Error uploading file.");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Job not listing?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Drop us your resume will help to find
          </p>
          <div
            {...getRootProps()}
            className={`mt-4 mx-auto max-w-xs flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md ${
              isDragActive ? "bg-gray-100" : ""
            }`}
          >
            <input {...getInputProps()} />
            <div className="space-y-1 text-center cursor-pointer">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v12m0 0v12m0-12h12m-12 0H6m34 0l-4 4m0-4l4 4m-4-4v12m0-12h12m0 24l-4-4m4 4l-4-4m4 4H6m34 0l-4 4m4-4l-4-4m4 4v12m0-12h12"
                />
              </svg>
              <div className="flex text-sm text-gray-600 ">
                <span>Drag and drop or </span>{" "}
                <span className="font-medium text-indigo-600 hover:text-indigo-500">
                  browse
                </span>
              </div>
            </div>
          </div>
        </div>
        {uploadedFile && (
          <div className="text-center text-green-500">
            <p>{uploadedFile.name} uploaded!</p>
          </div>
        )}
        {uploadStatus && (
          <div className="text-center text-red-500">
            <p>{uploadStatus}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
