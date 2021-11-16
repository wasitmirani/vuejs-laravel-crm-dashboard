<template>
   <div>
      <div class="table-responsive mb-4">
         <table id="datatable-buttons" class="table table-bordered dt-responsive nowrap w-100">
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               <tr v-for="item in services.data" :key="item.id">
                  <td>
                     <vs-avatar primary>
                        <template #text>
                           {{item.name}}
                        </template>
                     </vs-avatar>
                  </td>
                  <td>
                     <a role="button" @click="edit(item)"> <i class="fas fa-edit"></i></a> |   
                     <a role="button" @click="deleteItem(item)"> <i class=" fas fa-trash text-danger"></i></a>
                  </td>
               </tr>
                <tr v-if="services.data.length<1">
                    <td colspan="2">
                           <vs-alert shadow >
                            <template #title>
                                Empty
                            </template>
                                Service Data not found
                         </vs-alert>
                    </td>
                </tr>
            </tbody>
         </table>
      </div>
    <TableFooter :table="services"></TableFooter>
   </div>
</template>
<script>
import TableFooter from "../../components/tableFooterComponent.vue";
export default {
   props:["services"],
   components:{TableFooter},
   methods:{
       edit(item){
          return this.$emit("edit",item)
       },
       deleteItem(item){
          return this.$emit("deleteItem",item)
       }
   }
   }
</script>
<style>
</style>