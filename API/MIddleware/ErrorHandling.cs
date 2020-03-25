using System;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using Application.Errors;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace API.MIddleware
{
    public class ErrorHandling
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ErrorHandling> _logger;
        public ErrorHandling(RequestDelegate next, ILogger<ErrorHandling> logger)
        {
            this._logger = logger;
            this._next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (System.Exception exception)
            {

                await HandleExceptionAsync(context, exception, _logger);
            }
        }

        private async Task HandleExceptionAsync(HttpContext context, Exception exception, ILogger<ErrorHandling> logger)
        {
            object errors = null;

            switch (exception)
            {
                case RestException re:
                    logger.LogError(exception, "REST ERROR");
                    errors = re.errors;
                    context.Response.StatusCode = (int)re.code;
                    break;
                case Exception e:
                    logger.LogError(exception, "SERVER ERROR");
                    errors = string.IsNullOrWhiteSpace(e.Message) ? "Error" : e.Message;
                    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    break;
            }

            context.Response.ContentType = "application/json";
            if (errors != null)
            {
                var result = JsonSerializer.Serialize(new
                {
                    errors
                });

                await context.Response.WriteAsync(result);
            }
        }
    }
}