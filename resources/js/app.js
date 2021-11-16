/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import router from "./router";
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import Swal from 'sweetalert2'

window.Swal = Swal;


Vue.use(Vuesax);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    methods: {
        alertNotification(position = 'top-right', border, title, description) {
            const noti = this.$vs.notification({
                progress: 'auto',
                border,
                position,
                title: title,
                text: ` ${description} `
            })
        },
        alertNotificationMessage(status, res) {
            switch (status) {
                case 500:
                    this.alertNotification('top-right', 'danger', `Oops, Something Went Wrong ${status} Error! `, res.message);
                    break;
                case 422:
                    this.alertNotification('top-right', 'danger', `Oops, Unprocessable Entity ${status} Error! `, res);

                    break;
                case 200:
                    this.alertNotification('top-right', 'success', `response ${status} successfully! `, res);
                    break;
                case 301:
                    this.alertNotification('top-right', 'success', `Oops, Unprocessable Entity ${status} Error! `, res);
                    break;
                case 401:
                    this.alertNotification('top-right', 'danger', `Unauthorized, Oops Unprocessable Entity  Entity ${status} Error! `, res.message);
                    this.logoutUser();
                    break;
                default:
                    break;
            }
        },
        logoutUser() {
            axios.post('/logout').then((res) => {
                window.location.href = "/login";
            });
        },
    }
});
