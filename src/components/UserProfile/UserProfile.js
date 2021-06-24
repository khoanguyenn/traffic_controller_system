import React, { useEffect, useState, useCallback } from "react";
import UserInfo from "./UserInfo/UserInfo";
import DeviceList from "./DeviceList/DeviceList";
import Layout from "../../layout/Layout";
import * as API from "../../api/apiclient";

const UserProfile = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [deviceList, setDeviceList] = useState({});

  useEffect(() => {
    fetchUserInfoHandler();
  }, []);

  const fetchUserInfoHandler = useCallback(async () => {
    const userInfo = await API.getUserInfo();
    const deviceList = await API.getListDevices();
    setUserInfo(userInfo);
    setDeviceList(deviceList);
  });

  return (
    <Layout>
      <UserInfo userInfo={userInfo}></UserInfo>
      <DeviceList deviceList={deviceList}></DeviceList>
    </Layout>
  );
};

export default UserProfile;
