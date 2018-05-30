<template>
  <div id="layout" class="flex flex-v">
    <div class="header" v-if="$route.name!='login'">
      <a class="logo">ADMIN</a>
      <a class="menuToggleBTn el-icon-menu" @click="menuToggle"></a>
      <div class="user pull-right">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <template v-if="$store.state.auth.user && $store.state.auth.user.userName">{{$store.state.auth.user.userName}}</template><i class="el-icon-arrow-down el-icon--right"></i>

          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="body flex1 flex">
      <div class="menu flex" v-if="$route.name!='login'">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="main flex1 flex flex-v">
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="$route.name!='login'">
          <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
          <el-breadcrumb-item v-for="(item,index) in $route.matched" v-bind:key="index" :to="{ path: item.path }" v-if="!item.meta.hidden">{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content flex1">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        isCollapse: true
      }
    },
    methods:{
      menuToggle(){
        this.isCollapse=!this.isCollapse;
      },
      logout(){
        this.$router.push("/login");
      }
    },
    mounted(){
      console.log(this.$route.matched);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./layout.scss"></style>
