using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Blazor.Extensions
{
    public interface IToastService
    {
        Task<Toast> CreateAsync(string title, string text = null, ToastType? type = null,  string icon = null, int? timeout = null, Action onClick = null);
    }
}
