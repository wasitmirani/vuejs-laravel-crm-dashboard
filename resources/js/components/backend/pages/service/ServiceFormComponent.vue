<template>
  <div>
   <form v-on:submit.prevent="onSubmit">
   <div class="row">
      <div class="col-12">
         <div class="mb-3">
           <label class="form-label" for="formrow-firstname-input">Name</label>
             <vs-tooltip left danger border>
             <label class="form-label text-danger" for="formrow-firstname-input" v-if="errors.name"> {{errors.name[0]}}</label>
             </vs-tooltip>
             <vs-input  primary v-model="service.name" placeholder="Service Name"  required/>   
         </div>
      </div>
       <!-- <div class="col-12">
         <div class="mb-3">
           <label class="form-label" for="formrow-firstname-input">Service Thumbnail</label>
              <vue2Dropzone :id="service.thumbnail" :options="dropzoneOptions" :useCustomSlot=true>
                <div class="dropzone-custom-content">
                    <h3 class="dropzone-custom-title">Drag and drop to upload Thumbnail!</h3>
                    <div class="subtitle">...or click to select a file from your computer</div>
                </div>
                </vue2Dropzone>
         </div>
      </div> -->
   </div>

   <div class="mt-4">
      <button type="submit" :class="editmode ? 'btn btn-success w-md' : 'btn btn-primary  w-md' ">{{editmode ? 'Update' : 'Submit'  }} </button>
   </div>
</form>
  </div>
</template>

<script>

export default {
props: ["editMode", "editForm","users"],
data(){
    return {
         errors:{},
         service:{},
         editmode:false,
    };
},
  methods:{
    onSubmit(){
      
      this.editmode ? this.updateService() : this.createService();
        
    },
     updateService(){
      axios.put("/service/"+this.service.id,this.service).then((res)=>{
          this.service={};
          this.$emit("created",true);
        this.$root.alertNotificationMessage(res.status,"service has been updated successfully.")
        }).catch((err)=>{
            if(err.response.status==422){
                            this.errors=err.response.data.errors;
                            return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors.name);
            }
            this.$root.alertNotificationMessage(err.response.status,err.response.data);
        });
    },
    createService(){
      axios.post("/service",this.service).then((res)=>{
          this.service={};
          this.$emit("created",true);
          this.$root.alertNotificationMessage(res.status,"New service has been created successfully.")
       
        }).catch((err)=>{
            if(err.response.status==422){
                            this.errors=err.response.data.errors;
                            return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors.name);
            }
            this.$root.alertNotificationMessage(err.response.status,err.response.data);
        });
    },
    restForm(){
      this.editmode=false;
    }
  },
   watch: {
    editForm(collection) {
      if (collection == null) {
        return this.restForm();
      }
      if (collection) {
        this.errors = "";
        this.editmode=true;
        this.service = collection;
      } else {
        this.restForm();
      }
    },
  },
}
</script>

<style>
.vs-input {
    width: 100%;
}
</style>