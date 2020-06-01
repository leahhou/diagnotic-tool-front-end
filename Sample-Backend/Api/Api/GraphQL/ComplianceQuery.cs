using System.Linq;
using Api.Database;
using GraphQL.Types;

namespace Api.GraphQL
{
    public class ComplianceQuery : ObjectGraphType
    {
        public ComplianceQuery(ApplicationDbContext db)
        {
            Field<ComplianceType>(
                "Compliance",
                arguments: new QueryArguments(
                    // new QueryArgument<IdGraphType> { Name = "id", Description = "The ID of the Compliance." },
                    new QueryArgument<StringGraphType> { Name = "requestId", Description = "The Request ID of the Compliance." },
                    new QueryArgument<StringGraphType> { Name = "environment", Description = "The Environemnt of the Compliance." },
                    new QueryArgument<StringGraphType> { Name = "createDate", Description = "The Create Date of the Compliance." }
                    ),
                resolve: context =>
                {
                    var requestId = context.GetArgument<string>("requestId");
                    var environment= context.GetArgument<string>("environment");
                    var createDate= context.GetArgument<string>("createDate");
                    var compliance = db
                        .Compliances
                        .FirstOrDefault(i => i.RequestId == requestId && i.Environment== environment && i.CreateDate== createDate);
                    return compliance;
                });

            Field<ListGraphType<ComplianceType>>(
                "Compliances",
                resolve: context =>
                {
                    var compliances = db.Compliances;
                    return compliances;
                });
        }
    }
}