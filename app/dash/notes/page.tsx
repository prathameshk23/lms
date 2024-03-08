import { addNotes } from "@/app/action";
import { FolderArchive, FolderPlus, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col px-24 py-6">
      <div className="">
        <p className="font-bold text-lg p-3">Notes</p>
        <hr></hr>
        <div className="bg-white rounded-md p-3 px-5">
          <p className="font-bold p-3"> Recent Folder </p>
          <div className="flex gap-3">
            <div className="bg-neutral-950 text-white p-3 w-52 rounded-md">
              <div className="right-0 justify-items-end">
                <MoreHorizontal />
              </div>

              <div className="p-1">
                <FolderArchive />
              </div>
              <p className="font-semibold">Movie Reviews</p>
            </div>
            <button>
              <div className="bg-neutral-950 text-white p-3 w-52 rounded-md">
                <Link href="notes/new">
                  <form method="post">
                    {/* <Link href="/dash/notes/asdkjas"> */}
                    <div className="right-0 justify-items-end">
                      <MoreHorizontal />
                    </div>

                    <div className="p-1">
                      <FolderPlus />
                    </div>
                    <button type="submit" className="font-semibold">
                      Add Notes
                    </button>
                  </form>
                </Link>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
