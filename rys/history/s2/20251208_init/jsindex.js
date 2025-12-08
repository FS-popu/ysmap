//面板內選項展開
function toggleFilter(header) {
  const body = header.nextElementSibling;
  body.style.display = body.style.display === 'none' ? 'block' : 'none';
}
