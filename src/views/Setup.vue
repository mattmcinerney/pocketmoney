<template>
  <div>
    <h1>Budget setup</h1>
    <form class="budget-calculator flex-column">
      <div class="income flex-column">
        <h2>Income</h2>
        <label for="income">Salary</label>
        <input name="income" placeholder="$0.00" type="number" min="1" step="any" />
      </div>

      <div class="expenses flex-column">
        <h2>Expenses</h2>
        <label for="rent">Rent</label>
        <input name="rent" placeholder="$0.00" type="number" min="1" step="any" />

        <label for="electricity">Electricity</label>
        <input name="electricity" placeholder="$0.00" type="number" min="1" step="any" />

        <label for="water">Water</label>
        <input name="water" placeholder="$0.00" type="number" min="1" step="any" />

        <label for="gas">Gas</label>
        <input name="gas" placeholder="$0.00" type="number" min="1" step="any" />

        <label for="internet">Internet</label>
        <input name="internet" placeholder="$0.00" type="number" min="1" step="any" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Setup",
  components: {}
};
</script>