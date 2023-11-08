<template>
<q-layout view="hHh Lpr lff">
    <q-header class="q-pa-sm bg-transparent">

        <TitleBar v-if="false" />

        <q-toolbar flat class="bg-dark text-white rounded-borders q-header-top">
            <q-btn flat icon="menu" @click="$root.drawerLeft = !$root.drawerLeft" />
            
            <div class="text-regular">edoobox<b class="text-red">sync</b></div>
            
            <q-space />

            <q-tabs v-model="$root.tab" shrink stretch>
                <q-route-tab no-caps label="Home" :to="{ name: 'home' }" />
                <q-route-tab no-caps label="Edoobox" :to="{ name: 'edoobox' }" />

                <q-route-tab no-caps label="Einstellung" :to="{ name: 'config' }" />
                <q-route-tab name="logs" label="Logs" />
            </q-tabs>

            <q-btn round class="q-ml-md cursor-pointer" size="sm" icon="power_settings_new" v-if="showCloseButtonNextToTabs" />

            <div class='q-ml-md'>
                <q-btn flat round size="sm" icon="power_settings_new" @click="closeApplication" />
            </div>            
        </q-toolbar>
    </q-header>

    <MainDrawer />

    <q-page-container>
        <router-view />
    </q-page-container>

    <q-footer class="bg-black text-grey-5 q-px-md q-py-xs">
        <div class='row'>
          <div class='col' style="font-size: 13px">
            Made by Gkiokan | <small> Exclusive build </small>
          </div>
          <div>
              v{{ $root.version }}
          </div>
        </div>
    </q-footer>
</q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { get } from 'vuex-pathify'

import MainDrawer from './MainDrawer'
import TitleBar from '~/components/TitleBar'

export default defineComponent({
  name: 'MainLayout',

  components: {
      MainDrawer,
      TitleBar
  },

  data(){ return {
      showCloseButtonNextToTabs: false,
  }},

  computed: {
    
  },

  methods: {
        closeApplication(){
            this.$q.dialog({
                title: "Quit application?",
                message: "This will Close the Application",
                dark: true,
                cancel: {
                    flat: true,
                    color: 'black',
                    textColor: 'white',
                },
                ok: {
                    flat: true,
                    label: "Ok, close it",
                    color: 'transparent',
                    textColor: 'red',
                    icon: 'power_settings_new',
                },

            }).onOk( () => {
                window.hb.closeApplication()
            })
        }    
  }
})
</script>

<style lang="scss" scoped>
.q-header-top {
    position: relative;
    z-index: 5;
}

.cdn {
    position: absolute; z-index: 1;
    left: 8px; right: 8px; bottom: 20px;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    opacity: 0;
    height: 30px;
    padding-bottom: 3px;

    background: green;
    border-radius: 0 0 4px 4px;

    line-height: 1;
    font-size: 14px;
    font-family: verdana;

    transition: all .3s;

    &.active {
        opacity: 1;
        bottom: -12px;
    }
}
</style>
