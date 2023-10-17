import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQl/Queries";

const GetUsers = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      {users?.map((val) => {
        return (
          <>
            <h1>
              {val.firstName} {""} {val.lastName}
            </h1>
            <h4>{val.email}</h4>
          </>
        );
      })}
    </div>
  );
};

export default GetUsers;
