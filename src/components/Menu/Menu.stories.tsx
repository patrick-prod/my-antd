import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Menu } from "../../index";
import { MenuProps } from "./Menu";

const testProps: MenuProps = {
    defaultIdx: "0",
    className: "foo",
    onSelect: (index) => console.log(index),
};

export const defaultMenu = () => (
    <>
        <Menu
            {...testProps}
            onSelect={(index) => {
                action(`select ${index} menu`);
            }}
        >
            <Menu.Item>Item default</Menu.Item>
            <Menu.Item disabled>Item disabled</Menu.Item>
            <Menu.SubMenu title={"SubMenu1"}>
                <Menu.Item>SubMenu-item-1</Menu.Item>
                <Menu.Item>SubMenu-item-2</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item>Item common</Menu.Item>
        </Menu>
    </>
);

const verticalMenu = () => (
    <>
        <Menu
            {...testProps}
            mode="vertical"
            onSelect={(index) => {
                action(`select ${index} menu`);
            }}
        >
            <Menu.Item>Item default</Menu.Item>
            <Menu.Item disabled>Item disabled</Menu.Item>
            <Menu.SubMenu title={"SubMenu1"}>
                <Menu.Item>SubMenu-item-1</Menu.Item>
                <Menu.Item>SubMenu-item-2</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item>Item common</Menu.Item>
        </Menu>
    </>
);

storiesOf("Menu", module)
    .add("horizontal Menu", defaultMenu)
    .add("vertical Menu", verticalMenu);
