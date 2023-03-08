import { useState } from "react";
import randomTerm from "../utils/randomTerms";
import Spinner from "./Spinner";
import DataLists from "./DataLists";
import useSWR from "swr";
import axios from "axios";

const Input = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState(randomTerm());

  const DICTIONARY_KEY = import.meta.env.VITE_REACT_APP_DICTIONARY_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(text);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const API_URL = `https://dictionaryapi.com/api/v3/references/learners/json/${data}?key=${DICTIONARY_KEY}`;

  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data[0]);

  const { data: results, error, isLoading } = useSWR(API_URL, fetcher);

  return (
    <section className="mt-6 mx-auto font-mono w-4/5 lg:w-3/6">
      <form
        onSubmit={handleSubmit}
        action="submit"
        className="flex w-full gap-2 justify-center"
      >
        <input
          value={text}
          onChange={handleChange}
          type="text"
          className="border-green-600 border-[1px] rounded-md p-2 outline-none md:flex-1"
        />
        <button className="bg-green-600 text-white p-2 rounded-md">
          Search
        </button>
      </form>

      {isLoading ? <Spinner /> : results && <DataLists results={results} />}

      {error && <div className="font-bold text-center">{error}</div>}
    </section>
  );
};

export default Input;
