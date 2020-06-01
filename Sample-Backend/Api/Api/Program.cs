using Api.Database;

using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            IWebHost host = CreateWebHostBuilder(args).Build();
            using (IServiceScope scope = host.Services.CreateScope())
            {
                ApplicationDbContext context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                
                context.Compliances.AddRange(
                    new Compliance
                    {
                        RequestId = "Name1",
                        Environment = "Test1",
                        CreateDate = "Date1",
                        ClientId = "Client1",
                        TenantId  = "Tenant1",
                        Details = "Detail1"
                    },
                    new Compliance
                    {
                        RequestId = "Name2",
                        Environment = "Test2",
                        CreateDate = "Date2",
                        ClientId = "Client2",
                        TenantId  = "Tenant2",
                        Details = "Detail2",
                    }
                    // new Compliance
                    // {
                    //     RequestId = "Name1",
                    //     Environment = "Test1",
                    //     CreateDate = "Date1",
                    //     ClientId = "Client3",
                    //     TenantId  = "Tenant3",
                    //     Details = "Detail3",
                    // }
                );
                
                context.SaveChanges();
            }
            host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}