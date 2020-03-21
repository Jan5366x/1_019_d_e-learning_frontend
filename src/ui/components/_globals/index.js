import TextField from './Form/TextField.vue';
import TextArea from './Form/TextArea.vue';
import SelectField from './Form/SelectField.vue';
import LabelText from './Form/LabelText.vue';
import PasswordSecurity from './Form/PasswordSecurity.vue';
import Button from './Button.vue';
import Modal from './Modal.vue';
import ViewWrapper from './ViewWrapper.vue';
import LoadingSpinner from './Loading/Spinner.vue';
import Navbar from './Navigation/Navbar.vue';
import NavbarItem from './Navigation/Navbar/Item.vue';
import { DialogProgrammatic, Dialog } from './Dialog/dialog';

const Plugin = {
  install(Vue) {
    Vue.prototype.$ui = {};
    Vue.component('TextField', TextField);
    Vue.component('TextArea', TextArea);
    Vue.component('SelectField', SelectField);
    Vue.component('LabelText', LabelText);
    Vue.component('Dialog', Dialog);
    Vue.component('Button', Button);
    Vue.component('Modal', Modal);
    Vue.component('Navbar', Navbar);
    Vue.component('NavbarItem', NavbarItem);
    Vue.component('ViewWrapper', ViewWrapper);
    Vue.component('PasswordSecurity', PasswordSecurity);
    Vue.component('LoadingSpinner', LoadingSpinner);

    Vue.prototype.$ui.dialog = DialogProgrammatic;
  },
};

export default Plugin;
