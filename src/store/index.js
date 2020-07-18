import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from "@/router"


Vue.use(Vuex)
Vue.config.devtools = true

export const store = new Vuex.Store({
  state: {
      q: "",
      results: [],
      gifs: [],
      disabledMoreBtn: false,
      disabledSearchBtn: false,
      gifsToShow: 10
  },
  mutations: {
   loadMore(state) {
      return (state.gifs = state.results.slice(0, state.gifsToShow += 10));
    },
    GET_GIFS(state, gifs){
      state.gifs = gifs
    },
    updateQuery (state, query) {
     state.q = query
  }
  },
  actions: {
 async search({commit, state}) {
    const apiKey = "7oqbWiAr4RXO48oFiX2amhSTciHjnjY3";
    const url = "https://api.giphy.com/v1/gifs/search";
    try{
      const response = await axios
        .get(url, {
          params: {
            q: state.q,
            api_key: apiKey,
            limit: 100
          }
        })
          if (router.currentRoute.params.id !== state.q) {
            router.push({ name: "Home", params: { id: state.q } });
          }
           state.results = response.data.data;
          commit('GET_GIFS', response)
          const { pagination } = response.data;
          state.gifsToShow = pagination.count < 10 ? pagination.count : 10;
          state.gifs = state.results.slice(0, state.gifsToShow);     
       } catch(error){
         console.log(error);
       }
    },
  },
})
