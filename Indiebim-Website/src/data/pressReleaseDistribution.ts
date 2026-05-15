import partA from './pressRelease/placements-part-a.json';
import partB from './pressRelease/placements-part-b.json';
import partC from './pressRelease/placements-part-c.json';
import partD from './pressRelease/placements-part-d.json';

export const PRESS_RELEASE_REPORT_TITLE =
  "Press Release Distribution Report - Building India's Most Trusted Corporate Security Ecosystem";

export const PRESS_RELEASE_TOTAL_PLACEMENTS = 108;

export const PRESS_RELEASE_AUDIENCE_REACH = '74.14 M';

export type PressPlacement = {
  id: number;
  publication: string;
  logo_file: string;
  view_release_link: string;
};

export const pressReleasePlacements: PressPlacement[] = [
  ...(partA as PressPlacement[]),
  ...(partB as PressPlacement[]),
  ...(partC as PressPlacement[]),
  ...(partD as PressPlacement[]),
];
