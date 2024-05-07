function getElementWidth(content, padding, border) {
  const totalPadding = parseFloat(padding);
  const totalContent = parseFloat(content);
  const totalBorder = parseFloat(border);
  return `${totalPadding * 2 + totalBorder * 2 + totalContent}`;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
