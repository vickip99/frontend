import { useState } from "react";
import { Bowler } from "../types/Bowler";
function BowlersList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);
  const fetchBowlerData = asyn () => {
    const rsp = await fetch('http://localhost:5081/api/Bowling')
    const f = await rsp.json(); 
    setBowlerData(f);
;  }

fetchBowlerData();

  return (
    <>
      <br></br>
      <div className="row">
        <h4 className="text-center">
          Here's all the information for the Bowlers in our Database
        </h4>
        <br></br>
        <br></br>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>BowlerLastName</th>
            <th>BowlerFirstName</th>
            <th>BowlerMiddleInit</th>
            <th>BowlerAddress</th>
            <th>BowlerCity</th>
            <th>BowlerState</th>
            <th>BowlerZip</th>
            <th>BowlerPhoneNumber</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((f) => (
            <tr key={f.bowlerId}>
              <td>{f.bowlerLastName}</td>
              <td>{f.bowlerFirstName}</td>
              <td>{f.bowlerMiddleInit}</td>
              <td>{f.bolwerAddress}</td>
              <td>{f.bowlerCity}</td>
              <td>{f.bowlerState}</td>
              <td>{f.bowlerZip}</td>
              <td>{f.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlersList;
