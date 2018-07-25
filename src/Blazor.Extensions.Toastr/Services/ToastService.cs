using System;
using Microsoft.AspNetCore.Blazor.Browser.Interop;

namespace Blazor.Extensions
{
    public class ToastService : IToastService
    {
        public Toast Create(string title, string text = null, ToastType? type = null, string icon = null, int? timeout = null)
        {
            Toast toast = new Toast
            {
                Title = title,
                Text = text,
                Type = type,
                Icon = icon,
                Timeout = timeout,
            };

            return RegisteredFunction.Invoke<Toast>(MethodNames.CREATE_METHOD, toast);
        }
    }
}
