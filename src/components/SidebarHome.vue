<template>
  <aside>
    <div id="nav-blog" class="sidebar-item">
      <h3>Acción</h3>
      <a href="#" class="btn btn-succes">Crear articulo</a>
    </div>
    <div id="search" class="sidebar-item">
      <h3>Buscador</h3>
      <p>Encuentra el artículo que buscas</p>
      <form>
        <input type="text" name="search" class="input-search"/>
        <input type="text" name="submit" value="search" class="btn">
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SidebarHome'
}
</script>

