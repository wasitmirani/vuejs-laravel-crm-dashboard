<template>
   <div>
      <breadcrumb active_name="Services"></breadcrumb>
      <div class="row">
         <div class="col-lg-12">
            <div class="card">
               <div class="card-body">
                  <div class="row align-items-center">
                     <div class="col-md-6">
                        <div class="mb-3">
                           <h5 class="card-title">Services List <span class="text-muted fw-normal ms-2">({{services.data.length}})</span></h5>
                        </div>
                            <div class="mb-3 col-4 mt-3">
                            <SearchInput :apiurl="'/service?page=' +this.page_num"
                                v-on:query="isquery($event)"
                                v-on:loading="loadingStart($event)"
                                v-on:reload="getServices()"
                                v-on:filterList="filterdata($event)"
                                label="Search Service">
                            </SearchInput>
                            </div>
                     </div>
                   
                     <div class="col-md-6">
                         
                        <div class="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                           <div>
                              <a role="button" class="btn btn-light" @click="openModal()"><i class="bx bx-plus me-1"></i> Add Service</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- end row -->
                  <ServiceTable :services="services" v-on:edit="editItem" v-on:deleteItem="deleteItem"></ServiceTable>
                  <!-- end table responsive -->
               </div>
            </div>
         </div>
      </div>
      <div class="modal fade bs-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-lg">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="myLargeModalLabel">Create New Service</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <ServiceForm v-on:created="serviceCreated($event)"   :editForm="editCollection" ></ServiceForm>
               </div>
            </div>
            <!-- /.modal-content -->
         </div>
         <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
   </div>
   <!--end-->
</template>
<script>
   import breadcrumb from '../../components/breadcrumbComponent';
   import ServiceForm from "./ServiceFormComponent.vue";
   import ServiceTable from "./ServiceTable.vue";
   import SearchInput from "../../components/SearchInputComponent.vue";
   export default {
           components:{breadcrumb,ServiceForm,ServiceTable,SearchInput},
           data(){
               return{
                   services:[],
                   editCollection:{},
                   page_num:1,
                   query:"",
                   loading:false,
               };
           },
           methods:{
                isquery(query) {
                   return (this.query = query);
                },
                filterdata(data){
                    this.services=data.services;
                },
                loadingStart(value) {
                    this.loading = value;
                },
               editItem(item){
                 this.editCollection = item;
                 $(".bs-modal-lg").modal("show");
              
               },
               serviceCreated(event){
                    $('.bs-modal-lg').modal('hide');
                    this.getServices();
               },
              async getServices(page=1){
                this.loading=true;
                this.page_num=page;
                 await  axios.get('/service').then((res)=>{
                       this.services=res.data.services;
                   });
               },
               openModal(){
                   $('.bs-modal-lg').modal('show')
               },
               deleteItem(item){
                    const url=`/service/${item.id}`;
                        Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                        if (result.isConfirmed) {
                            axios.delete(url).then((res) => {
                                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                                    this.getServices();
                            }).catch((err)=>{
                            this.$root.alertNotificationMessage(err.response.status,err.response.data);
                            });
                            }
                        });
               },
           },
           mounted(){
                   this.getServices();
           }
       }
</script>
<style scoped>
</style>