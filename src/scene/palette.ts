/**
 * Scene palette, built around the Blueprint spider: a drafting-table navy with a fine grid,
 * dark paper, silver silk, and the rig's own yellow (highlighter) and pink (accents).
 */
export const PALETTE = {
  duskCenter: '#0a0f1e',
  dusk: '#080d1a',
  duskEdge: '#050810',
  grid: '127, 196, 255',
  paper: '#0d1120',
  paperEdge: '#161c30',
  ink: '#c8d0e8',
  inkSoft: '#7a84a8',
  silk: '#e8ecf7',
  silkRgb: '232, 236, 247',
  silkOnPaper: 'rgba(180, 190, 230, 0.55)',
  pollen: '#f4b400',
  pink: '#ff4f86',
  blue: '#3f9cf0',
  highlighter: 'rgba(255, 204, 41, 0.35)',
  /** Clauses to read (terms mode). */
  flag: 'rgba(255, 80, 100, 0.38)',
  /** The answer to "Ask the spider". */
  answer: 'rgba(56, 217, 150, 0.38)',
  dew: '#ffffff',
  hudText: 'rgba(232, 236, 247, 0.86)',
  hudMuted: 'rgba(232, 236, 247, 0.55)',
} as const;

export const UI_FONT = "'Atkinson Hyperlegible Next Variable', 'Atkinson Hyperlegible', system-ui, sans-serif";
