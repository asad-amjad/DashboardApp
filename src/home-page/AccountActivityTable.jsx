import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const rows = [
  {
    date: "22-02-2022",
    time: "10:00 PM",
    ip_address: "192.162.20.22",
    change_made: "Sucess at first attempt",
    action: "login",
    status: true,
  },
  {
    date: "22-02-2022",
    time: "08:32 AM",
    ip_address: "192.162.20.22",
    change_made: "Disconnection",
    action: "login",
    status: false,
  },
  {
    date: "22-02-2022",
    time: "09:23 PM",
    ip_address: "192.162.20.22",
    change_made: "Sucess at first attempt",
    action: "login",
    status: true,
  },
];

export default function AccountActivityTable() {
  const activeColor = { color: "green" };
  const inActiveColor = { color: "red" };

  const mapList = () =>
    rows.map(({ date, time, ip_address, change_made, action, status }, i) => (
      <TableRow key={i}>
        <TableCell>{date}</TableCell>
        <TableCell style={{ color: "blue" }}>{time}</TableCell>
        <TableCell>{ip_address}</TableCell>
        <TableCell style={status === true ? activeColor : inActiveColor}>
          {change_made}
        </TableCell>
        <TableCell>{action}</TableCell>
      </TableRow>
    ));
  return (
    <TableContainer className="creators-table-container">
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>DATE</strong>
            </TableCell>
            <TableCell>
              <strong>TIME</strong>
            </TableCell>
            <TableCell>
              <strong>IP Address</strong>
            </TableCell>
            <TableCell>
              <strong>CHANGE MADE</strong>
            </TableCell>
            <TableCell>
              <strong>ACTION</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{mapList()}</TableBody>
      </Table>
    </TableContainer>
  );
}
