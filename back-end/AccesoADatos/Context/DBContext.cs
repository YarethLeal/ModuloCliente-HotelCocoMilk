﻿using Entidades.Entities;
using Microsoft.EntityFrameworkCore;

namespace AccesoADatos.Context
{
    public partial class DBContext : DbContext
    {
        public DBContext() 
        {
        }

        public virtual DbSet<Cliente> cliente { get; set; }
        public virtual DbSet<Pagina> pagina { get; set; }
        public virtual DbSet<Publicidad> publicidad { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {

            options.UseNpgsql($"Server=163.178.107.7;Port=5432;Database=Hotel_CocoMilk;User Id=laboratorios;Password=saucr.120;");
           
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
  
            modelBuilder.HasDefaultSchema("hotel");
            base.OnModelCreating(modelBuilder);
                
        }

    }
}
