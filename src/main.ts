import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import {
	faChevronDown,
	faChevronUp,
	faPizzaSlice,
	faStar,
	faCartPlus,
	faMartiniGlassCitrus,
	faBlender,
	faIceCream,
	faCakeCandles,
	faXmark,
	faCandyCane,
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(
	faChevronDown,
	faChevronUp,
	faPizzaSlice,
	faStar,
	faCartPlus,
	faMartiniGlassCitrus,
	faBlender,
	faIceCream,
	faCakeCandles,
	faXmark,
	faCandyCane
);

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);

/* add font awesome icon component */
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
