import React, { useEffect } from "react";
import { Card, Table, Badge } from "react-bootstrap";
import avatar1 from "./../../../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../../../assets/img/avatars/avatar-5.jpg";
import { useQuery } from "react-query";
import useAuth from "../../../../hooks/useAuth";
import { useTable } from "react-table";
import axios from "axios";
const UserList = () => {
  const { user } = useAuth();
  // const queryClient = new QueryClient();

  // const { isLoading, list_data } = useQuery("users_list", () => {
  //   return axios.get("http://localhost/semaapi/public/api/list_users", {
  //     account_id: user.account_id,
  //   });
  // });

  useEffect(() => {
    async function getUsers() {
      try {
        const users = await axios.get(
          "http://localhost/semaapi/public/api/list_users",
          { account_id: user.account_id }
        );

        console.log("List users: ", users);
      } catch (e) {
        console.log("List users: ", e);
      }
    }
    getUsers();
  });

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
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
export default UserList;
