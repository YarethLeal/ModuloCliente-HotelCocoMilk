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

        public async Task<String> registarCliente(Cliente cliente)
        {
            try
            {
                using (var _context = new DBContext())
                {
                    _context.cliente.Add(cliente);
                    await _context.SaveChangesAsync();

                }
            }
            catch (DbUpdateException /* ex */)
            {

                return "No se pueden guardar los cambios. " +
                         "Vuelve a intentarlo y, si el problema persiste, " +
                         "consulte con el administrador del sistema.";
            }
            return "Cliente Registrado";

        }

        public async Task<List<Cliente>> buscarCliente(string nombre, string apellido)
        {
            using (var _context = new DBContext())
            {
                return await _context.cliente.Where(x => x.nombre.Contains(nombre) && x.apellido.Contains(apellido)).ToListAsync();
            }
        }

        public async Task<List<Cliente>> buscarClienteId(string id)
        {
            using (var _context = new DBContext())
            {
                return await _context.cliente.Where(x => x.id_cliente.Contains(id)).ToListAsync();
            }
        }

    }//class
}

