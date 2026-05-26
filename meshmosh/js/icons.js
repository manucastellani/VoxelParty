// SVG icon library — all 16x16 viewBox
const Icons = {
  cursor: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2l10 6-5 1.5L6.5 14 3 2z"/></svg>`,
  move: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v12M2 8h12M5 5L2 8l3 3M11 5l3 3-3 3M5 5L8 2l3 3M5 11l3 3 3-3"/></svg>`,
  rotate: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 8a5.5 5.5 0 11-1.34-3.6M13.5 2v3.5H10"/></svg>`,
  scale: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="4" height="4" rx="1"/><rect x="10" y="2" width="4" height="4" rx="1"/><path d="M6 8h2M8 4h2M10 4L6 8"/></svg>`,
  cube: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2l5 3v6l-5 3-5-3V5z"/><path d="M8 2v12M3 5l5 3 5-3"/></svg>`,
  sphere: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="5.5"/><path d="M2.5 8h11M8 2.5C6 5 6 11 8 13.5M8 2.5C10 5 10 11 8 13.5"/></svg>`,
  duplicate: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="8" height="8" rx="1.5"/><path d="M3 11V3h8"/></svg>`,
  delete: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h12M5 4V3h6v1M6 7v5M10 7v5M3 4l1 9h8l1-9"/></svg>`,
  reset: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8a5 5 0 105-5H5M3 3v3h3"/></svg>`,
  eye: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z"/><circle cx="8" cy="8" r="2"/></svg>`,
  eyeOff: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2 2l12 12M6.7 6.7A2 2 0 0010 10M4.5 4.5C3 5.6 2 7 2 7s2.5 5 6 5c1.1 0 2-.3 2.8-.7M7 3.1C7.3 3 7.7 3 8 3c3.5 0 6 4 6 5a8 8 0 01-1.5 2"/></svg>`,
  lock: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5 7V5a3 3 0 016 0v2"/></svg>`,
  chevronDown: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l4 4 4-4"/></svg>`,
  share: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="4" cy="8" r="2"/><path d="M10 4.8L6 7.2M6 8.8l4 2.4"/></svg>`,
  settings: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="2.5"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.2 3.2l1.4 1.4M11.4 11.4l1.4 1.4M3.2 12.8l1.4-1.4M11.4 4.6l1.4-1.4"/></svg>`,
  help: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="6.5"/><path d="M6 6.5a2 2 0 013.9.7C9.9 8.4 8 9 8 10M8 12.5v.5"/></svg>`,
  mesh: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2l5 3v6l-5 3-5-3V5z"/><path d="M8 2v12M3 5l5 3 5-3"/></svg>`,
  camera: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1.5" y="4" width="13" height="9" rx="1.5"/><circle cx="8" cy="8.5" r="2.5"/><path d="M5 4l1-2h4l1 2"/></svg>`,
  light: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="7" r="3"/><path d="M8 1v1.5M8 11.5V13M1 7h1.5M13.5 7H15M3.2 3.2l1 1M11.8 11.8l1 1M3.2 10.8l1-1M11.8 3.2l1-1M6 12l2 3 2-3"/></svg>`,
  plus: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M8 3v10M3 8h10"/></svg>`,
};

function icon(name, size = 14) {
  const svg = Icons[name] || Icons.cube;
  return svg.replace('viewBox', `width="${size}" height="${size}" viewBox`);
}
