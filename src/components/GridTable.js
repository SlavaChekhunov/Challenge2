import { Link } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import GetData from "./GetData";

const columns = [
  { field: "name", headerName: "Name", width: 300 },
  {
    field: "html_url",
    headerName: "GitHub_URL",
    width: 700,
    renderCell: (params) => (
      <Link href={params.value} target="_blank">
        {params.value}
      </Link>
    ),
  },
  {
    field: "download_url",
    headerName: "Download URL",
    width: 800,
    cellStyle: {
      margin: "30px",
    },
    renderCell: (params) => (
      <Link href={params.value} target="_blank">
        {params.value}
      </Link>
    ),
  },
];

const TableStyles = {
  height: "1100px",
};

const GridTable = () => {
  const [repo] = GetData();


  const data = repo.map((item) => ({
    name: item.name,
    html_url: item.html_url,
    download_url: item.download_url,
  }));

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row.name}
        rows={data}
        columns={columns}
        sx={TableStyles}
        checkboxSelection
        pagination
        pageSize={84}
      />
    </div>
  );

};

export default GridTable;
