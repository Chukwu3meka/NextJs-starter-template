"use client";

import Home from "./Home";

import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { ManagerContainerProps } from "interfaces/components/home.interfaces";
import { RootState } from "interfaces/redux-store/store.interface";

const ManagerContainer = (props: ManagerContainerProps) => {
  const [deviceWidth, setDeviceWidth] = useState(0),
    [slidesToShow, setSlidesToShow] = useState(0);

  useEffect(() => {
    setDeviceWidth(props.deviceWidth!);
  }, [props.deviceWidth]);

  return <Home />;
};

const mapStateToProps = (state: RootState) => ({ deviceWidth: state.layout.width }),
  mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ManagerContainer);
