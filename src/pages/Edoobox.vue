<template>
<q-page padding>

    <div class="text-h5 text-bold">
        Edoobox
        <small class="text-weight-light text-body2"><i>{{ config.edoobox.key }} | {{ config.edoobox.secret }} | {{ valid }} </i></small>
    </div>

    <q-space style="height: 30px" />

    <div class="q-mb-lg bg-red-13 text-white text-center flex flex-center align-center q-pa-lg rounded-borders column" v-if="!valid">
        <div class="q-mb-md">
            <q-icon name="info" size="lg" class="q-mr-md" />
            <span class="text-h6"> Es fehlen die API Keys für Edoobox! </span>
        </div>

        <q-btn outline no-caps icon="settings" :to="{ name: 'config' }" label="zu den Einstellungen" />
    </div>

      <q-tabs v-model="tab" no-caps dense 
                indicator-color="transparent" 
                active-color="white"
                class="text-grey-5" 
                align="left">
        <q-tab name="invoices" label="Rechnungen" />
        <q-tab name="customers" label="Kunden" />
      </q-tabs>

</q-page>
</template>

<script>

// Test data 
// private 
// api key key_1ccc391bbf42c11a9e8090
// api sec sec_a9ad8e6e4ef9b019932414

// private v2
// api key key_21d7c62f1860f63e9bfcc6e807e74d1f0ce58d8a
// api sec sec_!b#J:H43fREBdRTXI3z0IHAYmf26l!

// private v2 super admin
// api key key_e01d0741e0e9b3435a767a80edf3b5ad98940973
// api sec sec_rwYJMq_,ll7Ah0kQSC(CIkT-hlf39q

// public 
// api key key_c6b99d6f27ab63d5e1676c
import { get, sync } from 'vuex-pathify'

export default {
    name: 'Edoobox',

    data(){ return {
        tab: 'invoices',
    }},

    computed: {
        config: sync('app.config', false),
        valid(){
            let key = this.config.edoobox.key
            let sec = this.config.edoobox.secret 
            return !(!key)

            // return !(!key || !sec)
        },
    },

    mounted(){
        // this.auth()

        this.$store.dispatch('app/loginEdoobox')
    },

    methods: { 
        auth(){
            let data = {
                key:    this.config.edoobox.key,
                secret: this.config.edoobox.secret,
                "expire":"2030-01-01T01:00:00+02:00"
            }

            let headers = {
                'grant-type': 'password',
            }

            this.$edoobox.post('auth', data, { headers })
                .then( ({ data }) => {
                    console.log(data)
                })
                .catch( e => console.log(e) )
        },

        load(){
            this.$edoobox.get('/invoices')
        }
    }    
}
</script>