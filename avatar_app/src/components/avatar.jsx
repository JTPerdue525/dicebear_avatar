import { createAvatar } from '@dicebear/core';
import { toonHead } from '@dicebear/collection';
import { useMemo } from 'react';

//npm install @dicebear/core @dicebear/collection --save
//https://www.dicebear.com/playground/
// The avatar style Toon Head is a remix of: ToonHead by Johan Melin, licensed under CC BY 4.0(https://creativecommons.org/licenses/by/4.0/)

function GenerateAvatar({ seed }) {
  const avatarUri = useMemo(() => {
    const avatar = createAvatar(toonHead, {
      seed: seed,
      size: 128,
      eyes: ["wide"],
      backgroundColor: ["b6e3f4"]

      // Add other options here
    });
    return `data:image/svg+xml,${encodeURIComponent(avatar.toString())}`; // Create data URI for SVG
  }, [seed]); // The avatar regenerates only when the 'seed' prop changes

  return <img src={avatarUri} alt="User Avatar" />
};

export default GenerateAvatar;