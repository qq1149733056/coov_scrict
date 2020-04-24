import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/components/LandingPage.vue';
import main from '@/mainPage/Main.vue';
import Guide from '@/mainPage/Guide.vue';
import pcMain from '@/mainPage/PcMain.vue';
import xmlJson from '@/xml_or_json/xmlJson.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pcMain',
      component: pcMain,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
