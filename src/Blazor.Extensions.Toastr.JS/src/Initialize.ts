import { DotNetObjectRef } from './BlazorTypes';
import { Toast, ToastElement, ToastType } from "./Toast";

const blazorExtensions = 'BlazorExtensions';

interface IToastService {
  Create(toastObject: Toast, dotnetObjectRef: DotNetObjectRef): void;
}

class ToastService implements IToastService {
  constructor() {
    let container = document.createElement('div');
    container.id = 'vanillatoasts-container';
    document.body.appendChild(container);
  }

  Create(toastObject: Toast, dotnetObjectRef: DotNetObjectRef): void {
    console.log(toastObject);
    console.log(dotnetObjectRef);
    const container = document.getElementById('vanillatoasts-container');

    let toast: ToastElement = document.createElement('div') as ToastElement;
    toast.className = 'vanillatoasts-toast';

    // title
    if (toastObject.title) {
      let h4: HTMLHeadingElement = document.createElement('h4');
      h4.className = 'vanillatoasts-title';
      h4.innerHTML = toastObject.title;
      toast.appendChild(h4);
    }

    // text
    if (toastObject.text) {
      var p: HTMLParagraphElement = document.createElement('p');
      p.className = 'vanillatoasts-text';
      p.innerHTML = toastObject.text;
      toast.appendChild(p);
    }

    // icon
    if (toastObject.icon) {
      let img: HTMLImageElement = document.createElement('img');
      img.src = toastObject.icon;
      img.className = 'vanillatoasts-icon';
      toast.appendChild(img);
    }

    // type
    if (toastObject.type) {
      toast.className += ' vanillatoasts-' + ToastType[toastObject.type].toLowerCase();
    }

    // toast api
    toast.hide = () => {
      toast.className += ' vanillatoasts-fadeOut';
      toast.addEventListener('animationend', removeToast, false);
    };

    // autohide
    if (toastObject.timeout) {
      setTimeout(toast.hide, toastObject.timeout);
    }

    // On Click
    toast.addEventListener('click', toast.hide);
    toast.addEventListener('click', () => dotnetObjectRef.invokeMethodAsync("ActOnCallback"));

    // Add element
    container!.appendChild(toast);

    let removeToast = () => {
      container!.removeChild(toast);
    }
  }
}

function initialize() {
  "use strict";

  if (typeof window !== 'undefined' && !window[blazorExtensions]) {
    // When the library is loaded in a browser via a <script> element, make the
    // following APIs available in global scope for invocation from JS
    window[blazorExtensions] = {
      Toasts: {
        Service: new ToastService()
      }
    };
  } else {
    window[blazorExtensions] = {
      ...window[blazorExtensions],
      Toasts: {
        Service: new ToastService()
      }
    };
  }
}

initialize();
