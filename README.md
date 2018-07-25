# Toastr

An implementation of Toastr in Blazor using JSInterop, but reimplemented to use only vanilla JavaScript. Therefore we do not have a dependency on jQuery.

> ⚠️ Warning: This project is build on top of an experimental framework. There is a high propability that there will be breaking changes from version to version.

## Demo
There is a sample application in /test/Blazor.Extensions.Toastr.Tests

## Installation

Currently not (yet) supported 

## Usage

### Add IToastService via DI

```csharp
var serviceProvider = new BrowserServiceProvider(services =>
{
    services.AddToasts();
});
```

### Inject into component/pages
```csharp
@using Blazor.Extensions
@inject IToastService ToastService
```


### Create a toast
```csharp
private void SendToast()
{
    Toast newToast = ToastService.Create(Title, Text, Type, Icon, Timeout);
}
```

### Setting Callbacks
Not yet supported.

### Setting Defaults
Not yet supported.