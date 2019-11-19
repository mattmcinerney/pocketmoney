 <template>
  <aside class="sidebar">
    <nav class="nav">
      <ul class="nav__list">
        <router-link to="/">
          <li class="nav__item">
            <i class="fas fa-home fa-2x"></i>
          </li>
        </router-link>
        <router-link to="/setup">
          <li class="nav__item">
            <i class="fas fa-pen-square fa-2x"></i>
          </li>
        </router-link>
        <router-link to="/">
          <li class="nav__item">
            <i class="fab fa-cc-visa fa-2x"></i>
          </li>
        </router-link>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    msg: String
  }
};
</script>

