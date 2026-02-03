import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { useMemo } from 'react';

//npm install @dicebear/core @dicebear/collection --save
//https://www.dicebear.com/playground/
// The avatar style Avataaars is a remix of: Avataaars by Pablo Stanley, licensed under Free for personal and commercial use (https://avataaars.com/) .

function GenerateAvatar({ seed }) {
  const avatarUri = useMemo(() => {
    const avatar = createAvatar(avataaars, {
      seed: seed,
      size: 128,
      backgroundColor: ["edb98a"], // b6e3f4 (light blue), c0aede(light purple), ffd5dc(pink), edb98a (peach)
      clothing: ["hoodie"], // blazerAndShirt, collarAndSweater, graphicShirt, hoodie, overall, shirtCrewNeck, shirtScoopNeck, shirtVNeck
      clothesColor: ["ffffff"], // b6e3f4 (light blue), c0aede(light purple), ffd5dc(pink), edb98a (peach)
      top: ["straight01"], // noHair, hat, hijab, turban, winterHat1, winterHat2, winterHat3, winterHat4, longHairBigHair, longHairBob, longHairBun, longHairCurly, longHairCurvy, longHairDreads, longHairFrida, longHairFro, longHairFroBand, longHairNotTooLong, longHairShavedSides, longHairMiaWallace, longHairStraight, longHairStraight2, longHairStraightStrand, shortHairDreads01, shortHairDreads02, shortHairFrizzle, shortHairShaggyMullet, shortHairShortCurly, shortHairShortFlat, shortHairShortRound, shortHairShortWaved, shortHairSides, shortHairTheCaesar, shortHairTheCaesarSidePart
      hairColor: ["e1621d"], // 2c1b18 (dark brown), 4a312c (brown), d6b370 (blonde), e1621d (ginger)
      skinColor: ["f9c9b6"], // b6e3f4 (light blue), c0aede(light purple), ffd5dc(pink), edb98a (peach)

      // Add other options here
    });
    return `data:image/svg+xml,${encodeURIComponent(avatar.toString())}`; // Create data URI for SVG
  }, [seed]); // The avatar regenerates only when the 'seed' prop changes

  return <img src={avatarUri} alt="User Avatar" />
};

export default GenerateAvatar;