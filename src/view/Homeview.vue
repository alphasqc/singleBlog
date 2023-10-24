<template>

    <div class="common-layout">

        <el-container height="100%">

        <el-aside width="240px" style="background-color: aqua;">
            <menu-component></menu-component>
        </el-aside>

        <el-container>

            <el-header style="background-color: azure;">
            Header
            </el-header>

            <el-main style="background-color: blanchedalmond;">
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in">
                        <!-- <keep-alive :include="navList"> -->
                        <keep-alive>
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
            </el-main>

        </el-container>
        
        </el-container>

    </div>

</template>

<script setup>
import MenuComponent from '@components/MenuComponent.vue';

</script>
  