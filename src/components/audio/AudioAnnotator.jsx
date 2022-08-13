import React from "react";

import { useParams } from "react-router-dom";

// Wrapper
import AnnotatorWrapper from "./AnnotatorWrapper";

const AudioAnnotator = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col flex-wrap justify-center">
      <span className="text-xl text-black mx-auto my-3">
        SurgiNXT | Audio Annotation
      </span>
      <div>
        <AnnotatorWrapper id={id} />
      </div>
    </div>
  );
};

export default AudioAnnotator;
