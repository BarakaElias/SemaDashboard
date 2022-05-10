import React from "react";
import { Card, Table, Badge } from "react-bootstrap";
import avatar1 from "./../../../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../../../assets/img/avatars/avatar-5.jpg";

import { useTable } from "react-table";
const UserList = () => {
  const data = React.useMemo(() => [
    {
      avatar: "",
      name: "Angerlica Ramos",
      department: "The Wiz",
      email: "angelica@ramos.com",
      status: "active",
    },
    {
      avatar: "",
      name: "Ashton Cox",
      department: "Levits Furniture",
      email: "ashton@cox.com",
      status: "active",
    },
    {
      avatar: "",
      name: "Brenden Wagner",
      department: "The Wiz",
      email: "brenden@wagner.com",
      status: "Inactive",
    },
    {
      avatar: "",
      name: "Charde Marshall",
      department: "Price Savers",
      email: "charde@marshall.com",
      status: "Active",
    },
    {
      avatar: "",
      name: "Doris Wilder",
      department: "Red Robin stores",
      email: "doris@wilder.com",
      status: "Inactive",
    },
    {
      avatar: "",
      name: "Fiona Green",
      department: "The Sample",
      email: "fiona@green.com",
      status: "Inactive",
    },
    {
      avatar: "",
      name: "Garrett Winters",
      department: "Red Robin Stores",
      email: "garrett@winterscom",
      status: "Active",
    },
    {
      avatar: "",
      name: "Gavin cortez",
      department: "Red Robin Stores",
      email: "gavin@cortez.com",
      status: "Active",
    },
    {
      avatar: "",
      name: "Haley Kennedy",
      department: "Helping Hand",
      email: "haley@kennedy.com",
      status: "Deleted",
    },
  ]);

  const columns = React.useMemo(() => [
    {
      Header: "#",
      accessor: "avatar",
    },
    {
      Header: "Name",
      accessor: "name",
      Cell: ({ value, row }) => {
        console.log(
          "name cell",
          row.original.first_name + row.original.last_name
        );
        return <p>{value}</p>;
      },
    },
    {
      Header: "Department",
      accessor: "department",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ value, row }) => {
        switch (value) {
          case "active":
            return <Badge bg="success">Active</Badge>;
          case "Inactive":
            return <Badge bg="warning">Inactive</Badge>;
          default:
            return <Badge bg="light">Unkown</Badge>;
        }
      },
    },
  ]);

  const userTable = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    userTable;

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5" className="mb-0">
          All Users
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Table {...getTableProps()} className="mb-0">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
            {/* <tr>
              <td>
                <img
                  src={avatar3}
                  width="32"
                  height="32"
                  className="rounded-circle my-n1"
                  alt="Avatar"
                />
              </td>
              <td>Angelica Ramos</td>
              <td>The Wiz</td>
              <td>angelica@ramos.com</td>
              <td>
                <Badge bg="success">Active</Badge>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={avatar1}
                  width="32"
                  height="32"
                  className="rounded-circle my-n1"
                  alt="Avatar"
                />
              </td>
              <td>Ashton Cox</td>
              <td>Levitz Furniture</td>
              <td>ashton@cox.com</td>
              <td>
                <Badge bg="success">Active</Badge>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={avatar4}
                  width="32"
                  height="32"
                  className="rounded-circle my-n1"
                  alt="Avatar"
                />
              </td>
              <td>Brenden Wagner</td>
              <td>The Wiz</td>
              <td>brenden@wagner.com</td>
              <td>
                <Badge bg="warning">Inactive</Badge>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={avatar2}
                  width="32"
                  height="32"
                  className="rounded-circle my-n1"
                  alt="Avatar"
                />
              </td>
              <td>Charde Marshall</td>
              <td>Price Savers</td>
              <td>charde@marshall.com</td>
              <td>
                <Badge bg="success">Active</Badge>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={avatar3}
                  width="32"
                  height="32"
                  className="rounded-circle my-n1"
                  alt="Avatar"
                />
              </td>
              <td>Doris Wilder</td>
              <td>Red Robin Stores</td>
              <td>doris@wilder.com</td>
              <td>
                <Badge bg="warning">Inactive</Badge>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={avatar4}
                  width="32"
                  height="32"
                  className="rounded-circle my-n1"
                  alt="Avatar"
                />
              </td>
              <td>Fiona Green</td>
              <td>The Sample</td>
              <td>fiona@green.com</td>
              <td>
                <Badge bg="warning">Inactive</Badge>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={avatar1}
                  width="32"
                  height="32"
                  className="rounded-circle my-n1"
                  alt="Avatar"
                />
              </td>
              <td>Garrett Winters</td>
              <td>Good Guys</td>
              <td>garrett@winters.com</td>
              <td>
                <Badge bg="success">Active</Badge>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={avatar5}
                  width="32"
                  height="32"
                  className="rounded-circle my-n1"
                  alt="Avatar"
                />
              </td>
              <td>Gavin Cortez</td>
              <td>Red Robin Stores</td>
              <td>gavin@cortez.com</td>
              <td>
                <Badge bg="success">Active</Badge>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={avatar2}
                  width="32"
                  height="32"
                  className="rounded-circle my-n1"
                  alt="Avatar"
                />
              </td>
              <td>Haley Kennedy</td>
              <td>Helping Hand</td>
              <td>haley@kennedy.com</td>
              <td>
                <Badge bg="danger">Deleted</Badge>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={avatar5}
                  width="32"
                  height="32"
                  className="rounded-circle my-n1"
                  alt="Avatar"
                />
              </td>
              <td>Howard Hatfield</td>
              <td>Price Savers</td>
              <td>howard@hatfield.com</td>
              <td>
                <Badge bg="warning">Inactive</Badge>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={avatar1}
                  width="32"
                  height="32"
                  className="rounded-circle my-n1"
                  alt="Avatar"
                />
              </td>
              <td>Jena Gaines</td>
              <td>Helping Hand</td>
              <td>jena@gaines.com</td>
              <td>
                <Badge bg="success">Active</Badge>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={avatar4}
                  width="32"
                  height="32"
                  className="rounded-circle my-n1"
                  alt="Avatar"
                />
              </td>
              <td>Jennifer Chang</td>
              <td>Helping Hand</td>
              <td>jennifer@chang.com</td>
              <td>
                <Badge bg="warning">Inactive</Badge>
              </td>
            </tr> */}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
export default UserList;
