function UserCard(props)  {
    return (
        <div className="h-14 border-r-2 border-b-2 pr-2 border-fuchsia-500">
            <h1 className=" ">name: {props.name}</h1>
            <h1 className="border-r-fuchsia-500">id: {props.id}</h1>
        </div>
    )
}
export default UserCard