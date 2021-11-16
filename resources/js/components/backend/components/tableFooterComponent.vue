<template>
  <div>
         <div class="col-sm-12 col-md-5">
          <div class="dataTables_info" id="datatable-buttons_info" role="status" aria-live="polite">
              Showing {{table.current_page}} to {{table.per_page}} of {{table.total}} entries
        </div></div>
  </div>
</template>

<script>
export default {
props:['table']
}
</script>

<style>

</style>