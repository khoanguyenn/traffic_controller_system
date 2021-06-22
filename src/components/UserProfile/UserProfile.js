import React, { useEffect, useState, useCallback } from "react";
import UserInfo from "./UserInfo/UserInfo";
import Layout from "../../layout/Layout";
import * as API from "../../api/apiclient";

const UserProfile = (props) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetchUserInfoHandler();
  }, []);

  const fetchUserInfoHandler = useCallback(async () => {
    const userInfo = await API.getUserInfo();
    setUserInfo(userInfo);
  });

  return (
    <Layout>
      <UserInfo userInfo={userInfo}></UserInfo>
    </Layout>
  );
};

export default UserProfile;
