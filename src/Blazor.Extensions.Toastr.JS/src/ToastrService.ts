import * as toastr from "toastr";
import { BlazorType, MethodIdentifier, TypeIdentifier } from './BlazorTypes';

export class ToastrService {
  
  
  public static initialize() {
    const Blazor: BlazorType = window["Blazor"];
    
    Blazor.registerFunction('Blazor.Extensions.SignalR.StartConnection', (connectionId: string) => {
      //TODO remove this parse after Blazor fixed the async args json parsing code
      const parsedConnectionId = JSON.parse(connectionId);

      return window["BlazorExtensions"].HubConnectionManager.startConnection(parsedConnectionId);
    });
  }
}
