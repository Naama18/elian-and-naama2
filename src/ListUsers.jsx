import AddBoard from "./AddBoard";

function ListUsers(props) {
  console.log("props.users: ", props.users);
  return (
    <>
      {props.users.map((user, index) => (
        <AddBoard
          onTurnChange={props.onTurnChange}
          key={user}
          user={user}
          disabled={user !== props.currentUserName}
          setUsers={props.setUsers}
          users={props.users}
        />
      ))}
    </>
  );
}
export default ListUsers;
