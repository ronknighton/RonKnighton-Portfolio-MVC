using RonKnighton_Portfolio_MVC.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace RonKnighton_Portfolio_MVC.Controllers
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

        //[HttpGet]
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(EmailModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {


                    var body = "<p>Portfolio Message-Email From: <bold>{0}</bold>({1})</p><p> Subject: </p><p>{2}<p> Message:</p><p>{3}</p> ";
                    var from = "MyPortfolio<ronknighton4u@gmail.com>";
                    //model.Body = "This is a message from your portfolio site. The name and the email of the contacting person is above.";
                    var email = new MailMessage(from, ConfigurationManager.AppSettings["emailto"])
                    {
                        Subject = model.Subject,
                        Body = string.Format(body, model.FromName, model.FromEmail, model.Subject, model.Body),
                        IsBodyHtml = true
                    };
                    var svc = new PersonalEmail();
                    await svc.SendAsync(email);
                    //ViewBag.IsEamilSent = true;
                    //ViewBag.Message = "Message Sent";
                    TempData["AlertMessage"] = "Your message has been sent!";
                    return RedirectToAction("Index");
                    //return View();

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await Task.FromResult(0);
                }
            }
            return View(model);
        }
    }
}