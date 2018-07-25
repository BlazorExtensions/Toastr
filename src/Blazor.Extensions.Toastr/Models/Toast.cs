using System;
using System.Collections.Generic;
using System.Text;

namespace Blazor.Extensions
{
    public class Toast
    {
        #region Properties
        public string Title { get; set; }
        public string Text { get; set; }
        public ToastType? Type { get; set; } = ToastType.Info;
        public string Icon { get; set; }
        public int? Timeout { get; set; } = 4500;
        public Action Callback { get; set; }
        #endregion

        #region Overriden Functions
        public override string ToString()
        {
            return $"Title: {this.Title}\nText : {this.Text}\nType : {this.Type.ToString()}\nIcon: {this.Icon}\nTimeout : {this.Timeout}";
        }
        #endregion
    }
}