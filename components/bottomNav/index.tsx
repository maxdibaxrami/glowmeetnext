'use client'

import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { FireIcon, ChatIcon, ProfileIcon } from "./icons";

const BottomNav = () => {
 

  return (
    <div className="flex w-full mb-4 justify-center flex-col">
      <Tabs size="lg" className="justify-center" aria-label="Options" color="primary" variant="solid">
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <FireIcon/>
            </div>
          }
        />
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              <ChatIcon/>
            </div>
          }
        />
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <ProfileIcon/>
            </div>
          }
        />
      </Tabs>
    </div>  
  );
}

export {BottomNav}