import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

import PoemCard from "../components/TextCard";

function YearbookSigned() {
  const [signs, setSigns] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "yearbook"));
    var newSigning = [];

    querySnapshot.forEach((doc) => {
      newSigning.push({ name: doc.data().name, message: doc.data().message });
    });

    setSigns(newSigning);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="flex flex-wrap">
          {signs.map((sign) => (
            <PoemCard title={sign.name} text={sign.message} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default YearbookSigned;
