import { ToastService } from './ToastService';
const blazorExtensions = 'BlazorExtensions';

function initialize() {
  "use strict";

  if (typeof window !== 'undefined' && !window[blazorExtensions]) {
    // When the library is loaded in a browser via a <script> element, make the
    // following APIs available in global scope for invocation from JS
    window[blazorExtensions] = {
      Toastr: {
        Service: new ToastService()
      }
    };
  } else {
    window[blazorExtensions] = {
      ...window[blazorExtensions],
      Toastr: {
        Service: new ToastService()
      }
    };
  }
}

initialize();
