<template>
  <div>
    <breadcrumb active_name="Users List"/>
    <userstable :users="users" />
  </div>
</template>

<script>
import userstable from "./UsersTable.vue";
import breadcrumb from "../../components/breadcrumbComponent.vue";
export default {
  components: { userstable,breadcrumb},
  data() {
    return {
      users: [],
    };
  },
};
</script>

