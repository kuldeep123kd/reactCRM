import { Checkbox } from '@material-ui/core';
import React from 'react';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';

const Table = () => {

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="table">
      <table>
        <tbody>
          <tr className="table__titles">
            <th>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                defaultChecked
                color="primary"
              />
            </th>
            <th>Last Name</th>
            <th>Company Name</th>
            <th>Job TItle</th>
            <th>Mobile Number</th>
            <th>Busness Phone</th>
            <th>Primary Email</th>
            <th>Status</th>
          </tr>
          <tr className="table__content">
            <td>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                defaultChecked
                color="primary"
              />
              <CreateRoundedIcon style={{color: "#007bff"}} />
            </td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
          </tr>
          <tr className="table__content">
            <td>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                defaultChecked
                color="primary"
              />
              <CreateRoundedIcon style={{color: "#007bff"}} />
            </td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
          </tr>
          <tr className="table__content">
            <td>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                defaultChecked
                color="primary"
              />
              <CreateRoundedIcon style={{color: "#007bff"}} />
            </td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
          </tr>
          <tr className="table__content">
            <td>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                defaultChecked
                color="primary"
              />
              <CreateRoundedIcon style={{color: "#007bff"}} />
            </td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
          </tr>
          <tr className="table__content">
            <td>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                defaultChecked
                color="primary"
              />
              <CreateRoundedIcon style={{color: "#007bff"}} />
            </td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
          </tr>
          <tr className="table__content">
            <td>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                defaultChecked
                color="primary"
              />
              <CreateRoundedIcon style={{color: "#007bff"}} />
            </td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;