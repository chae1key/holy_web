import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 80%;
  caption-side: top;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 20px;
  border-collapse: collapse;
  border-collapse: separate;
  border-spacing: 50px 5px; 

  td,
  th {
    border: none;
  }
  td:nth-child(2), th:nth-child(2) {
    width: 70%;
  }
  td {
    padding: 5px 10px;
  }

  thead th {
    border-bottom: 1px solid rgba(0,0,0,0.3);
    color: grey;
  }
`;
export default ({ data }) => (
  <TableMarkup titles={Object.keys(data[0])} data={data} />
);

const TableMarkup = ({ titles, data }) => (
  <StyledTable>
    {/* <caption>Culture about contries</caption> */}
    <colgroup>
      <col />
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {titles.map((title, index) => (
            <td key={index}>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);
