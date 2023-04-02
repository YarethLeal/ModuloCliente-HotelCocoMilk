using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades.Entities
{
    public class Publicidad
    {
        [Key]
        public int id_publicidad { get; set; }
        public string imagen { get; set; } //byte[]
        public string destino { get; set; }
        //public bool eliminado { get; set; }
    }

}
