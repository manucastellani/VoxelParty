document.addEventListener('DOMContentLoaded', () => {
  // 1. Lógica de la Barra Lateral Colapsable
  const sidebar = document.getElementById('right-sidebar');
  const toggleBtn = document.getElementById('toggle-sidebar');

  toggleBtn.addEventListener('click', () => {
    // Agrega o quita la clase 'collapsed'
    sidebar.classList.toggle('collapsed');
  });

  // 2. Lógica de la Barra Flotante (Herramientas)
  const toolBtns = document.querySelectorAll('.floating-toolbar .tool-btn:not(.action-btn)');

  toolBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remover clase 'active' de todos
      toolBtns.forEach(b => b.classList.remove('active'));
      // Agregar clase 'active' al presionado
      e.currentTarget.classList.add('active');
      
      // Aquí iría tu lógica de Three.js
      // ej: setTool(e.currentTarget.title);
    });
  });
});
