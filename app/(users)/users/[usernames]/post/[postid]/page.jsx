"use client";

import { use } from "react";

const SingleProfilePage = (props) => {
  const user = use(props.params);
  console.log(user);

  return (
    <h1>
      Single profile page: {user.usernames}, postId : {user.postid}
    </h1>
  );
};

export default SingleProfilePage;
