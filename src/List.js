import ListComponent from "./ListComponent"

const List = ({ users }) => {
  return (
    <>
        <ul>
            {users.map((user, index) => (
            
                <ListComponent key = {user.id} user = {user} index = {index}/>
            ))}
        </ul>
    </>
  )
}

export default List