const DynamicRoute = async (props) => {
  const userName = await props.params;
  console.log(userName);
  return <h1>Welcomes to {userName.usernames} Page</h1>;
};

export default DynamicRoute;
