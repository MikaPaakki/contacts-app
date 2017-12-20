using ContactsWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Newtonsoft.Json;

namespace ContactsWebApi.Services
{
    public class TokenService : ITokenService
    {
        public async Task<AccessToken> RequestAccessToken(Request authenticationRequest)
        {
            AccessToken token = null;

            // Add request parameters
            var authenticationParams = new List<KeyValuePair<string, string>>
            {
                new KeyValuePair<string, string>("client_id", "3e5da221-1e0b-41fe-8eb0-f00168e009ec"),
                new KeyValuePair<string, string>("resource", "3e5da221-1e0b-41fe-8eb0-f00168e009ec"),
                new KeyValuePair<string, string>("username", "user-x@burnin81hotmail.onmicrosoft.com"),
                new KeyValuePair<string, string>("password", "DopA2017"),
                new KeyValuePair<string, string>("grant_type", "password"),
                new KeyValuePair<string, string>("client_secret", "WDrk4tGlH7ai2aAUTyl4Q+AFGeQVz2IHu2BrDwuRa58=")
            };

            // Add endpoint
            string endpoint = "https://login.windows.net/83d93547-4157-41b1-bcb5-e1811c1816bd/oauth2/token";

            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("Cache-Control", "no-cache");
                HttpContent content = new FormUrlEncodedContent(authenticationParams);
                var response = await httpClient.PostAsync(endpoint, content);

                if (response.IsSuccessStatusCode)
                {
                    var data = await response.Content.ReadAsStringAsync();
                    token = JsonConvert.DeserializeObject<AccessToken>(data);
                }
            }
            return token;

        }
    }
}
