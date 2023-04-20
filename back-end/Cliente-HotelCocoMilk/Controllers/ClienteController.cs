using Entidades.Entities;
using Microsoft.AspNetCore.Mvc;
using ReglasDeNegocio.Business;

namespace Cliente_HotelCocoMilk.Controllers
{
    public class ClienteController : Controller
    {
        public IConfiguration Configuration { get; }

        public ClienteController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        [HttpGet]
        [Route("listarCliente")]
        public async Task<List<Cliente>> listarCliente()
        {
            return await (new BusinessCliente().listarCliente());
        }

        [HttpPost]
        [Route("registarCliente")]
        public async Task<String> registarCliente(Cliente cliente)
        {
            return await (new BusinessCliente().registarCliente(cliente));
        }

        [HttpPost]
        [Route("buscarCliente")]
        public async Task<List<Cliente>> buscarCliente(string nombre, string apellido)
        {
            return await (new BusinessCliente().buscarCliente(nombre, apellido));
        }

        [HttpPost]
        [Route("buscarClienteId")]
        public async Task<List<Cliente>> buscarClienteId(string id)
        {
            return await (new BusinessCliente().buscarClienteId(id));
        }
    }
}
