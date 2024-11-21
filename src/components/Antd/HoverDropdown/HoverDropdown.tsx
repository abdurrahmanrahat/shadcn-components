//? dropdown is made by antd

import { Button, Dropdown, Space } from "antd";
import { useState } from "react";

const HoverDropdown = () => {
  const [toggleOutput, setToggleOutput] = useState<string>("");

  const items = [
    {
      label: "Code",
      key: "code",
      icon: <AiFillCode color="#34AC90" />,
    },
    {
      label: "Test",
      key: "test",
      icon: <TbTestPipeOff color="#34AC90" />,
    },
  ];

  const handleDropDownMenuClick = (e) => {
    setToggleOutput(e.key);
  };

  const menuProps = {
    items,
    onClick: handleDropDownMenuClick,
  };

  return (
    <Dropdown menu={menuProps}>
      <Button
        type="default"
        ghost
        shape="default"
        size={"small"}
        className="inline-flex items-center text-sm"
      >
        <Space className="flex flex-row items-center justify-center">
          <p className="text-sm"> {toggleOutput}</p>
          <FaChevronDown size={12} />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default HoverDropdown;
