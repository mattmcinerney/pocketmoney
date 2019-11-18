 <template>
  <aside class="sidebar">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/">
            <i class="fas fa-home fa-2x"></i>
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to="/setup">
            <i class="fas fa-pen-square fa-2x"></i>
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to="/">
          <i class="fab fa-cc-visa fa-2x"></i>
          </router-link>
        </li>
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

