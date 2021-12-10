import Image from "next/image";
import React from "react";

function Aside() {
  return (
    <aside>
      <div style={{ display: "flex", marginBottom: "3.5rem" }}>
        {/* <Image
            src="/images/posts/img7.jpg"
            alt="Picture of the author"
            width={50}
            height={50}
            
          /> */}
        <img
          src="/images/posts/img7.jpg"
          alt="Picture of the author"
          style={{
            marginRight: "0.875rem",
            marginBottom: "0",
            borderRadius: "50%",
            width: "3.5rem",
            height: "3.5rem",
          }}
        />

        <p style={{ maxWidth: "310px" }}>
          Personal blog by Yang Hansol.
          <br />I explain with words and code.
        </p>
      </div>
    </aside>
  );
}

export default Aside;
