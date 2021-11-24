<template>

   <div class="card card-h-100">
      <!-- card body -->
      <div class="card-body">
         <div class="d-flex align-items-center">
            <div class="flex-grow-1">
               <span class="text-muted mb-3 lh-1 d-block text-truncate">Total {{title}}</span>
               <h4 class="mb-3">
                  <span class="counter-value" :data-target="this.series[0].value">{{this.series[0].value}}</span>
               </h4>
               <div class="text-nowrap">
                  <span class="badge bg-soft-primary text-primary">{{this.series[1].value}}</span>
                  <span class="ms-1 text-muted font-size-13">{{label}}</span>
               </div>
            </div>
            <div class="flex-shrink-0 text-end dash-widget">
               <div :id="'mini-chart'+index" data-colors='["#33c38e ", "#1c84ee"]' class="apex-charts"></div>
            </div>

         </div>
      </div>
      <!-- end card body -->
   </div>
   <!-- end card -->
</template>
<script>
   export default {
       props:['title','index','label','series'],
       methods: {
           loadMiniChart(){
                   let barchartColors = getChartColorsArray("#mini-chart"+this.index);
                   let options = {
                   labels: [this.series[0].title, this.series[1].title],
                   series : [this.series[0].value, this.series[1].value],
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
