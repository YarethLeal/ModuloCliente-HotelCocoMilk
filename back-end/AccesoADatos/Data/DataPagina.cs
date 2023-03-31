using AccesoADatos.Context;
using Microsoft.EntityFrameworkCore;
using Entidades.Entities;

namespace AccesoADatos.Data
{
    public class DataPagina
    {
        public async Task<List<Pagina>> mostrarDescripcion()
        {
            using (var _context = new DBContext())
            {
                return await _context.pagina.ToListAsync();
            }
        }

        public async Task<List<Pagina>> mostrarImagen()
        {
            using (var _context = new DBContext())
            {
                return await _context.pagina.ToListAsync();
            }
        }
    }
}
