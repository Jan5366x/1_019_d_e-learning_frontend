import TextField from './Form/TextField.vue';
import TextArea from './Form/TextArea.vue';
import SelectField from './Form/SelectField.vue';
import LabelText from './Form/LabelText.vue';
import PasswordSecurity from './Form/PasswordSecurity.vue';
import Button from './Button.vue';
import Modal from './Modal.vue';
import ViewWrapper from './ViewWrapper.vue';
import HeadWrapper from './HeadWrapper.vue';
import LoadingSpinner from './Loading/Spinner.vue';
import Navbar from './Navigation/Navbar.vue';
import NavbarItem from './Navigation/Navbar/Item.vue';
import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';
import Icon from './Icon.vue';
import Card from './Card.vue';
import DividingHeader from './DividingHeader.vue';
import Tabs from './Tabs/Tabs.vue';
import TabItem from './Tabs/TabItem.vue';
import Headline1 from './Typography/Headline1.vue';
import Headline2 from './Typography/Headline2.vue';
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
    Vue.component('Dropdown', Dropdown);
    Vue.component('DropdownItem', DropdownItem);
    Vue.component('ViewWrapper', ViewWrapper);
    Vue.component('HeadWrapper', HeadWrapper);
    Vue.component('PasswordSecurity', PasswordSecurity);
    Vue.component('LoadingSpinner', LoadingSpinner);
    Vue.component('Icon', Icon);
    Vue.component('Card', Card);
    Vue.component('DividingHeader', DividingHeader);
    Vue.component('Tabs', Tabs);
    Vue.component('TabItem', TabItem);
    Vue.component('Headline1', Headline1);
    Vue.component('Headline2', Headline2);

    Vue.prototype.$ui.dialog = DialogProgrammatic;
  },
};

export default Plugin;
