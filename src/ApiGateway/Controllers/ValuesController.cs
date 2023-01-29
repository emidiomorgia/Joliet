using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiGateway.Dto;
using Microsoft.AspNetCore.Mvc;

namespace ApiGateway.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ValuesController : ControllerBase
    {
         [HttpGet]
         [Route("{value}")]
         public IActionResult GetValue([FromRoute] int value) {
            return Ok(new ValueResponse(){Value = value});
         }
    }
}