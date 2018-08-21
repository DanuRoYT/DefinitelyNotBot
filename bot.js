import json
import discord
from discord.ext import commands

client = commands.Bot(command_prefix = '??')
TOKEN = 'BOT_TOKEN'
client.remove_command('help')

@client.event
async def on_ready():
    print('Bot is ready.')
    print(client.user.name)
    print('--------------')

@client.command()
async def reguli():
    await client.say(
        """
        **@everyone REGULAMENTUL COMUNITATI Subscribers & Lupis SPERAM SAL RESPECTATI CU MARE DRAG /!\

:arrow_right:? Cand faceti cerere grad trebuie sa puneti acest cuvant keye daca nu nu puteti primi grad Cuvant keye::arrow_forward:? Nu,nulvoi citi niciodata


:arrow_right:? Nu injurati limbajul lincentios sau deranjant unui Lupisor sau unui Lupisor Alfa  se pedepseste cu [W]=Warn [B]=Ban [K]=Kick


:arrow_right:? Nu cereti grade doar facand cererea pentru grad cersirea gradelor se pedepseste cu [M]=Mute 1h 2m si 10s


:arrow_right:? Nu se face reclama la alte servere doar daca faceti cerere parteneriat obligatoriu daca vreti promova un server de discord sau al vostru**
        """)
@client.command()
async def owner():
    embed = discord.Embed(
        title = 'Utilizatorul : DanuRo YT',
        colour = discord.Colour.Blue()
    )

    embed.set_footer(text='Acesta a fost utilizator-ul DanuRo YT.')
    embed.set_image(url='https://cdn.discordapp.com/attachments/419863536769171476/476439783485210624/Aavatar_3D.png')
    embed.set_thumbnail(url='https://cdn.discordapp.com/attachments/419863536769171476/476439783485210624/Aavatar_3D.png')
    embed.set_author(name='TheSuperRedWolf#3477')
    icon_url='https://cdn.discordapp.com/attachments/419863536769171476/476439783485210624/Aavatar_3D.png'
    embed.add_field(name='Ani :', value='10', inline=True)
    embed.add_field(name='Nume :', value='Danu', inline=True)
    embed.add_field(name='Skill-uri :', value='YouTuber, Gamer.', inline=False)

    await client.say(embed=embed)

@client.command()
async def programator():
    embed = discord.Embed(
        title = 'Utilizatorul : DragonKiller1234',
        description = 'Calm (in unele situatii), trist, in depresie, timid, nu e bagat in seama.',
        colour = discord.Colour.blue()
    )

    embed.set_footer(text='Acesta a fost utilizator-ul DragonKiller1234.')
    embed.set_image(url='https://i1.sndcdn.com/artworks-000126106899-hxdlwf-t500x500.jpg')
    embed.set_thumbnail(url='https://i1.sndcdn.com/artworks-000126106899-hxdlwf-t500x500.jpg'
