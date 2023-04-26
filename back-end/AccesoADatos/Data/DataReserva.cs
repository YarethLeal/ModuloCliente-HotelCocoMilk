using AccesoADatos.Context;
using Entidades.Entities;
using Microsoft.EntityFrameworkCore;
using System.Globalization;
using System.Net.Mail;

namespace AccesoADatos.Data
{
    public class DataReserva
    {
        public async Task<List<Reserva>> listarReserva()
        {
            using (var _context = new DBContext())
            {
                return await _context.reserva.ToListAsync();
            }
        }

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

        public async Task<String> registarReserva(Reserva reserva)
        { var reservaBD = new Reserva();
            try
            {

                using (var _context = new DBContext())
                {
                                       
                    reservaBD.id_cliente = reserva.id_cliente;
                    reservaBD.id_habitacion = reserva.id_habitacion;
                    reservaBD.fecha_entrada = new DateTime(reserva.fecha_entrada.Year,
                        reserva.fecha_entrada.Month, reserva.fecha_entrada.Day,
                        reserva.fecha_entrada.Hour, reserva.fecha_entrada.Minute, 
                        reserva.fecha_entrada.Second, DateTimeKind.Utc);
                    reservaBD.fecha_salida = new DateTime(reserva.fecha_salida.Year,
                        reserva.fecha_salida.Month, reserva.fecha_salida.Day, 
                        reserva.fecha_salida.Hour, reserva.fecha_salida.Minute,
                        reserva.fecha_salida.Second, DateTimeKind.Utc);
                    reservaBD.fecha= new DateTime(reserva.fecha.Year,
                        reserva.fecha.Month, reserva.fecha.Day,
                        reserva.fecha.Hour, reserva.fecha.Minute,
                        reserva.fecha.Second, DateTimeKind.Utc);
                    reservaBD.transaccion = reserva.transaccion;
                    reservaBD.eliminado = reserva.eliminado;
                    _context.reserva.Add(reservaBD);
                    await _context.SaveChangesAsync();


                    Cliente cliente = _context.cliente.Where(tp => tp.id_cliente == reserva.id_cliente).First();
                    SmtpClient smtpClient = new SmtpClient("smtp-mail.outlook.com");
                    smtpClient.Port = 587;
                    smtpClient.Credentials = new System.Net.NetworkCredential("hotelCocoMilk@outlook.com", "cocomilk2023IF7100");
                    smtpClient.EnableSsl = true;

               
                    MailMessage message = new MailMessage();
                    message.From = new MailAddress("hotelCocoMilk@outlook.com");
                    message.To.Add(cliente.correo);
                    message.Subject = "Confirmación de reservación";
                    message.Body = "Estimado/a "+cliente.nombre+" "+cliente.apellido+", \r\n\r\n" +
                        "Le agradecemos por elegir nuestro servicio. Este mensaje es para confirmar su reserva, la cual hemos recibido y procesado.  " +
                        "Si necesitas hacer cambios o requieres asistencia por favor no dudes en contactarnos. " +
                        "\r\n\r\n ¡Esperamos verle pronto!";

                    
                    smtpClient.Send(message);

                }
            }
            catch (DbUpdateException  ex )
            {

                return "No se puede realizar la reserva" +
                         "Vuelve a intentarlo y, si el problema persiste, " +
                         "consulte con el administrador del sistema.";
            }
            return "Reserva Registrada";

        }
    }//class
}
