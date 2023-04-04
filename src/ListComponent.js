const ListComponent = ({ user,  index }) => {
  return (
    <li key={user.id}>

        <div className="user">
            <img src={user.avatar_url} alt={`${user.login} avatar`} />
            <br /><br />
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.login}
            </a>
        </div>
    </li>
  )
}

export default ListComponent