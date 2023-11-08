<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',

    data(){ return {
        version: process.env.version,
        drawerLeft: false,
        tab: 'config',
        logs: [],
    }},

    computed: {

    },

    beforeCreate() {
        this.$store.commit('initialiseStore');
    },      

    created(){
        this.$q.dark.set(true)
        this.addEventListener()
        this.startUpReset()        
    },

    methods: {
        startUpReset(){
            this.updateServerState(null, null)
            this.updateServerFiles(null, [])
            // this.state = 'stopped'
            this.logs = []
        },

        addEventListener(){
            console.log("app::Register app events")
            window.ipc.on('error', (_, msg) => this.showError(msg))
            window.ipc.on('log', (_, log) => this.addLogs(log))
            window.ipc.on('notify', (_, msg) => this.notify(msg))
            window.ipc.on('loading', (_, loading) => this.loading(loading))

            // window.ipc.on('server-state', this.updateServerState)
            // window.ipc.on('server-files', this.updateServerFiles)
            this.$store.subscribe(this.storeSubscriber)
            console.log("app::register done")
        },

        updateServerState(_, state){
            this.state = state
        },

        updateServerFiles(_, files){
            this.files = files
        },

        loading(o){
            // console.log(o)
            if(o.hide)
              return this.$q.loading.hide()

            o.spinner = QSpinnerBox
            this.$q.loading.show(o)
        },

        storeSubscriber(mutation, state){
            // console.log("store::subscriber", mutation, state)
            localStorage.setItem('store-edooboxsync', JSON.stringify(state));
        },

        showError(message){
            console.log("Show Error", message)
            this.$q.notify({
                message,
                html: true,
                icon: 'warning',
                color: 'red',
                timeout: 2200,
            })
        },

        notify(message){
            console.log("Notify", message)
            this.$q.notify({
                message,
                icon: 'done',
                color: 'green',
                timeout: 800,
            })
        },

        addLogs(message){
            console.log(message)
            this.logs.unshift({ time: Date.now(), message })
        },

        open(url){
            window.ipc.open(url)
        },

        getImage(img){
            return img
            const isDevelopment = process.env.NODE_ENV === 'development';
            // const staticPath = isDevelopment ? __static : __dirname.replace(/app\.asar$/, 'static');

            if(isDevelopment)
              return url.resolve(window.location.origin, img);

            return __dirname.replace(/app\.asar$/, 'static') + '/' + img
        },        
    }
})
</script>
