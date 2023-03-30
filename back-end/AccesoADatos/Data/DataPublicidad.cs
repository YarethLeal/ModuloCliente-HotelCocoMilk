using AccesoADatos.Context;
using Microsoft.EntityFrameworkCore;
using Entidades.Entities;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using System.IO.Pipes;

namespace AccesoADatos.Data
{
    public class DataPublicidad
    {
        public async Task<List<Publicidad>> mostrarImagenPublicidad()
        {
            using (var _context = new DBContext())
            {
                return await _context.publicidad.ToListAsync();
                
            }
        }
    }
}
