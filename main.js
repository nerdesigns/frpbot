const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();

var bot = new Discord.Client();
var prefix = ("/")
var randnum = 0;

bot.on('ready', () => {
    bot.user.setPresence({ game: {name: 'Garrys Mod | /help', type : 0}});
    console.log("FRP BOT FONCTIONNE");
});
//TOKEN DU BOT
bot.login('XXX');

bot.on("guildMemberAdd", member =>{
    const guild = member.guild;
    member.guild.channels.find("name", "presentation").send(`Bienvenue sur **French-Roleplay** ${member.user.username}, tu es le ${guild.memberCount}ème ! <:frp:395360601473286145> Présente-toi ici pour obtenir le grade Joueur FRP. Bon jeu ! :video_game:`)
});

bot.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latence est de ${m.createdTimestamp - message.createdTimestamp}ms. La latence de l'API est de ${Math.round(bot.ping)}ms`);
    console.log("/ping")
  }
  
  if(command === "advert") {
    if(!message.member.roles.some(r=>["Administrateur", "Webmestre","Fondateur","Manager","Responsable Admins"].includes(r.name)) )
      return message.reply("Vous n'avez pas les droits nécessaires pour utiliser cette commande.");

    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage); 
    var auth = message.author
    console.log(`ADVERT : ${sayMessage} de ${auth}`)
  }

  if(command === "advertmbd") {
    if(!message.member.roles.some(r=>["Administrateur", "Webmestre","Fondateur","Manager","Responsable Admins"].includes(r.name)) )
      return message.reply("Vous n'avez pas les permissions nécessaires pour utiliser cette commande.");
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{});
  var auth = message.author.username
  var advert_embed = new Discord.RichEmbed()
            .setColor('#00CE22')
            .setTitle("Annonce French-Roleplay")
            .setDescription(`${sayMessage}`)
            .setFooter(`posté par @${auth}`,`${message.author.avatarURL}`)
            .setThumbnail("https://cdn.discordapp.com/attachments/427148659675758601/442669553735041024/Blason_frp_original.png")
            message.channel.sendEmbed(advert_embed);

  }

});



bot.on('message', message => {
    if (message.content === "!ping"){
        message.channel.send("pong");
        console.log('ping pong');
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    }

    


//MESSAGE TEXTURES
    if (message.content === "/textures"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C400CE')
            .setTitle("Voici le pack des textures Counter Strike: Source.", "https://discordapp.com")
            .setDescription("---------choisir soit le fichier zip soit l'installeur------------")
            .setThumbnail("https://cdn.discordapp.com/attachments/427148659675758601/442669553735041024/Blason_frp_original.png")
            .addField("Fichier zip à extraire", "[>Téléchargement MEGA (Extraire dans **addons**)](https://mega.nz/#!iFZERCpY!inVqrmDPoJbjhxXksWNqZm64w9C9jdIsEOabGPshBbs)")
            .addField("Installeur (.exe)", "[>Téléchargement](http://downloads.icet-gaming.fr/CSS_GMOD_ICET.exe)")
            .setFooter("Bon jeu sur French-Roleplay !", "https://cdn.discordapp.com/attachments/427148659675758601/442669553735041024/Blason_frp_original.png")
            message.channel.sendEmbed(help_embed);
        console.log("Commande textures demandée");
      }
//REGLES
      if (message.content === "/regles"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#00CE22')
            .setTitle("La commande /regles permet d'afficher les règles du serveur.", "https://discordapp.com")
            .setDescription("Pour l'utiliser, tapez /regles [catégorie]")
            .setThumbnail("https://cdn.discordapp.com/attachments/427148659675758601/442669553735041024/Blason_frp_original.png")
            .addField("/regles general", "Affiche les règles générales.")
            .addField("/regles malanoche", "Affiche les règles des Partisans de la Malanoché.")
            .addField("/regles mafieux", "Affiche les règles des Mafieux.")
            .addField("/regles gangster", "Affiche les règles des Gangsters.")
            .addField("/regles police", "Affiche les règles de la Police.")
            .addField("/regles tueur", "Affiche les règles des Tueurs à Gages.")
            .addField("/regles noir", "Affiche les règles des Marchands Noirs.")
            .addField("/regles securite", "Affiche les règles des Agents de Sécurité.")
            .addField("/regles garde", "Affiche les règles des Gardes du Corps.")
            .addField("/regles banquier", "Affiche les règles des Banquiers.")
            .addField("/regles maire", "Affiche les règles du Maire.")
            .addField("/regles vendeur", "Affiche les règles des Vendeurs d'armes.")
            .addField("/regles voleur", "Affiche les règles des voleurs.")
            .addField("/regles ninja", "Affiche les règles des ninjas.")
            .addField("/regles informaticien", "Affiche les règles des Informaticiens.")
            .addField("/regles sdf", "Affiche les règles des SDF.")
            .addField("/regles cuisinier", "Affiche les règles des cuisiniers.")
            .addField("/regles chauffeur", "Affiche les règles des Chauffeurs de Taxis et Bus.")
            .addField("/regles serrurier", "Affiche les règles des Serruriers et Serruriers+.")
            .addField("/regles depanneur", "Affiche les règles des Dépanneurs.")
            .addField("/regles quincailler", "Affiche les règles des Quincaillers.")
            .addField("/regles ambulance", "Affiche les règles des Ambulanciers.")
            .addField("/regles pompier", "Affiche les règles des Pompiers.")
            .addField("/regles citoyen", "Affiche les règles des Citoyens.")
            .setFooter("Bon jeu sur French-Roleplay !", "https://cdn.discordapp.com/attachments/427148659675758601/442669553735041024/Blason_frp_original.png")
            message.channel.sendEmbed(help_embed);
        console.log("Commande regles demandée");
      }

    if (message.content === "/regles citoyen"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#00CE22')
            .addField("Voici les règles des Citoyens", "https://french-roleplay.com/index.php?topic=12.0")
            .setThumbnail("http://image.noelshack.com/fichiers/2016/25/1466420111-citoyen.png")
            .setFooter("Bon jeu sur French-Roleplay !", "https://cdn.discordapp.com/attachments/427148659675758601/442669553735041024/Blason_frp_original.png")
            message.channel.sendEmbed(help_embed);
        console.log("Commande citoyen demandée");

    }

    if (message.content === "/regles malanoche"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#00CE22')
            .addField("Voici les règles des Partisans de la Malanoché", "https://french-roleplay.com/index.php?topic=2862.0")
            .setThumbnail("http://image.noelshack.com/fichiers/2016/23/1465512865-manaloche-profil-copier.jpg")
            .setFooter("Bon jeu sur French-Roleplay !", "https://cdn.discordapp.com/attachments/427148659675758601/442669553735041024/Blason_frp_original.png")
            message.channel.sendEmbed(help_embed);
        console.log("Commande malanoche demandée");

    }

//MESSAGE COLLECTION
    if (message.content === "/collection"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#D71A63')
            .setTitle("Voici les collections nécessaires pour French-Roleplay.", "https://discordapp.com")
            .setDescription("-------------------------------------------------------")
            .setThumbnail("https://cdn.discordapp.com/attachments/427148659675758601/442669553735041024/Blason_frp_original.png")
            .addField("Content Pack", "[>Téléchargement (Cliquer sur **S'abonner à tout**)](https://steamcommunity.com/sharedfiles/filedetails/?id=251065049)")
            .addField("TDMCars Pack", "[>Téléchargement (Cliquer sur **S'abonner à tout**)](https://steamcommunity.com/sharedfiles/filedetails/?id=250039989)")
            .setFooter("Bon jeu sur French-Roleplay !", "https://cdn.discordapp.com/attachments/427148659675758601/442669553735041024/Blason_frp_original.png")
            message.channel.sendEmbed(help_embed);
        console.log("Commande collection demandée");
      }
//MESSAGE HELP
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#00CE22')
            .addField("Plop ! Voici ce qu'on peux faire avec ce super bot :) :", "  /help : Affiche les commandes du bot")
            .addField("/collection", "Envoie la collection workshop des addons du serveur.")
            .addField("/textures", "Envoie les textures Counter-Strike Source nécessaires pour le serveur.")
            .addField("/regles", "Affiche les commandes /regles.")
            .setFooter("créé par nerd et BlasterZ 48.")
            .setThumbnail("https://cdn.discordapp.com/attachments/427148659675758601/442669553735041024/Blason_frp_original.png")
            message.channel.sendEmbed(help_embed);
        console.log("Commande help demandée");
    }
//REPONSES ALEA HUMEUR DU BOT 
    if (message.content === "Comment va le bot ?"){
        random();
        if (randnum == 1){
            message.reply("Niquel et toi ?");
            console.log(randnum);
        }

        if (randnum == 2){
            message.reply("Je pète la forme.");
            console.log(randnum);
        }
        
        if (randnum == 3){
            message.reply("C'est pas facile tous les jours la vie de robot.");
            console.log(randnum);
        }
        
        if (randnum == 4){
            message.reply("...");
            console.log(randnum);
        }
        
        if (randnum == 5){
            message.reply("Je vais très bien, même si cette phrase était complétement programmée.");
            console.log(randnum);
        }
        
        if (randnum == 6){
            message.reply("J'ai pas été conçu pour ça moi :(");
            console.log(randnum);
        }

        if (randnum == 7){
            message.reply("Arrêtez de me poser cette question !");
            console.log(randnum);
        }

        if (randnum == 8){
            message.reply("Encore une belle journée sur French-Roleplay :)");
            console.log(randnum);
        }

        if (randnum == 9){
            message.reply("J'ai fait un dessin ! \n https://vignette.wikia.nocookie.net/fantendo/images/e/e4/Mr_krabs_curling.png/revision/latest?cb=20130613032920");
            console.log(randnum);
        }

        if (randnum == 10){
            message.reply("J'ai pas été conçu pour ça moi :(");
            console.log(randnum);
        }

    }

});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(10);//AJOUTER 1 AU NOMBRE SI AJOUTER 1 REPONSES
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}

client.login(process.env.TOKEN);
