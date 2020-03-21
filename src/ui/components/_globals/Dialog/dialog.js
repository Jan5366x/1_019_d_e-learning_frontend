import Vue from 'vue';
import Dialog from './Dialog.vue';

const open = (propsData) => {
  const vm = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue;
  const DialogComponent = vm.extend(Dialog);
  const element = document.createElement('div');
  document.body.appendChild(element);
  return new DialogComponent({
    el: element,
    propsData,
  });
};

const DialogProgrammatic = {
  alert(param) {
    const defaultParam = {
      closeable: false,
    };
    const propsData = { ...defaultParam, ...param, type: 'alert' };
    return open(propsData);
  },

  confirm(param) {
    const defaultParam = {
      cancelable: true,
    };
    const propsData = { ...defaultParam, ...param, type: 'confirm' };
    return open(propsData);
  },

  prompt(param) {
    const defaultParam = {
      cancelable: true,
      autoClose: false,
    };
    const propsData = { ...defaultParam, ...param, type: 'prompt' };
    return open(propsData);
  },
};

export {
  DialogProgrammatic,
  Dialog,
};
