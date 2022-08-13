import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const comp = (a, b) => {
  if (a.accuracy < b.accuracy) return -1;
  if (a.accuracy > b.accuracy) return 1;

  return 0;
};

const fetchClassificationData = async () => {
  const res = await axios.get(
    "http://127.0.0.1:8000/api/classification-list/audio/"
  );

  return res.data.sort(comp);
};

const AudioCards = () => {
  const [audioData, setAudioData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClassificationData()
      .then((data) => {
        setAudioData(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-wrap content-center flex-col justify-center p-5 bg-gray-200">
      <span className="text-2xl text-center p-4 bg-blue-700 w-1/3 mx-auto text-white rounded-lg mb-5">
        Audio Annotations
      </span>
      {loading ? (
        <div className="flex flex-col justify-center items-center">
          Loading...
        </div>
      ) : (
        <>
          <div className="mx-auto"></div>
          <div className="grid grid-cols-3 gap-5">
            {audioData.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AudioCards;
