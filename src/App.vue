<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand href="#"><font-awesome-icon icon="graduation-cap"></font-awesome-icon> Sekolah Pintar</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          

          <b-nav-item  right>
            <router-link to="/pelajaran"><b-button variant="outline-success">Pelajaran</b-button></router-link>
          </b-nav-item>
          <b-nav-item  right>
            <router-link to="/guru"><b-button variant="outline-success">Guru</b-button></router-link>
          </b-nav-item>
          
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>


