import * as toastr from "toastr";
import { BlazorType, MethodIdentifier, TypeIdentifier } from './BlazorTypes';
import { Toast, ToastElement, ToastType } from "./Toast";

export class ToastrService {
  
  
  public static initialize() {
    const Blazor: BlazorType = window["Blazor"];
    const container = document.createElement('div');
    container.id = 'vanillatoasts-container';
    document.body.appendChild(container);

    Blazor.registerFunction('Blazor.Extensions.Toastr.Create', (toastObject: Toast) => {
      let toast: ToastElement = document.createElement('div') as ToastElement;
      //let numericId = ++autoincrement;
      //toast.id = 'toast-' + numericId;
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

      console.log("type: " + ToastType[toastObject.type]);
      console.log("type: " + toastObject.type)
      console.log(toastObject);
      // type
      if (toastObject.type) {
        toast.className += ' vanillatoasts-' + ToastType[toastObject.type].toLowerCase();
      }

      // click callback
      if (typeof toastObject.callback === 'function') {
        toast.addEventListener('click', toastObject.callback);
      }

      // toast api
      toast.hide = function () {
        toast.className += ' vanillatoasts-fadeOut';
        toast.addEventListener('animationend', removeToast, false);
      };

      // autohide
      if (toastObject.timeout) {
        setTimeout(toast.hide, toastObject.timeout);
      }

      // On Click
      toast.addEventListener('click', toast.hide);

      if (container) {
        container.appendChild(toast);
      }
      function removeToast() {
        container.removeChild(toast);
        // call dotnet to remove.
      }

      //add toast to object so its easily gettable by its id
      //VanillaToasts.toasts[toast.id] = toast;

      return toast;
    });
  }
}
