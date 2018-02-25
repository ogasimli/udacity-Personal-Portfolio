const projects = document.querySelectorAll('.project');

projects.forEach(project => project.addEventListener('mouseenter', removeLayer))
projects.forEach(project => project.addEventListener('mouseleave', addLayer))

function removeLayer() {
  const overlay = getProjectOverlay(this);
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
}


function addLayer() {
  const overlay = getProjectOverlay(this);
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
}

function getProjectOverlay(element) {
  return element.childNodes[1].childNodes[1];
}