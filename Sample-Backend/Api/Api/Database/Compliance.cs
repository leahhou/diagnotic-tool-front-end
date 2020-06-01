using System.Collections.Generic;

namespace Api.Database
{
    public class Compliance
    {
        public int Id { get; set; }
        public string RequestId { get; set; }
        public string Environment { get; set; }
        public string CreateDate { get; set; }
        public string ClientId { get; set; }
        public string TenantId { get; set; }
        public string Details { get; set; }
    }
}