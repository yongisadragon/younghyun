import React, { useEffect, useState } from "react";
import WorksIndex from "../../components/worksIndex/WorksIndex";
import WorksThumbnail from "../../components/worksThumbnail/WorksThumbnail";
export default function Home() {
  return (
    <div>
      <WorksIndex />
      <WorksThumbnail />
      <div style={{ height: "100vh" }}></div>
    </div>
  );
}
