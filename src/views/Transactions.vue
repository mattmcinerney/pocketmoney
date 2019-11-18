<template>
  <div>
    <h1>Transaction Charts</h1>
    <div class="content flex-row">
      <Chart class="trans-chart" chartdata="chartData"></Chart>
      <Bar class="trans-chart" chartdata="chartData"></Bar>
    </div>
  </div>
</template>

<script>
import { data } from "../data/transactions"
import Chart from "../components/Chart"
import Bar from "../components/Bar"

export default {
  name: "Transactions",
  components: {
    Chart,
    Bar
  },
  data() {
    var chartData = data.map(d => d.split(",")[3]).reverse();
    return {
      chartData
    };
  }
};
</script>
