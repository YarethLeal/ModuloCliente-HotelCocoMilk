using AccesoADatos.Data;
using Entidades.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReglasDeNegocio.Business
{
    public class BusinessGaleria
    {
        private DataGaleria dataGaleria;
        public BusinessGaleria()
        {
            dataGaleria = new DataGaleria();
        }

        public async Task<List<Galeria>> listarGaleria()
        {
            return await dataGaleria.listarGaleria();
        }
    }
}
