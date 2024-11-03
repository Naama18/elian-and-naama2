import AddBoard from "./AddBoard";

function ListUsers(props) {
  return (
    <>
      {props.users.map((user, index) => (
        <AddBoard
          onTurnChange={props.onTurnChange}
          key={index}
          user={user}
          disabled={user !== props.currentUserName}
        />
      ))}
    </>
  );
}
export default ListUsers;
