<template>
<q-page padding>
    <div class="text-h5 text-bold">
        Konfiguration 
        <small class="text-weight-light text-body2"><i>zuletzt gespeichert {{ last_updated }}</i></small>
    </div>

    <q-space style="height: 30px" />


    <div class="row q-col-gutter-lg">
        <div class="col-xs-12 col-sm-6">
            <div class="q-gutter-md">
                <h6 class="q-mb-none">Edoobox API </h6>
                <q-input standout="bg-grey-6 text-white" dense text-color="white" v-model="config.edoobox.key" label="Edoobox API Key" />
                <q-input standout="bg-grey-6 text-white" dense text-color="white" v-model="config.edoobox.secret" label="Edoobox API Secret" />
            </div>

            <q-space style="height: 30px" />
        </div>
        <div class="col-xs-12 col-sm-6">
            <div class="q-gutter-md">
                <h6 class="q-mb-none">SevDesk API </h6>
                <q-input standout="bg-grey-6 text-white" dense text-color="white" v-model="config.sevdesk.key" label="Sevdesk API Key" />
                <q-input standout="bg-grey-6 text-white" dense text-color="white" v-model="config.sevdesk.secret" label="Sevdesk API Secret" />
            </div>

            <q-space style="height: 30px" />
        </div>
    </div>        


</q-page>
</template>

<script>

// Test data 
// api key key_1ccc391bbf42c11a9e8090
// api sec sec_a9ad8e6e4ef9b019932414
import { get, sync } from 'vuex-pathify'
import moment from 'moment'

export default {
    name: 'Config',

    data(){ return {
        last_updated: null,
    }},

    mounted(){
        this.validate()
    },

    computed: {
        config: sync('app.config', false),
    },

    watch: {
        config: {
            deep: true,
            handler(a){
                console.log(a)
                this.$store.dispatch('app/save')
                this.validate()
            }
        }
    },

    methods: {
        validate(){
            let value = get('app.last_updated', false)() ?? null
            this.last_updated  = value ? moment(value).fromNow() : "Neu"            
        }
    }    
}
</script>