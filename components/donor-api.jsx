import React, { useState, useEffect } from "react";
import NumberFormat from 'react-number-format';

function App() {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});

  async function fetchData() {
    const res = await fetch("https://advancement.umd.edu/gps/api/api.php?section=dashboard&action=get_crisis_funds_summary&apiKey=KEAChiJl2gh8fpdBD5YOp7ynhRpou9wrJllCfhQv");
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data.summary)

  return (
    <div>
      {/* <span>{JSON.stringify(data)}</span> */}

      {Object.keys(data).map((item, i) => (
        <div key={i}>
          <p className="lrg api no-marg-b">
            <strong><NumberFormat value={data[item].donors_num} displayType={'text'} thousandSeparator={true} /> Donors</strong>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <strong><NumberFormat value={data[item].gifts_num} displayType={'text'} thousandSeparator={true} /> Gifts</strong>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <strong><NumberFormat value={data[item].total_raised} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={0} /> Raised</strong>
          </p>          
        </div>
      ))}

      {/* <hr />
      <span>Has error: {JSON.stringify(hasError)}</span> */}
    </div>
  );
};
export default App

