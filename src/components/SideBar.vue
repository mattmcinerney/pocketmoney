 <template>
  <aside class="sidebar">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <i class="fas fa-home fa-2x"></i>
        </li>
        <li class="nav__item">
          <i class="fas fa-pen-square fa-2x"></i>
        </li>
        <li class="nav__item">
          <i class="fab fa-cc-visa fa-2x"></i>
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

