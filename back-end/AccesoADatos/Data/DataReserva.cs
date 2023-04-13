using AccesoADatos.Context;
using Entidades.Entities;

namespace AccesoADatos.Data
{
    public class DataReserva
    {
        public async Task<ReservacionDisponible> listarHabitacionReserva(DateTime fechaLlegada, DateTime fechaSalida, string tipoHabitacion)
        {
            using (var _context = new DBContext())
            {
                //Se obtiene el id del tipo de habitación.
                TipoHabitacion tipo_habitacion = _context.tipo_habitacion.Where(tp => tp.tipo == tipoHabitacion).First();

                //Se obtiene una lista con las habitaciones que son del tipo especificado.
                List<Habitacion> listaHabitaciones = _context.habitacion.Where(h => h.id_tipo_habitacion == tipo_habitacion.id_tipo_habitacion).OrderBy(x => x.numero_id).ToList();

                //Se obtiene una lista de todas las reservas actuales.
                List<Reserva> listaReservas = _context.reserva.Where(r => r.eliminado == false).OrderBy(x => x.fecha_entrada).ToList();

                //Se recorre la lista de Reservas y se obtienen las únicas con las habitaciones deseadas.
                ReservacionDisponible reservaDisponible = new ReservacionDisponible();
                var _encontrado = false;

                for (int x = 0; x < listaHabitaciones.Count(); x++)
                {
                    for (int i = 0; i < listaReservas.Count(); i++)
                    {
                        if (listaHabitaciones[x].numero_id == listaReservas[i].id_habitacion)
                        {
                            if (((listaReservas[i].fecha_entrada < fechaLlegada && listaReservas[i].fecha_entrada < fechaSalida)  // La fecha de llegada es antes de la fecha de llegada y salida de dicha habitación reservada y
                                && (listaReservas[i].fecha_salida < fechaLlegada && listaReservas[i].fecha_salida < fechaSalida)) // la fecha de salida es antes de la fecha de llegada y salida de dicha habitación reservada, por lo tanto, está disponible.
                                || ((listaReservas[i].fecha_entrada > fechaLlegada && listaReservas[i].fecha_entrada > fechaSalida) // La fecha de llegada es después de la fecha de llegada y salida de dicha habitación reservada y
                                && (listaReservas[i].fecha_salida > fechaLlegada && listaReservas[i].fecha_salida > fechaSalida)))  // la fecha de salida es antes de la fecha de llegada y salida de dicha habitación reservada, por lo tanto, está disponible.
                            {
                                reservaDisponible.numero_habitacion = listaReservas[i].id_habitacion;
                                reservaDisponible.id_tipo_habitacion = tipo_habitacion.id_tipo_habitacion;
                                reservaDisponible.tipo = tipo_habitacion.tipo;
                                reservaDisponible.informacion = tipo_habitacion.informacion;
                                reservaDisponible.imagen = tipo_habitacion.imagen;
                                reservaDisponible.tarifa = tipo_habitacion.tarifa;

                                _encontrado = true;
                                break;
                            }
                        }
                    } // Fin for

                    if (_encontrado == true)
                        break;
                } // Fin for

                return await Task.FromResult(reservaDisponible);

            }
        }
    }
}
