
<template>
     <vs-avatar circle badge badge-color="success" badge-position="bottom-right" v-if="thumbnail" class="rounded-circle header-profile-user">
        <img :src="thumbnail" alt="" >
      </vs-avatar>
      <vs-avatar warn badge badge-color="success" badge-position="bottom-right" v-else class="rounded-circle header-profile-user">
        <template #text>
          {{name}}
        </template>
      </vs-avatar>
</template>

<script>
export default {
props:['name','thumbnail']
}
</script>

<style>

</style>