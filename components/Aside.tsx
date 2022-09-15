import Image from "next/image";
import React from "react";

function Aside() {
  return (
    <aside>
      <div className="flex mb-14">
        <div className="mr-0.875rem mb-0 w-14 h-14">
          <Image
            src="/images/posts/profile.jpeg"
            alt="Picture of the author"
            width="100%"
            height="100%"
            className="rounded-full"
          />
        </div>

        <p className="max-w-310px font-bold">Personal blog by Yang Hansol.</p>
      </div>
    </aside>
  );
}

export default Aside;
