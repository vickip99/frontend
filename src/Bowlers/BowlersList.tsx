function BowlersList() {
  return (
    <>
      <div className="row">
        <h4 className="text-center">
          Here's all the information for the Bowlers in our Database
        </h4>
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
        <tbody></tbody>
      </table>
    </>
  );
}

export default BowlersList;
