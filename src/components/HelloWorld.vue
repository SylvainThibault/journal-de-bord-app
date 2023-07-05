<script setup lang="ts">


import {storeToRefs} from "pinia";
import {useDailyReports} from "../store/DailyReportStore";

const dailyReportStore = useDailyReports();
const {dailyReports, titleFilteredDailyReports} = storeToRefs(dailyReportStore);
dailyReportStore.fetchDailyReports();

</script>

<template>
  <div class="greetings">
    <h1 class="green">Daily Reports</h1>
    <p>{{ titleFilteredDailyReports('EW-1052 Stuff to do in Frontend')[0]?.content || 'ça ich mais chu al' }}</p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
