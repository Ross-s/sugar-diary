"use client";

import { UserButton, useStackApp } from "@stackframe/stack";
import { Settings } from "lucide-react";
import Link from "next/link";

export function Nav() {
  const stack = useStackApp();
  const user = stack.useUser();

  return (
    <>
      <div className="navbar dark:bg-[#0a0a0a] shadow-sm">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" href="/">
            Sugar Diary
          </Link>
        </div>
        <div className="flex gap-2">
          <UserButton
            showUserInfo={true}
            extraItems={[
              {
                text: "Settings",
                icon: <Settings width={20} height={20} />,
                onClick: () => {
                  console.log("Settings clicked");
                },
              },
            ]}
          />
        </div>
      </div>
      <div className="divider m-0" />
    </>
  );
}
