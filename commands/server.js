module.exports={
  name:"server",
  category:"basic",
  description:"Join our server :eyes:",
  usage:";;server",
  fulldescription:"Joins our server for seeking support",
  permissions:"embed links",
  load(client){
    client.registerCommand(module.exports.name,async(message,commandName,args)=>{
      message.channel.send({
        embed:{
          title:"Our servers",
          description:`Team Custard is Tribot's new server. To join,[Click here](https://discord.gg/bGyVhXfft3)`,
          color:"RANDOM"
        }
      }).catch(()=>{})
    });
  }
}