<template>
  <div>
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0 font-size-18">{{active_name}}</h4>

                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><router-link  to="/"  >Dashboard</router-link></li>
                                            <li class="breadcrumb-item" v-for="item in previous" :key="item.id" >
                                                <router-link :to="item.link">{{item.name}}</router-link>
                                            </li>
                                             <li class="breadcrumb-item active">{{active_name}}</li>
                                        </ol>
                                    </div>

                                </div>
                        </div>
                 </div>
        <!-- end page title -->
  </div>
</template>

<script>
export default {
props:['active_name','previous'],
  beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.prevRoute = from;
        });
    },
    computed: {
        prevRoutePath() {return this.prevRoute ? this.prevRoute.path : '/'},
    }

}
</script>

<style>

</style>
