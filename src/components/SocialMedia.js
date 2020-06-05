import React from 'react';

export default function SocialMedia(props) {
  const socials = [];
  if (props.twitter) {
    socials.push(<a href={props.twitter} className="twitter">twitter      </a>)
  }
  if (props.linkedin) {
    socials.push(<a href={props.linkedin} className="linkedin">linkedin      </a>)
  }
  if (props.instagram) {
    socials.push(<a href={props.instagram} className="instagram">instagram</a>)
  }
  return socials;
}