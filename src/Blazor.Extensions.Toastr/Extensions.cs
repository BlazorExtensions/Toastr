using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Blazor.Extensions
{
    public static class StorageExtensions
    {
        public static IServiceCollection AddToasts(this IServiceCollection services)
        {
            return services.AddSingleton<IToastService,ToastService>();
        }
    }
}
