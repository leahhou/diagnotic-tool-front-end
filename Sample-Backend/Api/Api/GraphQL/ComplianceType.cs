using Api.Database;
using GraphQL.Types;

namespace Api.GraphQL
{
    public class ComplianceType : ObjectGraphType<Compliance>
    {
        public ComplianceType()
        {
            Name = "Compliance";

            Field(x => x.Id, type: typeof(IdGraphType)).Description("Compliance's ID.");
            Field(x => x.RequestId, type: typeof(StringGraphType)).Description("Compliance Request Id");
            Field(x => x.Environment, type: typeof(StringGraphType)).Description("Compliance Environment");
            Field(x => x.CreateDate, type: typeof(StringGraphType)).Description("Compliance Create Date");
            Field(x => x.ClientId).Description("Compliance Client Id");
            Field(x => x.TenantId).Description("Compliance Tenant Id");
            Field(x => x.Details).Description("Compliance Details");
        }
    }
}