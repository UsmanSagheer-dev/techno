import React from "react";
import './icon.css'
export default function Socialicon({link, icon, styles  }) {
  return (
    <>
      <div className="icons">
        <a href={link} style={styles}>{icon}</a>
    
      </div>
    </>
  );
}
