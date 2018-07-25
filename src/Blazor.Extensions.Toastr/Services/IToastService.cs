using System;
using System.Collections.Generic;
using System.Text;

namespace Blazor.Extensions
{
    public interface IToastService
    {
        Toast Create(string title, string text = null, ToastType? type = null,  string icon = null, int? timeout = null);
    }
}
