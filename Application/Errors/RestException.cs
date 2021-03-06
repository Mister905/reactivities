using System;
using System.Net;

namespace Application.Errors
{
    public class RestException : Exception
    {
        public HttpStatusCode code;
        public object errors;
        public RestException(HttpStatusCode code, object errors = null)
        {
            this.errors = errors;
            this.code = code;
        }
    }
}