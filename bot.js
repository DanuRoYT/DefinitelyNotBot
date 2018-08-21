import discord
from discord.ext import commands

TOKEN='BOT_TOKEN'
client = commands.Bot(command_prefix='??')

@client.event
async def on_ready():
    print('gata')
    print(client.user.name)

@client.command(pass_context=True)
async def clear(ctx, amount=100000000000000000000000000000000000000000000000):
    channel = ctx.message.channel
    messages = []
    async for message in client.logs_from(channel, limit=int(amount) + 1):
        messages.append(message)
    await client.delete_messages(messages)
    await client.say('Mesajele au fost sterse!', delete_after=1)

client.run(BOT_TOKEN)
