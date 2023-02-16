const DataLists = ({ results }) => {
  return (
    <div className="py-4">
      <div className="flex justify-between py-4">
        <h1 className="font-bold">{results.meta && results.meta["id"]}</h1>
        <p>{results.hwi && results.hwi.prs && results.hwi.prs[0]["ipa"]}</p>
      </div>
      <h1 className="font-semibold underline italic pb-4">{results.fl}</h1>
      <div>
        {results.shortdef?.map((def, index) => (
          <div key={index}>
            <p className="py-2">Meaning.</p>
            <li className="pb-4 border-b-[1px] ">{def}</li>
          </div>
        ))}
      </div>
      {!results.fl && (
        <div>
          <h1 className="font-bold">No Definitions found</h1>
          <p>You can search again later or head to the web instead</p>
        </div>
      )}
    </div>
  );
};

export default DataLists;
