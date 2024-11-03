import AddBoard from "./AddBoard";

function ListUsers(props) {
  const onlineUsers = JSON.parse(localStorage.getItem("users")) || [];
  return (
    <>
      {onlineUsers.map((user, index) => (
        <AddBoard key={index} user={user} />
      ))}
    </>
  );
}
export default ListUsers;
