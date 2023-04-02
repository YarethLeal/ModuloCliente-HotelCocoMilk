using AccesoADatos.Context;
using Microsoft.EntityFrameworkCore;
using Entidades.Entities;
using System.Linq;

namespace AccesoADatos.Data
{
    public class DataPagina
    {
        public async Task<List<Pagina>> mostrarPagina(string tipoPagina)
        {
            using (var _context = new DBContext())
            {
                var listaPagina = (from p in _context.pagina
                                    join tp in _context.tipo_pagina on p.id_tipo_pagina equals tp.id_tipo_pagina
                                    where tp.tipo == tipoPagina
                                   select new Pagina
                                    {

                                        id_pagina = p.id_pagina,
                                        id_tipo_pagina = p.id_tipo_pagina,
                                        descripcion = p.descripcion,
                                        imagen = p.imagen
                                    });

                return await listaPagina.ToListAsync();
            }
        }
    }
}
