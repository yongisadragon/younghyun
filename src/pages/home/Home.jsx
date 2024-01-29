import React, { useEffect, useState } from "react";
import WorksIndex from "../../components/worksIndex/WorksIndex";
import WorksThumbnail from "../../components/worksThumbnail/WorksThumbnail";
export default function Home() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div>
      <WorksIndex />
      <WorksThumbnail />
    </div>
  );
}
