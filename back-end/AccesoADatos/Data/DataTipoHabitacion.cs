﻿using AccesoADatos.Context;
using Microsoft.EntityFrameworkCore;
using Entidades.Entities;
using ServiceReference1;

namespace AccesoADatos.Data
{
    public class DataTipoHabitacion
    {
        public wsindicadoreseconomicosSoapClient.EndpointConfiguration endpointConfiguration { get; }
        
        public async Task<List<TipoHabitacion>> listarTipoHabitacion()
        {
            using (var _context = new DBContext())
            {
                return await _context.tipo_habitacion.ToListAsync();
            }
        }

        public async Task<string> obtenerTipoDeCambioXML()
        {
            wsindicadoreseconomicosSoapClient cliente = new wsindicadoreseconomicosSoapClient(endpointConfiguration);

            return await cliente.ObtenerIndicadoresEconomicosXMLAsync("317", "02/03/2023", "02/03/2023", "Alisson Rodriguez", "N", "alisson.rodriguezmora@ucr.ac.cr", "2MANRIIRNZ");
        }

        /*public async Task<ArrayOfXElement> obtenerTipoDeCambio() //ArrayOfXElement
        {
            wsindicadoreseconomicosSoapClient cliente = new wsindicadoreseconomicosSoapClient(endpointConfiguration);

            Task<ArrayOfXElement> result = cliente.ObtenerIndicadoresEconomicosAsync("317", "02/03/2023", "02/03/2023", "Alisson Rodriguez", "N", "alisson.rodriguezmora@ucr.ac.cr", "2MANRIIRNZ");

            return await cliente.ObtenerIndicadoresEconomicosAsync("317", "02/03/2023", "02/03/2023", "Alisson Rodriguez", "N", "alisson.rodriguezmora@ucr.ac.cr", "2MANRIIRNZ");
        }*/

    }
}
