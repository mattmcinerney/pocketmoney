import Transactions from "./src/views/Transactions.vue";
import Setup from "./src/views/Setup.vue";
import UberEats from "./src/views/UberEats.vue";

export default [
  { path: "/", component: Transactions },
  { path: "/setup", component: Setup },
  { path: "/ubereats", component: UberEats }
];
