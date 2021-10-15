import axios from 'axios'
export default {
  state: {
      token: '',
      user: '',
  },
  mutations: {
    SET_TOKEN (state, token) {
      
        state.token = token

     
    },
    SET_USER (state, data) {
      state.user = data
  },
  LOG_OUT (state) {
    state.user = ''
    state.token = ''
}
  },
  actions: {

    async signIn ({dispatch}, credentials) {

        let response = await axios.post(process.env.VUE_APP_URL+'/api/register', credentials)

        console.log(response.data.access_token)

        dispatch('attempt', response.data.access_token)

    },

    async attempt ({ commit }, token) {

      // alert('attempt')

        commit('SET_TOKEN', token)

        try {
            let response = await axios.get(process.env.VUE_APP_URL+'/api/user',{
              headers:{
                'Authorization': 'Bearer '+token
              }
            })
            console.log(response)
        commit('SET_USER', response.data)

        } catch (e) {
            alert(e)
        }

    },
    async logOut ({commit}) {

      commit('LOG_OUT')
 


    }

  },
  modules: {



  }
}
