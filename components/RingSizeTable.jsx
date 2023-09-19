// components/Table.js

const RingSizeTable = () => {
  const tableData = [
    {
      usa: "3",
      diameter: "14.1",
      europe: "44",
      ukAustralia: "F",
    },
    {
      usa: "3.25",
      diameter: "14.3",
      europe: "45",
      ukAustralia: "F1/2",
    },
    {
      usa: "3.5",
      diameter: "14.3",
      europe: "45.5",
      ukAustralia: "G",
    },
    {
      usa: "3.75",
      diameter: "14.7",
      europe: "46",
      ukAustralia: "G1/2",
    },
    {
      usa: "4",
      diameter: "14.9",
      europe: "47",
      ukAustralia: "H",
    },
    {
      usa: "4.25",
      diameter: "15.1",
      europe: "47.5",
      ukAustralia: "H1/2",
    },
    {
      usa: "4.5",
      diameter: "15.3",
      europe: "48",
      ukAustralia: "I",
    },
    {
      usa: "4.75",
      diameter: "15.5",
      europe: "48.5",
      ukAustralia: "J",
    },
    {
      usa: "5",
      diameter: "15.7",
      europe: "49",
      ukAustralia: "J1/2",
    },
    {
      usa: "5.25",
      diameter: "15.9",
      europe: "50",
      ukAustralia: "K",
    },
    {
      usa: "5.5",
      diameter: "16.1",
      europe: "50.5",
      ukAustralia: "K1/2",
    },
    {
      usa: "5.75",
      diameter: "16.3",
      europe: "51",
      ukAustralia: "L",
    },
    {
      usa: "6",
      diameter: "16.5",
      europe: "52",
      ukAustralia: "L1/2",
    },
    {
      usa: "6.25",
      diameter: "16.7",
      europe: "52.5",
      ukAustralia: "M",
    },
    {
      usa: "6.5",
      diameter: "16.9",
      europe: "53",
      ukAustralia: "M1/2",
    },
    {
      usa: "6.75",
      diameter: "17.1",
      europe: "54",
      ukAustralia: "N",
    },
    {
      usa: "7",
      diameter: "17.3",
      europe: "54.5",
      ukAustralia: "N1/2",
    },
    {
      usa: "7.25",
      diameter: "17.6",
      europe: "55",
      ukAustralia: "O",
    },
    {
      usa: "7.5",
      diameter: "17.8",
      europe: "56",
      ukAustralia: "O1/2",
    },
    {
      usa: "7.75",
      diameter: "18",
      europe: "56.5",
      ukAustralia: "P",
    },
    {
      usa: "8",
      diameter: "18.2",
      europe: "57",
      ukAustralia: "P1/2",
    },
    {
      usa: "8.25",
      diameter: "18.4",
      europe: "58",
      ukAustralia: "Q",
    },
    {
      usa: "8.5",
      diameter: "18.6",
      europe: "58.5",
      ukAustralia: "Q1/2",
    },
    {
      usa: "8.75",
      diameter: "18.8",
      europe: "59",
      ukAustralia: "R",
    },
    {
      usa: "9",
      diameter: "19",
      europe: "60",
      ukAustralia: "R1/2",
    },
    {
      usa: "9.25",
      diameter: "19.2",
      europe: "60.5",
      ukAustralia: "S",
    },
    {
      usa: "9.5",
      diameter: "19.4",
      europe: "61",
      ukAustralia: "S1/2",
    },
    {
      usa: "9.75",
      diameter: "19.6",
      europe: "61.5",
      ukAustralia: "T",
    },
    {
      usa: "10",
      diameter: "19.8",
      europe: "62",
      ukAustralia: "T1/2",
    },
    {
      usa: "10.25",
      diameter: "20",
      europe: "63",
      ukAustralia: "U",
    },
    {
      usa: "10.5",
      diameter: "20.2",
      europe: "63.5",
      ukAustralia: "U1/2",
    },
    {
      usa: "10.75",
      diameter: "20.4",
      europe: "64",
      ukAustralia: "V",
    },
    {
      usa: "11",
      diameter: "20.6",
      europe: "65",
      ukAustralia: "V1/2",
    },
    {
      usa: "11.25",
      diameter: "20.9",
      europe: "65.5",
      ukAustralia: "W",
    },
    {
      usa: "11.5",
      diameter: "21.1",
      europe: "66",
      ukAustralia: "W1/2",
    },
    {
      usa: "11.75",
      diameter: "21.3",
      europe: "67",
      ukAustralia: "X",
    },
    {
      usa: "12",
      diameter: "21.5",
      europe: "67.5",
      ukAustralia: "X1/2",
    },
    {
      usa: "12.25",
      diameter: "21.7",
      europe: "68",
      ukAustralia: "Y",
    },
    {
      usa: "12.5",
      diameter: "21.9",
      europe: "69",
      ukAustralia: "Z",
    },
    {
      usa: "12.75",
      diameter: "22.1",
      europe: "69.5",
      ukAustralia: "Z1/2",
    },
    {
      usa: "13",
      diameter: "22.3",
      europe: "70",
      ukAustralia: "-",
    },
    {
      usa: "13.25",
      diameter: "22.5",
      europe: "71",
      ukAustralia: "Z1",
    },
    {
      usa: "13.5",
      diameter: "22.7",
      europe: "71.5",
      ukAustralia: "-",
    },
    {
      usa: "13.75",
      diameter: "22.9",
      europe: "72",
      ukAustralia: "Z2",
    },
    {
      usa: "14",
      diameter: "23.1",
      europe: "72.5",
      ukAustralia: "Z3",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>USA & Canada</th>
          <th>Diameter (mm)</th>
          <th>Europe</th>
          <th>UK & Australia</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index} className="text-center lg:text-lg">
            <td>{row.usa}</td>
            <td>{row.diameter}</td>
            <td>{row.europe}</td>
            <td>{row.ukAustralia}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RingSizeTable;
