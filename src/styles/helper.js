export function hexToRgb(hex) {
  const shortHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hexConverted = hex.replace(shortHexRegex, (_, r, g, b) => (r + r + g + g + b + b));

  const longHexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexConverted);

  if (!longHexRegex) {
    return `0 0 0`
  }

  const rgb = {
    r: parseInt(longHexRegex[1], 16),
    g: parseInt(longHexRegex[2], 16),
    b: parseInt(longHexRegex[3], 16)
  }

  return `${rgb.r} ${rgb.g} ${rgb.b}`
}
