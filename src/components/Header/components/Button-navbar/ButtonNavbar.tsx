import React, { FC } from "react";
import { Button } from "antd";
import { INavbar } from "../../../../types/IHeader";

export const ButtonNavbar: FC<INavbar> = (props: INavbar) => {
  return (
    <Button
      type="link"
      onClick={props.toggle}
      size="large"
    >
      {props.title}
    </Button>
  );
};
