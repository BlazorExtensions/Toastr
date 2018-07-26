using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Blazor.Extensions
{
    public static class Extensions
    {
        public static IServiceCollection AddToastr(this IServiceCollection services)
        {
            return services.AddSingleton<IToastrService,ToastrService>();
        }
    }
}
