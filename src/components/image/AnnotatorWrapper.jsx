import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

// Label Studio
import LabelStudio from "@heartexlabs/label-studio";
import "@heartexlabs/label-studio/build/static/css/main.css";

// Functions
const fetchClassificationData = async (id) => {
  const res = await axios.get(
    `http://127.0.0.1:8000/api/classification-detail/${id}/`
  );

  res.data.labels = res.data.labels.split(",");
  res.data.annotation = JSON.parse(res.data.annotation);

  console.log("FETCH CLASSIFICATION DATA - ", res.data);
  return res.data;
};

const generateConfig = (labels) => {
  const config = `
  <View>
    <Image name="image" value="$image"></Image>
    <RectangleLabels name="tag" toName="image">
    ${(function labelsRender() {
      let ret = "";
      for (let i = 0; i < labels.length; i++) {
        ret += `<Label value="${labels[i]}"></Label>`;
      }

      return ret;
    })()}
    </RectangleLabels>
  </View>
  `;

  return config;
};

const Wrapper = (props) => {
  const navigate = useNavigate();
  const rootRef = useRef();
  const lsfRef = useRef();
  const [data, setData] = useState();

  useEffect(() => {
    fetchClassificationData(props.id)
      .then((data) => {
        const config = generateConfig(data.labels);
        data.config = config;

        return data;
      })
      .then((data) => {
        setData(data);

        // Buildinf a new label studio instance
        if (rootRef.current) {
          lsfRef.current = new LabelStudio(rootRef.current, {
            config: data.config,

            interfaces: [
              "panel",
              "update",
              "submit",
              "controls",
              "topbar",
              "instruction",
              "side-column",
              "annotations:history",
              "annotations:tabs",
              "annotations:menu",
              "annotations:current",
              "annotations:delete",
              "predictions:tabs",
              "predictions:menu",
              "edit-history",
            ],

            user: {
              pk: 1,
              firstName: data.user.split(" ")[0],
              lastName: data.user.split(" ")[1],
            },

            task: {
              annotations: [],
              predictions: [],
              id: data.id,
              data: {
                image: data.urls,
              },
            },

            onLabelStudioLoad: function (ls) {
              var c = ls.annotationStore.addAnnotation({
                userGenerate: true,
              });
              ls.annotationStore.selectAnnotation(c.id);
            },

            onSubmitAnnotation: async function (ls, annotationData) {
              const annotation = annotationData.serializeAnnotation();
              console.log(annotation);
              if (annotation.length > 0) {
                axios
                  .put(
                    `http://127.0.0.1:8000/api/classification-update/${data.id}/`,
                    {
                      ...data,
                      validated: true,
                      accuracy: 1,
                      labels: data.labels.join(","),
                      annotation: JSON.stringify(annotation),
                    }
                  )
                  .then(() => {
                    navigate(-1);
                  })
                  .catch((error) => {
                    toast.error("Annotation not saved");
                    throw error;
                  });
              }
            },
          });
        }
      })
      .catch((err) => {
        console.log("ERR - ", err);
      });
  }, [navigate, props.id]);

  return (
    <>
      <div>
        <Toaster />
      </div>
      {data ? (
        <div className="label-studio-root" ref={rootRef}></div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </>
  );
};

export default Wrapper;
