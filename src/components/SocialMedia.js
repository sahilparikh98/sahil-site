import React from "react";

export default function SocialMedia(props) {
  return Object.keys(props.socials).map((social) => {
    return (
      <a href={props.socials[social]} className={"social-media-link " + social}>
        {social}
      </a>
    );
  });
}
