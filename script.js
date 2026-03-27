
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
      behavior: "smooth"
  });
}
<script>
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('show'));
  });
</script>
