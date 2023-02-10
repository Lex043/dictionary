import { useEffect } from "react";

const Api = ({ text }) => {
  console.log(text);
  const API_URL =
    "https://dictionaryapi.com/api/v3/references/learners/json/test?key=45051c7e-0440-4739-b993-3b1b35a22d19";
  async function fetchData() {
    const response = await fetch(API_URL);
    const wordData = await response.json();
    console.log(wordData);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return <div>Api</div>;
};

export default Api;
