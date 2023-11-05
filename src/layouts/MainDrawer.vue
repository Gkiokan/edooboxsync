<template lang="html">
  <q-drawer v-model="$root.drawerLeft" :width="300" flat>
      <div class="absolute-full q-pa-md q-pl-lg column justify-between ">

         <!-- 
            <q-img class="q-mb-md" :src="$root.getImage('logo.png')" />
            <q-img class="q-mx-auto q-mb-sm cursor-pointer" :src="$root.getImage('kofi.svg')" width="180px" @click="$root.open('https://ko-fi.com/gkiokan')" /> 
        -->

          <q-space style="min-height: auto" />

          <div class="q-mb-sm q-gutter-sm text-center">
              <q-btn round flat size="sm" icon="fab fa-github" @click="$root.open('https://github.com/Gkiokan/hb-store-cdn-server')" />
              <q-btn round flat size="sm" icon="fab fa-twitter" @click="$root.open('https://twitter.com/GkiokanSali')" />
              <q-btn round flat size="sm" icon="fab fa-instagram" @click="$root.open('https://www.instagram.com/gkiokan.sali/')" />
              <q-btn round flat size="sm" icon="link" @click="$root.open('https://gkiokan.net')" v-if="false" />
          </div>

          <div class="q-mb-sm">
            <div class="text-regular text-h4 text-center q-mb-lg">edoobox<b class="text-red">sync</b></div>
            Version {{ $root.version }} <br>
            Made by Gkiokan <br>
            <br>
            Connect to your edoobox and sync your CRM data to SevDesk in a breeze 
          </div>

          <q-space />

          <q-separator class="q-my-sm" v-if="false" />

          <div class="q-gutter-md">
              <div>
                  <div class="text-regular">edoobox<b class="text-red">sync</b> by Gkiokan</div>
                  <!-- Created by Gkiokan -->
              </div>
          </div>

          <q-separator class="q-my-md" />

          <div class="q-gutter-sm">
              <q-btn no-caps color="black" align="left" class="full-width" icon="support_agent" label="Mail Support" @click="$root.open('mailto:me@gkiokan.net?subject=%20Support%20Anfrage%20edoosync')" />
          </div>

      </div>
  </q-drawer>
</template>

<script>
export default {
    name: "MainDrawer"
}
</script>

<style lang="css" scoped>
</style>
