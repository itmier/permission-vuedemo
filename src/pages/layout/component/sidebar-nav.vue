<template>
  <el-menu
    :collapse="isSidebarNavCollapse"
    background-color="#304156"
    text-color="#eee"
    active-text-color="#4dbcff"
    :default-active="currentMenu"
  >
    <DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
  </el-menu>
</template>

<script>
import DynamicMenu from "@/components/dynamic-menu";
// 自己加的
import dynamicRoutes from "@/router/dynamic-router.js";

// import { mapState } from 'vuex'

export default {
  data() {
    return {
      isCollapse: true
    };
  },
  computed: {
    // ...mapState(['isSidebarNavCollapse']),
    // ...mapState('permission', ['sidebarMenu', 'currentMenu'])
    isSidebarNavCollapse() {
      return false;
    },
    sidebarMenu() {
      // return dynamicRoutes;
      // 模拟权限
      return dynamicRoutes.filter(item => item.name == "Login");
    },
    currentMenu() {
      return "Login";
    }
  },
  methods: {},
  components: {
    DynamicMenu
  }
};
</script>
