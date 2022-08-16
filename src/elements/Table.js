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

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

            
  td,
  th {
    border: none;
  }
  td:nth-child(2), th:nth-child(2) {
    width: 70%;
  }
  /* td,
  th {
    border: 1px solid;
  } */


  td {
    padding: 5px 10px;
  }

//   tbody tr {
//     :nth-of-type(odd) {
//       background-color: #efefef;
//     }
//     :hover {
//       background-color: lightpink;
//     }
//   }
  thead th {
    border-bottom: 1px solid rgba(0,0,0,0.3);
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
export default ({ data }) => (
  <TableMarkup titles={Object.keys(data[1])} data={data} />
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
