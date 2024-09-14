    import express, { text } from "express";
    import {dirname,join} from  'path';
    import {fileURLToPath} from 'url';
    import services from './services.json' assert { type: 'json' };
    import nodemailer from "nodemailer";
    import { error } from "console";
    import  dotenv from "dotenv";

    const app = express();
    const port = 3000;
    const __dirname = dirname(fileURLToPath(import.meta.url));
    dotenv.config()
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.set('view engine', 'ejs');
    app.set('views', join(__dirname, '..', 'views'));
    app.use(express.static(join(__dirname,'..','public')));
    app.use('/products', express.static(join(__dirname, '..', 'product-page/build')));

    // app.get('/', (req,res)=>{
    //     res.sendFile(__dirname,'..','public',"/index.html");
    // });

    app.get('/', (req, res) => {
        res.render('index', {webpagename:"Wesli Innovation | Home"});
    });

    // app.get('/products', (req,res)=>{
    //     res.render("products", {webpagename:"Wesli Innovations | Products"});
    // })

    app.get('/products/*', (req, res) => {
        res.sendFile(join(__dirname, '..', 'product-page/build', 'index.html'));
    });

    app.get('/services', (req,res)=>{
        res.render("services", {webpagename:"Wesli Innovations | Services",services});
    })

    app.get('/service/:id', (req,res)=>{
        const serviceId = req.params.id;
        const service = services.find(service=>service.title === serviceId);
        if (service) {
            console.log("Image Path: ", service.image); 
            res.render('service', {webpagename:"Wesli Innovations | Services", service: service });
        } else {
            res.status(404).send('Service not found');
        }
    })

    app.post("/send-enquiry", (req,res)=>{
        const {name, email, message} = req.body;
        console.log(`${name}, ${email}, ${message}`);
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user:process.env.USERNAME,
                pass:process.env.PASSWORD
            }
        });

        const mailing={
            from:"wesliinnovations@gmail.com",
            to:"wesliinnovations@gmail.com",
            subject:`${name} placed a new Enquiry from Wesli Innovations Website`,
            text: `${message}, ${email}`
        };

        transporter.sendMail(mailing,(error,info)=>{
            if(error)
            {
                console.log(error);
                res.status(500).send("Error sending email");
            }
            else {
                console.log("Email sent: " + info.response);
                res.status(200).send("Enquiry sent successfully");
            }
        })
    })
    app.use((req, res, next) => {
        res.status(404).render('404', { webpagename: 'Page Not Found' });
    });


    app.listen(`${port}`, () => {
        console.log("Server is running on port: ", `${port}`);
    });