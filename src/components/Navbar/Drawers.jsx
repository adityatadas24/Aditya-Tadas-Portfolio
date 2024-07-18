// import * as React from "react";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import { useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import "./style.css";
import { IconButton } from "@mui/material";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div >
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer  anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div  className="drawer-div">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>
      </Drawer>
    </div>
  );
}
