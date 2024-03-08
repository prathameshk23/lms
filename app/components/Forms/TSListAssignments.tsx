"use client";

import { useQuery } from "@tanstack/react-query";
import { getAssignments, getCourseCreator } from "@/app/utils/action";
import Link from "next/link";
import { useSession } from "next-auth/react";
export default function TeachListAssignments(props: { courseId: string }) {
  const { data: assignments, isLoading } = useQuery({
    queryKey: ["assignment"],
    queryFn: async () => {
      return getAssignments(props.courseId);
    },
  });

  return (
    <div className="p-5">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        assignments?.map((assignment) => (
          <Link
            href={`/dash/class/${props.courseId}/assignments/${assignment.id}`}
            key={assignment.id}
          >
            <div
              key={assignment.id}
              className="bg-violet-400 flex p-5  rounded-md justify-between"
            >
              <div className="flex gap-3">{assignment.title}</div>
              <div className="flex gap-3">
                <p>{assignment.dueDate}</p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
