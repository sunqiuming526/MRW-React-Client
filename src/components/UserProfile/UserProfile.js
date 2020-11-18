import React from "react";

const UserProfile = ({user}) => {
  return (
    <div id="profile">
      <h5 className="mb-3">User Profile</h5>
      <div className="row">
        <div className="col-md-6">
          <h6>Username</h6>
          <p>
            {user.username}
          </p>
          <h6>Email</h6>
          <p>
            {user.email}
          </p>
          <h6>Role</h6>
          <p>
            {user.role}
          </p>
        </div>
        <div className="col-md-6">
          <h6>Recent Comments</h6>
          <hr/>
          <h6>Recent Collections</h6>
        </div>

      </div>
    </div>
  )
}

export default UserProfile
