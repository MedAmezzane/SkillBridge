import { LoaderCircle } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <LoaderCircle className="loading__spinner" />
      <span className="loading__text">Loading...</span>
    </div>
  );
};

export default Loading;