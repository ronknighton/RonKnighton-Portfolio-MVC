using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(RonKnighton_Portfolio_MVC.Startup))]
namespace RonKnighton_Portfolio_MVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
