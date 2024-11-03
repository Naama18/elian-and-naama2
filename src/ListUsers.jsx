import AddBoard from "./AddBoard";

function ListUsers(props) {
  const onlineUsers = JSON.parse(localStorage.getItem("users"));
  return (
    <>
      {onlineUsers.map((user) => (
        <AddBoard user={user} />
      ))}
    </>
  );
}
export default ListUsers;
