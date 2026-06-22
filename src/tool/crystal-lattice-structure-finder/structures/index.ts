import { bodyCenteredCubic } from './body-centered-cubic';
import { cesiumChloride } from './cesium-chloride';
import { diamondCubic } from './diamond-cubic';
import { faceCenteredCubic } from './face-centered-cubic';
import { hexagonalClosePacked } from './hexagonal-close-packed';
import { perovskite } from './perovskite';
import { rockSalt } from './rock-salt';
import { rutile } from './rutile';
import { simpleCubic } from './simple-cubic';
import { wurtzite } from './wurtzite';
import { zincBlende } from './zinc-blende';

export const LATTICE_STRUCTURES = [
  simpleCubic,
  bodyCenteredCubic,
  faceCenteredCubic,
  hexagonalClosePacked,
  diamondCubic,
  rockSalt,
  cesiumChloride,
  zincBlende,
  wurtzite,
  perovskite,
  rutile,
];
