﻿using AccesoADatos.Context;
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


        public async Task<List<Publicidad>> GetAllPublicity()
        {
            //var db = dbConnection();

            using (var _context = new DBContext())
            {

                FormattableString sql = $"SELECT cliente.id_publicidad, imagen, destino FROM hotel.cliente";

                return await _context.publicidad.FromSqlRaw(@"SELECT id_publicidad, imagen, destino FROM hotel.publicidad").ToListAsync();
            }
        }
    }
}
