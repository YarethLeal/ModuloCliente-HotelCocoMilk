using Entidades.Entities;
using Microsoft.EntityFrameworkCore;
using AccesoADatos.Context;

namespace AccesoADatos.Data
{
    public class DataGaleria
    {
        public async Task<List<Galeria>> listarGaleria()
        {
            using (var _context = new DBContext())
            {

                return await _context.galeria.ToListAsync();
            }
        }
    }
}
