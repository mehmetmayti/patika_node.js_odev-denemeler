const http =require('http');

const port=5000;

const server=http.createServer((req,res)=>{

    
    if(req.url==='/'){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>INDEX SAYFASINA HOŞGELDİNİZ</h2>");
    }
    else if(req.url==='/hakkimda'){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>HAKKIMDA SAYFASINA HOŞGELDİNİZ</h2>");
    }
    else if(req.url==='/iletisim'){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>İLETİŞİM SAYFASINA HOŞGELDİNİZ</h2>");
    }
    else{
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h2>BÖYLE BİR SAYFA BULUNAMADI !!!</h2>");
    }

    res.end();
});

server.listen(port);