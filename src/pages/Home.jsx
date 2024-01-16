import React, { useEffect, useState } from "react";
import WorksIndex from "../components/WorksIndex";
import WorkThumbnail from "../components/WorksThumbnail";
export default function Home() {
  return (
    <>
      <WorksIndex />
      <WorkThumbnail />
    </>
  );
}
