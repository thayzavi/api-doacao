const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const locais = [
    {
    "nome": "Hemope Recife",
    "endereco": "Rua Joaquim Nabuco, 171 - Graças, Recife - PE",
    "cidade": "Recife",
    "horario": "Seg a Sex das 7h15 às 18h30",
    "imagem": "https://th.bing.com/th/id/OIP.Ef9rMeMBPdJZoeyWrF9PKAHaEG?cb=iwp2&rs=1&pid=ImgDetMain",
    "latitude": -8.05389,
    "longitude": -34.88111
  },
  {
    "nome": "Hemope Caruaru",
    "endereco": "Av. Osvaldo Cruz, s/n - Maurício de Nassau, Caruaru - PE",
    "cidade": "Caruaru",
    "horario": "Seg a Sex das 7h30 às 12h30",
    "imagem": "https://imagens.ne10.uol.com.br/legado/ne10/imagem/noticia/2018/11/30/normal/602ee14bf061bdea805beeb3f3be55fd.jpg",
    "latitude": -8.284218,
    "longitude": -35.969945
  },
  {
    "nome": "Hemocentro Regional Garanhuns",
    "endereco": "Rua Gonçalves Maia, s/n – Heliópolis, Garanhuns – PE, 55296-270",
    "cidade": "Garanhuns",
    "telefone": "(87) 3761-8520",
    "horario": "Terça a quinta-feira, das 13h30 às 17h30",
    "imagem": "https://noticias.maringa.com/storage/noticias/21096_doacao-de-sangue-190320.jpg",
    "latitude": -8.8901,
    "longitude": -36.4923
  },
  {
    "nome": "Núcleo de Hemoterapia Regional Arcoverde",
    "endereco": "Avenida Joaquim Nabuco, s/n – São Cristóvão, Arcoverde – PE, 56500-000",
    "cidade": "Arcoverde",
    "telefone": "(87) 3821-8550",
    "horario": "Segunda a sexta-feira, das 08h às 11h30",
    "imagem": "https://lh3.googleusercontent.com/gps-cs-s/AC9h4novc-zj9jgmUhmNcH08baqBj-s3bzoZk8eZ77RYQ9l5g9vHiX5lbv5Inh0SClDWuzep_sBBlo4guoyRMykrKOgksXoYfD6JwMZ4Dkfd6c7Tf2PhSDwH4TRh55sA3efed3pDMF0=w426-h240-k-no",
    "latitude": -8.4152,
    "longitude": -37.0576
  },
  {
    "nome": "Núcleo de Hemoterapia Regional Salgueiro",
    "endereco": "Rua Joaquim Gondim, 65 – Santo Antônio, Salgueiro – PE, 56000-000",
    "cidade": "Salgueiro",
    "telefone": "(87) 3871-8569",
    "horario": "Segunda a sexta-feira, das 08h às 12h",
    "imagem": "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr14QQN1-po7bgzcVbmbckmi5j5YWkbWN8jGZWCwATi5_2aA-E3UZ1F1qLjaf8TjJg3IqhyG66KSJEiLBYtA-BvIM2oJhARWB1k1YRLEueCQBJi9axdbNyv7OWOil-wvUmBJGdK=w408-h408-k-no",
    "latitude": -8.0737,
    "longitude": -39.1246
  },
   {
    "nome": "Hemocentro Regional Petrolina",
    "endereco": "Rua Pacífico da Luz, s/n – Centro, Petrolina – PE, 56304-909",
    "cidade": "Petrolina",
    "telefone": "(87) 3866-6601",
    "horario": "Segunda a sexta-feira, das 07h30 às 11h30",
    "imagem": "https://lh3.googleusercontent.com/gps-cs/AIky0YXQMberLMLVDvJtcfOYgu4GfEpnP3MBBlLqm_XTZXUVnKEiBj2MbDMuU2TnIbH4ACtMfdnvO609yf7_Q_lrSmCcQr8HoX7gJJUCazvUjTJIbet-Jd0bDUURvHGNZHUeCBikn2fW=w600-h321-p-k-no",
    "latitude": -9.3891,
    "longitude": -40.5027
  },
  {
    "nome": "Hemocentro Regional Ouricuri",
    "endereco": "Rua Ulisses Guimarães, s/n – Centro, Ouricuri – PE, 56200-000",
    "cidade": "Ouricuri",
    "telefone": "(87) 3874-4890",
    "horario": "Segunda, terça, quinta e sexta-feira, das 08h às 10h",
    "imagem": null,
    "latitude": -7.8796,
    "longitude": -40.0815
  },
  {
    "nome": "Agência Transfusional Regional Limoeiro",
    "endereco": "Rua Santa Terezinha, 174 – Limoeiro – PE, 55700-000",
    "cidade": "Limoeiro",
    "telefone": "(81) 3628-8806",
    "horario": null,
    "imagem": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Me_Fuz4qKEr3RhlAA8X75A&cb_client=search.gws-prod.gps&w=408&h=240&yaw=190.93742&pitch=0&thumbfov=100",
    "latitude": -7.8721,
    "longitude": -35.4402
  },
  {
    "nome": "Hemocentro Regional Serra Talhada",
    "endereco": "Rua Joaquim Godoy, s/n – Centro, Serra Talhada – PE, 56912-450",
    "cidade": "Serra Talhada",
    "telefone": "(87) 3831-9321",
    "horario": "Segunda a sexta-feira, das 07h às 10h",
    "imagem": "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noMtoCOx3HQmx2RXPAL8ZLW4Jr8kqO8R_2asaDpNoJju3k5NNkuH3JuG0dRI6YseBRjwKd_9ZiGtmJrMBOUCQzqgqkgZFoW-jrNEiQhW_6rKY40AhcPxF4V_QKq9aBPjIkBuSZrgg=w492-h240-k-no",
    "latitude": -7.9911,
    "longitude": -38.3006
  },
  {
    "nome": "Agência Transfusional Regional Palmares",
    "endereco": "Hospital Regional dos Palmares – Engenho Quilombo dos Palmares, BR 101 – Km 185, Palmares – PE",
    "cidade": "Palmares",
    "telefone": "(81) 9488-5974",
    "horario": null,
    "imagem": "https://lh3.googleusercontent.com/gps-cs/AIky0YWu-cNuM0i10Zw2MBcjg0MpGLCpN6KZ61K2Lvvz6CA9rOv84MPyjdUxtIHij1BJ1P5OpJvZxwva13RMc3QIbLClwk1EdrtF30H5a3sSeaNo5scElq197qQgZQI7RjtbLR1id3DYZg=w600-h321-p-k-no",
    "latitude": -8.6842,
    "longitude": -35.5891
  }
  ];

  //rota para lista todos os locais
  app.get('/', (req, res) => {
    res.json({locais});
  });

  // buscar local por nome 
  app.get('/locais/:nome', (req, res) => {
    const nomeLocal = req.params.nome.toLocaleLowerCase();
    const local = locais.find(l => l.nome.toLocaleLowerCase() === nomeLocal);

    if(!local) {
        return res.status(404).json({error: "Local não encontrado"});
    }
    res.json(local);
  });

  //Rota para adicionar um novo local
  app.post('/locais', (req, res) => {
    const { nome, endereco, cidade, horario, imagem, latitude, longitude } = req.body;

     if (!nome || !endereco || !cidade || !horario || !imagem || latitude === undefined || longitude === undefined) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }
    const novoLocal = { nome, endereco, cidade, horario, imagem, latitude, longitude };
    locais.push(novoLocal);

    res.status(201).json(novoLocal);
  });

  //Rota para atualizar 
  app.put('/locais/:nome', (req, res) => {
    const nomeLocal = req.params.nome.toLocaleLowerCase();
    const index = locais.findIndex(l => l.nome.toLocaleLowerCase()=== nomeLocal);
    
    if (index === -1){
      return res.status(400).json({error:"Local não encontrado "});
    }

    const { nome, endereco, cidade, horario, imagem, latitude, longitude } = req.body;

     if (!nome || !endereco || !cidade || !horario || !imagem || latitude === undefined || longitude === undefined) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }


    locais[index] = {nome, endereco, cidade, horario, imagem, latitude, longitude};

    res.json(locais[index]);
  });

  // Rota para deletar um local

  app.delete('/locais/:nome', (req,res) => {
    const nomeLocal = req.params.nome.toLocaleLowerCase();
    const index = locais.findIndex(l => l.nome.toLocaleLowerCase() === nomeLocal );
    
    if (index === -1) {
      return res.status(404).json({error:"Local não encontrado"});
    }

    const localRemovido = locais.splice(index, 1);

    res.json({message:"Local removido com sucesso ", local: localRemovido[0]});
  });
  //iniciar o servidor
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });