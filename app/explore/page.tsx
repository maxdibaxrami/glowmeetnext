'use client'

import { title } from "@/components/primitives";
import Explore from "@/components/explore";
import ExploreImageSwaper from "@/components/explore/exploreSwiper";
import { UserCard } from "@/components/explore/userCard";
export default function ExplorePage() {
  return (
    <div style={{maxWidth:"90vw"}}>
      <UserCard/>
    </div>
  );
}
