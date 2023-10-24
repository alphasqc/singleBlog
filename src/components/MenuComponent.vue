<template>
    <div class="menu">
      <el-menu
        :default-active=menumark
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator One</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
        <!-- <el-menu-item index="5">
          <el-icon><setting /></el-icon>
          <span>{{ list }}</span>
        </el-menu-item> -->
      </el-menu>
    </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import axios from 'axios'
import { ref } from 'vue';

const menumark = sessionStorage.getItem('menumark')

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
  sessionStorage.setItem('menumark', key)
}

const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

</script>

<style scoped>
@import '@style/menu.css';
</style>