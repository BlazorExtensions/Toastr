using System;
using System.Threading.Tasks;
using Microsoft.JSInterop;

namespace Blazor.Extensions
{
    public class ToastService : IToastService
    {
        public async Task<Toast> CreateAsync(string title, string text = null, ToastType? type = null, string icon = null, int? timeout = null, Action onClick = null)
        {
            Toast toast = new Toast
            {
                Title = title,
                Text = text,
                Type = type,
                Icon = icon,
                Timeout = timeout,
            };
            await JSRuntime.Current.InvokeAsync<object>(MethodNames.CREATE, toast, new DotNetObjectRef(toast));
            toast.Callback = onClick;
            return toast;
        }
    }
}
