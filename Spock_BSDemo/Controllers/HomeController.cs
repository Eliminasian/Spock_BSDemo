using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Spock_BSDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult BSDemo()
        {
            return View();

        }
        public ActionResult JSDemo()
        {
            return View();

        }
        public ActionResult JQueryDemo()
        {
            return View();
        }
        public ActionResult LoopDemo()
        {
            return View();

        }

        public ActionResult FactorialDemo()
        {
            return View();

        }

        public ActionResult PalindromeDemo()
        {
            return View();

        }

        public ActionResult FizzBuzz()
        {
            return View();

        }

        public ActionResult SumOfAllFears()
        {
            return View();

        }
    }
}