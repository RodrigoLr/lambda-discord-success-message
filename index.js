const { Webhook } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/webhook_id");

exports.handler = async (event) => {
    try {
        const message = '**BUILD SUCCESS**';
        await hook.success(message, 'Build Success', 'Development environment');
        console.log('Successfully sent webhook!');
        return { 
            statusCode: 200, body: {message: message}
            
        } 
    }
    catch(e){
        console.log(e.message);
        return { 
            statusCode: 400, body: JSON.stringify(e) 
            
        } 
    }
}
