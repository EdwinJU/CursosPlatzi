using System;
using HolaMundo.Models;
using Microsoft.AspNetCore.Mvc;



namespace HolaMundo.Controllers
{
	public class EscuelaController : Controller
	{
		public IActionResult Index()
		{
			var escuela = new Escuela();
			escuela.AñoFundacion = 2000;
			escuela.EscuelaId = Guid.NewGuid().ToString();
			escuela.Nombre = "Platzi School";

			ViewBag.bolsita = "Estadio";
			return View(escuela);
		}

	}
}
