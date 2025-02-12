import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  // const { doctors } = useContext();

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return <div></div>;
};
export default Appointment;
