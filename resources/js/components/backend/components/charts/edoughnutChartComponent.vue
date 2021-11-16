<template>
    <div>
            <div class="card">
            <div class="card-header">
                <h4 class="card-title mb-0">{{title}} Chart</h4>
            </div>
            <div class="card-body">
                <div id="doughnut-chart" data-colors='["#6951ce", "#ffcc5a", "#34c38f", "#16daf1", "#f04d80"]' class="e-charts"></div>
            </div>
            </div>
          <!-- end card -->
    </div>
</template>

<script>
    export default {
    props:['title','datalabel','data'],
    data(){
        return {
            option:null,
        };
    },
    methods:{
        doughnutChart() {
            var doughnutColors = getChartColorsArray("#doughnut-chart");
            dom = document.getElementById("doughnut-chart");
            myChart = echarts.init(dom);
            app = {};
            this.option = null, this.option = {
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: "vertical",
                    x: "left",
                    data: this.datalabel,
                    textStyle: {
                        color: "#858d98"
                    }
                },
                color: doughnutColors,
                series: [{
                    name: "Total sales",
                    type: "pie",
                    radius: ["50%", "70%"],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: "center"
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: "30",
                                fontWeight: "bold"
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:this.data
                }]
            }, this.option && "object" == (typeof this.option === "undefined" ? "undefined" : _typeof(this.option)) && myChart.setOption(this.option, true);
        }
    },
    mounted(){
        this.doughnutChart();
    },
    }
</script>

<style scoped>

</style>
