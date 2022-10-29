import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/UserSlice";
const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of USers</h2>
      {user.loading && <div>laoding...</div>}
      {!user.loading && user.error ? <div>Error:{user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <div>
          {user.users.map((user) => (
            <>
              <card>
                <h6 key={user.id}>{user.title}</h6>
                <p>price:{user.price}</p>
                <img
                  src={user.image}
                  alt={user.title}
                  style={{ width: "100px", height: "100px" }}
                />
              </card>
            </>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default UserView;
