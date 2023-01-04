const express = require("express");
const app = express();
const router = express.Router();
let path = require("path");
const publicPath = path.join(__dirname, "./views");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
const connectLivereload = require("connect-livereload");



app.get("/", (req, res) => {
  res.render("sign-in");
});

// layout engin
let expressLayout = require("express-ejs-layouts");

app.use(expressLayout);

app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.set("views", __dirname + "/views");

app.set("view engine", "ejs");

app.use("/", router);
app.listen(process.env.port || 3000);
console.log("Web Server is listening at port " + (process.env.port || 3000));


app.get("/index", (req, res) => {
  res.render("index", { namePage : " " });
});

app.get("/sign-up", (req, res) => {
  res.render("sign-up", { namePage : "اضافه مستخدم" });
});

app.get("/tables", (req, res) => {
  res.render("tables", { namePage : "الجداول" });
});


app.get("/Em", (req, res) => {
  res.render("em", { namePage : "الموظافين" });
});

app.get("/billing" , (req , res) => {
  res.render("billing", { namePage : "الفواتير" });
});

app.get("/notif", (req , res) => {
  res.render("notif", { namePage : "ألاشعارات" });
});

app.get("/profile", (req , res) => {
  res.render("profile", { namePage: "تعريف"});
}); 

app.get("/order" , (req , res) => {
  res.render("order", { namePage : "الطلبات"});
})


app.get("/goldPrice" , (req , res) => {
  res.render("goldPrice", { namePage : "سعر الذهب"});
})



 







