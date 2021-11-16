<template>
   <div>

         <div class="card">
            <div class="card-header">
               <h4 class="card-title mb-0"> {{title}} Chart</h4>
            </div>
            <div class="card-body">
               <div :id="'pie-chart'+index" data-colors='["#34c38f", "#f04d80", "#16daf1", "#ffcc5a", "#6951ce"]' class="e-charts"></div>
            </div>
         </div>
         <!-- end card -->
      </div>
      <!-- end col -->
</template>
<script>
   props:['title','datalabel','data','label','index']
   export default {
       data(){
           return{
               option:null,
           };
       },
       methods: {
     loadPieChart(){
        var pieColors = getChartColorsArray("#pie-chart");
        dom = document.getElementById("pie-chart");
        myChart = echarts.init(dom);
        app = {};
        this.option = null, this.option = {
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                left: "left",
                data: this.datalabel,
                textStyle: {
                    color: "#858d98"
                }
            },
    color: pieColors,
    series: [{
            name: 'Total '+this.label,
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.data,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
        }, this.option && "object" == (typeof this.option === "undefined" ? "undefined" : _typeof(this.option)) && myChart.setOption(this.option, true);
           },
       },
        mounted() {
           this.loadPieChart();
           console.log('Component mounted.Pie')
       }
    // mounted(){
    // this.loadPieChart();
    // }

    // [{data array sample
    //         value: 335,
    //         name: "Laptop"
    //     }, {
    //         value: 310,
    //         name: "Tablet"
    //     }, {
    //         value: 234,
    //         name: "Mobile"
    //     }, {
    //         value: 135,
    //         name: "Others"
    //     }, {
    //         value: 1548,
    //         name: "Desktop"
    //     }]
   }
</script>
