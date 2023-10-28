import "./header.scss";
import { client } from "../../sanity";
import { useState } from "react";
import { z } from "zod";
import type { Result, Welcome } from "../../types/post.types";

const HeaderComponent = () => {
    return (
    <div className="header">
      <h1>M</h1>
      <a href="/projects">Projects</a>
    </div>
  );
};

export default HeaderComponent;
