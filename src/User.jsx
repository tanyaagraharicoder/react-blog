function User(props) {
  console.log(props.user.age);
  console.log(props.user.name);
  console.log(props.user.location);
  console.log(props.user.profession);

  return (
    <div>
      <h1>{props.user.name}</h1>
      <h1>{props.user.age}</h1>
      <h1>User Component</h1>
      <h4>{props.user.location}</h4>
      <h4>{props.user.profession}</h4>
    </div>
  );
}
export default User;
