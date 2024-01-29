// Works.jsx
import React from "react";
import { useParams } from "react-router-dom";
import worksData from "../../data/worksData";

export default function Works() {
  const { workTitle } = useParams();
  const work = worksData.find((work) => work.title === workTitle);
  return (
    <div>
      <div>{work.title.replace("-", " ")}</div>
      <p>{work.year}</p>
      <p>{work.materials}</p>
      <p>
        It has always been our subject of exploration that the nature of objects
        and places changing. Geumho Alver has been used for various purposes,
        from bathhouses to today’s modern spaces. Among them, I paid attention
        to the unique space of bathhouses. Bathhouses were more than just places
        cleaning one’s body; they served as landmarks in the community, where
        neighbors gathered. However, These are gradually disappearing. This
        trend does not signify the disappearance of places for bathing but
        rather the fading of spaces for our interactions. This work aims to
        revive the original purpose and meaning of bathhouses. Among the various
        elements that these places possess, I have focused on the platform and
        the chimney, utilizing my work, the Wood Slab Series, to shape the
        space. Through this work, I seek to reevaluate things that are losing
        their unique meanings as the times chang and hope to rediscover these
        meanings. Also, I aspire to open a window connecting the past, present,
        and future.
      </p>
    </div>
  );
}
