import type { PrimaryId, SatelliteId } from './logic';

export const planetPalettes: Record<PrimaryId, { stops: [string, string, string]; line: string }> = {
  earth: { stops: ['#e6fbff', '#3c91b8', '#233a74'], line: '60 145 184' },
  mars: { stops: ['#ffe0ba', '#c9653f', '#4a2621'], line: '201 101 63' },
  jupiter: { stops: ['#fff4d6', '#d29b62', '#6d5148'], line: '210 155 98' },
  saturn: { stops: ['#f7efe2', '#d19a66', '#63425f'], line: '209 154 102' },
  neptune: { stops: ['#d8f4ff', '#4f8fcf', '#16295f'], line: '79 143 207' },
};

export const satelliteStyles: Record<SatelliteId, { fill: string; stroke: string; scar: string; size: number }> = {
  'icy-moon': { fill: '#dbefff', stroke: '#7aa9c7', scar: '#9ec9df', size: 0.92 },
  'rocky-moon': { fill: '#c9beb2', stroke: '#75695f', scar: '#93867a', size: 1.08 },
  'rubble-pile': { fill: '#b9aa95', stroke: '#6f6253', scar: '#8e806e', size: 0.62 },
  'iron-core': { fill: '#b9bec8', stroke: '#656d7a', scar: '#818a98', size: 0.98 },
};
