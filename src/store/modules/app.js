import { make } from 'vuex-pathify'
import { edoobox } from '~/boot/axios'

export const state = {
    search: '',
    selected: null,
    last_updated: 0,
    config: {
        edoobox: {
            key: '',
            secret: '',
            token: '',
        },
        sevdesk: {
            key: '',
            secret: '',
            token: '',
        }
    },

    token: null,
    edid: null,
    data: null,
}


// make all mutations
export const mutations = {
    ...make.mutations(state),
    save(state, payload){
        state.last_updated = payload
    },

    setEdooboxLogin(state, payload){

    }
}

// actions
export const actions = {
    ...make.actions(state),
    
    save({ commit }){
        commit('save', (new Date).valueOf() )
    },

    loginEdoobox({ commit, state }){
        console.log('store::app loginEdobox', state)

        let data = {
            key:    state.config.edoobox.key,
            secret: state.config.edoobox.secret,
            "expire":"2030-01-01T01:00:00+02:00"
        }

        let headers = {
            'grant-type': 'password',
        }

        edoobox.post('auth', data, { headers })
            .then( ({ data }) => {
                console.log(data)
            })
            .catch( e => console.log(e) )
    },

    // addFiles({ commit, dispatch, state}, payload){
    //     commit('addFiles', payload)
    // }
}

// getters
export const getters = {
  // make all getters (optional)
  ...make.getters(state),

  // overwrite default `items` getter
  // allFiles: state => {
  //     return state.images
  // },
}

// console.log({
//     mutations, actions, getters
// })
