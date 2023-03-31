using AccesoADatos.Context;
using Microsoft.EntityFrameworkCore;
using Entidades.Entities;

namespace AccesoADatos.Data
{
    public class DataCliente
    {   
        public async Task<List<Cliente>> listarCliente()
        {
            using (var _context = new DBContext())
            {
                return await _context.cliente.ToListAsync();
            }
        }
    }
}
