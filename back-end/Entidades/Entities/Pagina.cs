using System.ComponentModel.DataAnnotations;

namespace Entidades.Entities
{
    public class Pagina
    {

        [Key]
        public int id_pagina { get; set; }

        public int id_tipo_pagina { get; set; }

        public string descripcion { get; set; }

        public string? imagen { get; set; }

    }
}
