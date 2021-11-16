<template>

   <div class="card card-h-100">
      <!-- card body -->
      <div class="card-body">
         <div class="d-flex align-items-center">
            <div class="flex-grow-1">
               <span class="text-muted mb-3 lh-1 d-block text-truncate">Total {{title}}</span>
               <h4 class="mb-3">
                  $<span class="counter-value" data-target="354.5">0</span>k
               </h4>
               <div class="text-nowrap">
                  <span class="badge bg-soft-warning text-warning">+$20.9k</span>
                  <span class="ms-1 text-muted font-size-13">Since last week</span>
               </div>
            </div>
            <div class="flex-shrink-0 text-end dash-widget">
               <div :id="'mini-chart'+index" data-colors='["#6951ce", "#f04d80"]' class="apex-charts"></div>
            </div>
         </div>
      </div>
      <!-- end card body -->
   </div>
   <!-- end card -->
</template>
<script>
   export default {
       props:['title','index'],
       methods: {
           loadMiniChart(){
                   let barchartColors = getChartColorsArray("#mini-chart"+this.index);
                   let options = {
                   series : [60, 40],
                   chart : {
                   type : "donut",
                   height : 115
                   },
                   colors : barchartColors,
                   legend : {
                   show : false
                   },
                   dataLabels : {
                   enabled : false
                   }
                   };
                   let chart = new ApexCharts(document.querySelector("#mini-chart"+this.index), options);
                   chart.render();
           }
       },
       mounted() {
           this.loadMiniChart();
           console.log('Component mounted.')
       }
   }
</script>
