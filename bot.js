const Discord = require('discord.js');
const client = new Discord.Client();
import json
import discord

client = commands.Bot(command_prefix = '-')
TOKEN = 'BOT_TOKEN'
client.remove_command('help')

@client.event
async def on_ready():
    print('Bot is ready.')
    print(client.user.name)
    print('--------------')
    await client.change_presence(game=discord.Game(name='type -afk'))    
    
    
    

@client.command()
async def Afk
 this is a afk
 
@client.command()
async def owner():
    embed = discord.Embed(
        title = 'Utilizatorul : DanuRo YT',
        colour = discord.Colour.red()
    )

    embed.set_footer(text='Acesta a fost utilizator-ul TheSuperRedWolf.')
    embed.set_image(url='https://cdn.discordapp.com/attachments/419863536769171476/476439783485210624/Aavatar_3D.png')
    embed.set_thumbnail(url='https://cdn.discordapp.com/attachments/419863536769171476/476439783485210624/Aavatar_3D.png')
    embed.set_author(name='DanuRo YT#6977')
    icon_url='https://cdn.discordapp.com/attachments/419863536769171476/476439783485210624/Aavatar_3D.png'
    embed.add_field(name='Ani :', value='10', inline=True)
    embed.add_field(name='Nume :', value='Danu', inline=True)
    embed.add_field(name='Skill-uri :', value='YouTuber, Gamer.', inline=False)

    await client.say(embed=embed)

@client.command()
async def programator():
    embed = discord.Embed(
        title = 'Utilizatorul : DanuRo YT',
        description = 'Calm (in unele situatii), trist, in depresie, timid, nu e bagat in seama.',
        colour = discord.Colour.blue()
    )

    embed.set_footer(text='Acesta a fost utilizator-ul DanuRo YT.')
    embed.set_image(url='https://i1.sndcdn.com/artworks-000126106899-hxdlwf-t500x500.jpg')
    embed.set_thumbnail(url='https://i1.sndcdn.com/artworks-000126106899-hxdlwf-t500x500.jpg'
